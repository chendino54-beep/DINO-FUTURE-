DINO FUTURE v1.2 — ANDROID PWA PACKAGE

Includes football and basketball match analysis, editable expected-stat inputs, market estimates, private saved predictions, manual won/lost grading, export and offline cache.

MARKET ESTIMATES INCLUDED
Football: 1X2, goals over/under, BTTS, most-likely correct score, corners, cards, team goals, penalty awarded (manual probability), selected player to score / 2+ goals (manual xG and starter assumption).
Basketball: match winner, total points, team points, total rebounds/assists and selected player points/rebounds/assists thresholds.

IMPORTANT LIMITATIONS
- This is NOT connected to live fixtures, results, odds, lineups or verified player databases.
- Player and penalty probabilities are only estimates from assumptions entered by the user.
- Basketball probabilities are rough approximations, not a trained model.
- Correct score shows the most likely score under the entered Poisson assumptions, not every scoreline.
- Predictions are uncertain; nothing is guaranteed.

PHONE INSTALLATION
1. Extract this ZIP. Upload the CONTENTS (not the ZIP) to the root of your GitHub repository.
2. Keep index.html, manifest.webmanifest and sw.js at repository root. Keep icons/icon-192.png and icons/icon-512.png in the icons folder.
3. Commit changes. GitHub repository Settings > Pages > Deploy from a branch > main > /(root) > Save.
4. Open https://USERNAME.github.io/REPOSITORY/ in Chrome, then menu > Install app / Add to Home screen.

DATA PRIVACY
Predictions are stored in browser local storage on this device. Export backups before clearing Chrome data. Public GitHub Pages means the app source code is public; never put API keys or private information in it.

LIVE DATA REQUIREMENT
A provider account/API and secure backend are required for live data. Never place secret API keys in index.html. Provider coverage, terms, free limits and attribution must be checked before enabling live fixtures or automatic grading.
