DINO FUTURE Cloudflare Worker package

Files:
- worker.js
- wrangler.toml

Keep the SportsAPI key out of these files. It must remain in Cloudflare as a Secret named SPORTSAPI_KEY.

Routes:
GET /api/health
GET /api/sports
GET /api/livescores?sport=football
GET /api/livescores?sport=basketball
GET /api/search?q=Arsenal
GET /api/fixtures?date=YYYY-MM-DD&sport=football
GET /api/fixtures/ID
GET /api/fixtures/ID/lineups
GET /api/fixtures/ID/statistics
GET /api/fixtures/ID/events

Allowed web origin: https://chendino54-beep.github.io
Change ALLOWED_ORIGINS in worker.js if your actual GitHub Pages site has a different hostname.

This proxy does not itself train a prediction model or automatically grade predictions.
