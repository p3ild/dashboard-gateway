---
title: ReportBase → DashboardBase
description: Specification to change the app to open a default single report (dashboard) at the root route while keeping the existing layout.
createdAt: '2026-05-25T08:06:01.799Z'
updatedAt: '2026-05-25T08:06:01.799Z'
tags:
  - spec
  - draft
---

## Overview

Convert the current ReportBase experience into a DashboardBase landing page that opens a single report by default when users visit `/`.

Currently the app shows a list of folders and a list of reports; clicking a report loads the report business flow. The new DashboardBase should keep the overall layout and navigation UX but change the default content to a single configured report on the root path.

## Locked Decisions

- D1: Layout: Keep the existing layout; the left folder/list navigation remains visible and the main content area will show the single report by default. NavBar will be used in place of the previous sidebar integration where appropriate (per implementation notes).
- D2: Default selection rule: Use a configured instance-level default report id: `instanceConfig.defaultDashboardId`.
- D3: Entry route: Visiting `/` should render DashboardBase and automatically load the configured default report into the main content area.

## Requirements

### Functional Requirements

- FR-1: On app load at route `/`, the app must load the instance configuration (existing init flow) and, if `instanceConfig.defaultDashboardId` exists, load that report into the main content area automatically.
- FR-2: The left navigation (listFolder) remains visible and fully functional; clicking different folders or reports behaves as before.
- FR-3: If no `instanceConfig.defaultDashboardId` is set, the behavior should fall back to the existing listReport landing behavior.
- FR-4: The NavBar component (`src/core/page/report/NavBar.jsx`) should be used or integrated where it replaces the previous sidebar control points for report selection and actions (export/print/settings) while preserving their behavior.
- FR-5: The selected default report must be reflected in the app state (Zustand store) so filters and actions operate on it exactly like a user-selected report.
- FR-6: The landing single report must be addressable by URL (e.g., `/` shows default; explicit report routes remain supported: `/report?reportId=...` or `/report` route behavior unchanged).

### Non-Functional Requirements

- NFR-1: No perceptible regressions in navigation or report rendering performance.
- NFR-2: Changes must not expose credentials or sensitive instance config data to the client beyond existing behavior.
- NFR-3: The feature must be implemented with minimal disruption to existing code paths and be reversible.

## Acceptance Criteria

- AC-1: With `instanceConfig.defaultDashboardId` set to a valid report id, opening `/` loads that report automatically in the main content area within 1 second (network permitting) and all report toolbar actions (export/print) operate as expected.
- AC-2: With no default id set, `/` behaves exactly as before (shows listReport + listFolder), and no errors are introduced.
- AC-3: Selecting another report via the left navigation replaces the content and updates the app state; returning to `/` still shows the default report (unless changed to new default via config).
- AC-4: Unit or integration smoke test (manual or automated) demonstrating that default loads work for both valid and missing default values is available.

## Scenarios

### Scenario 1: Happy path — default present
Given `instanceConfig.defaultDashboardId` = `R123`
When a user opens `/`
Then the app loads instance config, initializes network and metadata, and displays report `R123` in the main content area with all toolbar functions enabled.

### Scenario 2: Fallback — default missing
Given `instanceConfig.defaultDashboardId` is undefined
When a user opens `/`
Then the app shows the existing listReport landing experience, unchanged.

### Scenario 3: Invalid default id
Given `instanceConfig.defaultDashboardId` = `R999` (not found)
When a user opens `/`
Then the app should gracefully fallback to listReport and log a non-blocking warning; no UI crash.

## Technical Notes

- Files & areas to modify:
  - Entry/route wiring: `src/core/ui/mainbody/Main.navigate.jsx` — ensure `/` route renders DashboardBase that triggers default report load.
  - Bootstrapping: `src/core/hooks/prepareApp.jsx` — instanceConfig is already loaded here; access `instanceTarget.defaultDashboardId` after init.
  - Report loading: follow existing `instanceTarget.getListReport` and report loading flows; ensure the default id is passed into the same report-loading code path so toolbar actions work unchanged.
  - UI integration: `src/core/page/report/NavBar.jsx` should be used in place of previous sidebar imports (as requested). Confirm if any sidebar-specific props need to be mapped.
  - State: `src/core/stateManage/metadataState.js` — ensure selected report is reflected in the store (e.g., `reportTarget` or equivalent) and existing `corePicker` interactions continue to work.
  - ReportBase: `src/core/base/ReportBase.js` may be refactored or wrapped to support DashboardBase behavior; prefer small, localized change to select default report id rather than wholesale rewrite.

- Safety & process:
  - MUST run GitNexus impact analysis (`gitnexus_impact` / `mcp__gitnexus__impact`) on all symbols changed (ReportBase, routing, prepareApp, NavBar) before editing.
  - Use Knowns code tools for any structural renames. After changes, run `gitnexus_detect_changes({scope:'all'})` before committing.

## Open Questions

- Q1: Confirm the `instanceConfig` export name and path convention for `defaultDashboardId` (I will add `defaultDashboardId` to the instance export, e.g., `src/instanceConfig/baocao25/index.js` or existing instance file). Do you prefer `instanceConfig.defaultDashboardId` as a top-level export or inside a nested `ui` object? (Suggested: top-level `defaultDashboardId`.)
- Q2: Should switching the default be supported via an in-app admin UI later, or is it strictly a build/config-time value for now? (Out of scope — flagged as future work.)

---

Created by kn-spec.
