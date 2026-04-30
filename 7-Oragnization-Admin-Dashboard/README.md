# TechFest 2026 — Organizer Admin Dashboard

## Difficulty

Hard

## Language

JavaScript, CSS

## Problem Statement

The TechFest 2026 organizer team has built an internal admin dashboard with three tabs:

- **Teams** — view all registered teams, search by name or category, and approve the first pending team.
- **Analytics** — view live stats including total teams, approval rate, rejection rate, and the most popular category.
- **Volunteers** — assign unassigned volunteers to approved teams.

The page loads without any console errors. However, multiple features either silently produce
wrong results, refuse to work at all, or crash under a specific sequence of interactions.
Some problems are purely visual — certain UI elements never appear or are impossible to read
even though the underlying data is correct.

Your task is to find and fix all bugs spread across the JavaScript and CSS files so that
the dashboard works correctly end-to-end.

## Files

| File            | Purpose                            |
| --------------- | ---------------------------------- |
| `index.html`    | Page structure and tab panels      |
| `data.js`       | Team and volunteer data            |
| `auth.js`       | Current user and permission helper |
| `router.js`     | Tab switching logic                |
| `teams.js`      | Team list, search, and approval    |
| `analytics.js`  | Stats computation and rendering    |
| `volunteers.js` | Volunteer assignment               |
| `styles.css`    | Layout and component styles        |
| `dashboard.css` | Analytics panel specific styles    |

## Expected Behavior

- All 7 teams render on load with correct colour-coded badges.
- Searching by name or category correctly filters the displayed list.
- Clicking **Approve First Pending** approves the first pending team in the current filtered view and immediately refreshes the list.
- The dashboard does not crash when no pending team exists in the filtered view.
- The **Analytics** tab shows all stat cards with correct values.
- Rejection rate is computed as a percentage of **all** teams, not just approved ones.
- The active tab is clearly visible and readable.
- Clicking **Assign Volunteers** on the Volunteers tab correctly assigns unassigned volunteers to approved teams and shows a confirmation.

## How to Run

Open `index.html` with Live Server or any local static server.

## Hint

- The active tab has the same energy as a hero with no costume - technically present, completely unrecognizable. Even Hawkeye stands out. Your CSS said "I'll style it later" and then forgot. It did not style it later.

- Some bugs only surface after a specific sequence of actions. Try searching, approving, switching tabs, and assigning volunteers — and look carefully at what the numbers say, not just whether the page renders.

## Scoring

- Correctly identifying the bug location: half marks
- Fixing the bug completely: full marks
