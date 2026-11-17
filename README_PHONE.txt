DINO FUTURE PWA — PHONE SETUP

This version is a mobile-friendly prototype. It includes:
- Football and basketball workspaces
- Match input form and market catalogue
- Basic probability estimates (football goal markets use Poisson assumptions)
- Saved predictions in this browser's local storage
- Manual won/lost grading and JSON export
- Offline caching after first visit (when hosted on HTTPS)

IMPORTANT LIMITATIONS:
- It does not fetch live fixtures, results, lineups, player statistics or odds yet.
- Player scorer and player-prop probabilities are not calculated in this version.
- Basketball estimates are rough illustrative approximations, not trained forecasts.
- Market coverage and available stats vary by competition/provider.
- No prediction is guaranteed.

INSTALL FROM ANDROID:
1. The app must first be hosted on an HTTPS site for PWA installation.
2. Easiest phone-only route: create a GitHub account, create a public repository named dino-future, upload the files in this ZIP, then enable Settings > Pages > Deploy from branch > main / root.
3. Open the resulting GitHub Pages URL in Chrome on Android.
4. Chrome menu (three dots) > Add to Home screen / Install app.

Keep saved predictions backed up with Settings > Export. Clearing Chrome site data may erase locally saved records.

Never put paid API keys into index.html. A secure backend is required for private API credentials.
