const SPORTS_API = "https://api.sportsapi.app";
const ALLOWED_ORIGINS = new Set(["https://chendino54-beep.github.io"]);

function json(data, status = 200, origin = "") {
  const headers = {"Content-Type":"application/json; charset=utf-8","Cache-Control":"no-store"};
  if (origin && ALLOWED_ORIGINS.has(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
    headers["Vary"] = "Origin";
  }
  return new Response(JSON.stringify(data), {status, headers});
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin") || "";

    if (request.method === "OPTIONS") {
      const headers = {
        "Access-Control-Allow-Methods":"GET, OPTIONS",
        "Access-Control-Allow-Headers":"Content-Type",
        "Access-Control-Max-Age":"86400"
      };
      if (ALLOWED_ORIGINS.has(origin)) {
        headers["Access-Control-Allow-Origin"] = origin;
        headers["Vary"] = "Origin";
      }
      return new Response(null, {status:204, headers});
    }
    if (request.method !== "GET") return json({error:"Only GET requests are allowed"},405,origin);

    if (url.pathname === "/api/health") {
      return json({ok:true, worker:"dino-future", sportsApiSecretConfigured:Boolean(env.SPORTSAPI_KEY)},200,origin);
    }
    if (!env.SPORTSAPI_KEY) return json({error:"SPORTSAPI_KEY secret is missing"},500,origin);

    let apiPath = "";
    if (url.pathname === "/api/sports") {
      apiPath = "/v2/sports";
    } else if (url.pathname === "/api/livescores") {
      const sport = url.searchParams.get("sport");
      if (sport && !/^[a-z-]{2,30}$/.test(sport)) return json({error:"Invalid sport value"},400,origin);
      apiPath = "/v2/livescores" + (sport ? `?sport=${encodeURIComponent(sport)}` : "");
    } else if (url.pathname === "/api/search") {
      const q = (url.searchParams.get("q") || "").trim();
      if (!q || q.length > 100) return json({error:"Supply a search term up to 100 characters"},400,origin);
      apiPath = `/v2/search?q=${encodeURIComponent(q)}`;
    } else if (url.pathname === "/api/fixtures") {
      const date = url.searchParams.get("date") || "";
      const sport = url.searchParams.get("sport") || "";
      const league = url.searchParams.get("league");
      const category = url.searchParams.get("category");
      const country = url.searchParams.get("country");
      const page = url.searchParams.get("page");
      if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return json({error:"date is required as YYYY-MM-DD"},400,origin);
      if (!sport && !league && !category) return json({error:"sport, league or category is required"},400,origin);
      const params = new URLSearchParams({date});
      for (const [key,value] of Object.entries({sport,league,category,country,page})) {
        if (value !== null && value !== "") params.set(key,value);
      }
      apiPath = `/v2/fixtures?${params.toString()}`;
    } else {
      const match = url.pathname.match(/^\/api\/fixtures\/(\d+)(?:\/(lineups|statistics|events))?$/);
      if (!match) return json({error:"Unknown API route"},404,origin);
      apiPath = `/v2/fixtures/${match[1]}${match[2] ? `/${match[2]}` : ""}`;
    }

    try {
      const upstream = await fetch(`${SPORTS_API}${apiPath}`, {
        headers: {"Authorization":`Bearer ${env.SPORTSAPI_KEY}`,"Accept":"application/json"}
      });
      const body = await upstream.text();
      const headers = {"Content-Type":upstream.headers.get("Content-Type") || "application/json","Cache-Control":"no-store"};
      if (origin && ALLOWED_ORIGINS.has(origin)) {
        headers["Access-Control-Allow-Origin"] = origin;
        headers["Vary"] = "Origin";
      }
      return new Response(body,{status:upstream.status,headers});
    } catch {
      return json({error:"Unable to reach SportsAPI"},502,origin);
    }
  }
};
