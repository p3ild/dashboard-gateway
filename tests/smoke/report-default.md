Smoke test: Default dashboard load

Purpose
- Verify that when instanceConfig.defaultDashboardId is set, opening `/` loads that report automatically.

Prerequisites
- Local dev server running (npm run start or yarn start)
- Use an instanceConfig that includes defaultDashboardId (e.g., src/instanceConfig/baocao25/index.js)

Tests

1) Default present (happy path)
- Steps:
  1. Open browser to http://localhost:5173/ (or the dev host).
  2. Confirm the app initializes without errors and the global overlay disappears.
  3. Confirm the URL navigates to `/report?id=<defaultDashboardId>` and the report content is displayed.
  4. Confirm the NavBar toolbar is visible and export/print buttons are enabled.
- Expected:
  - Report content renders.
  - Toolbar operations (export/print) function (manual verification).

2) Fallback — default missing
- Steps:
  1. Remove or clear defaultDashboardId in the instance config or switch to an instance without it.
  2. Open `/`.
- Expected:
  - App shows the listReport landing experience (list of folders and reports) and no errors occur.

3) Invalid default id
- Steps:
  1. Set defaultDashboardId to a non-existent id (e.g., R999).
  2. Open `/`.
- Expected:
  - App shows the listReport landing experience or an error message, no crash.
  - A non-blocking warning is logged in the console.

Notes
- Automated tests are not included; these are manual smoke checks to validate the integration quickly.
- For automation later: consider adding Playwright or Cypress tests that assert navigation and rendered DOM.
