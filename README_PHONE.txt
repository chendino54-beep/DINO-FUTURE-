DINO FUTURE v1.3 — UPDATE PATCH

This patch fixes the missing app icons and offline cache files in the existing DINO FUTURE repository.

UPLOAD THESE ITEMS TO THE ROOT OF YOUR EXISTING GITHUB REPOSITORY:
- manifest.webmanifest (replace the existing file)
- sw.js (replace the existing file)
- README_PHONE.txt (replace the existing file)
- icons/icon-192.png (add inside an icons folder)
- icons/icon-512.png (add inside an icons folder)

Do not delete or replace your existing index.html.

AFTER UPLOADING
1. Open the repository on GitHub.
2. Tap Add file > Upload files.
3. Select the replacement files and the icons folder contents.
4. Commit the changes to main.
5. Confirm GitHub Pages is enabled at Settings > Pages > Deploy from a branch > main > /(root).
6. Open the GitHub Pages website in Chrome. If an older version appears, refresh the page or clear that site's cached data.

CURRENT APP CAPABILITIES
Football: 1X2, goal totals, BTTS, most-likely correct score, corners, cards, team goals, manual penalty probability and manual selected-player scoring assumptions.
Basketball: winner, total/team points, total rebounds/assists and selected-player points/rebounds/assists estimates.
Saved predictions, manual won/lost grading, local history, JSON export and deletion.

LIMITATIONS
The existing app is not connected to live fixtures, odds, lineups, results or verified player statistics. It does not automatically grade predictions. The estimates are based on manually entered assumptions and are not trained/calibrated forecasts. Nothing is guaranteed.

PRIVACY
Saved predictions stay in the browser on this device. Export backups before clearing Chrome data. A public GitHub Pages site exposes the app source code. Never put API keys, passwords or private information in the repository.

LIVE DATA
Live fixtures and automatic grading need a sports-data provider and secure backend. Provider coverage, pricing, free limits, attribution and permitted use must be checked before integration. Keep API secrets on the backend, never in index.html.
