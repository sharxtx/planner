# Intelligent Daily Planner Feature Roadmap

This roadmap outlines the integration of Google OAuth, Calendar Sync, and Gemini AI for automated daily scheduling.

## Phase 1: Authentication & Integration Infrastructure
**Goal:** Enable secure user login and access to Google Calendar API.

- [ ] **Install & Configure NextAuth.js**
    - Install `next-auth` (v5 recommended).
    - Configure Google Provider with required scopes:
        - `openid`
        - `email`
        - `profile`
        - `https://www.googleapis.com/auth/calendar`
        - `https://www.googleapis.com/auth/calendar.events`
- [ ] **Session Management**
    - Implement session provider in `layout.tsx`.
    - Create a protected route wrapper for dashboard/calendar.
    - Store/Refresh OAuth `access_token` and `refresh_token` for offline access.

## Phase 2: Calendar Synchronization
**Goal:** Implement the `EventProvider` interface for Google Calendar to enable two-way sync.

- [ ] **GoogleCalendarProvider Implementation**
    - Create `lib/providers/google-calendar.ts`.
    - Implement `getEvents(start, end)`: Fetch events from primary calendar.
    - Implement `createEvent(event)`: POST new events to GCal.
    - Implement `updateEvent(event)`: PATCH changes to GCal.
    - Implement `deleteEvent(id)`: DELETE from GCal.
- [ ] **CalendarContext Integration**
    - Update `CalendarContext` to switch between 'local' and 'google' providers based on data.
    - Handle loading states and error handling for API calls.

## Phase 3: AI Scheduling Interface (The "Planner")
**Goal:** Create the input mechanism for users to define their day for the AI.

- [ ] **Create Planner Page (`/planner`)**
    - Design a clean, focused input form using `shadcn/ui`.
- [ ] **Input Fields**
    - **Day Constraints**: Start Time (e.g., 9:00 AM), End Time (e.g., 5:00 PM).
    - **Fixed Events**: (Read-only view of existing hard meetings from GCal).
    - **Task List Input**:
        - Task Name
        - Estimated Duration
        - Priority (High/Medium/Low)
        - Deadline/Constraint (optional)
- [ ] **UX Polish**
    - "Auto-fill" suggested tasks.
    - Visual timeline of the "available slots".

## Phase 4: Gemini AI Integration
**Goal:** Use Gemini to intelligently slot tasks into available free time.

- [ ] **Gemini Setup**
    - Install `@google/generative-ai`.
    - Configure API Key (Env Variable).
- [ ] **Prompt Engineering**
    - Structured Prompt:
        - Input: JSON of (Existing Events, New Tasks, Day Constraints).
        - Output: JSON of (Scheduled Events with start/end times).
        - Rules: "Don't overlap", "Respect priorities", "Group similar tasks".
- [ ] **API Route Implementation**
    - Create `/api/generate-schedule` endpoint.
    - Parse Gemini response into valid `CalendarEvent` objects.

## Phase 5: Schedule Review & Confirmation
**Goal:** Allow users to verify and adjust the AI's work before saving.

- [ ] **Review Interface**
    - Split view: "Draft Schedule" (Visualization).
    - Interaction: Drag-and-drop to adjust times, resize duration.
    - Conflict warning indicators.
- [ ] **Commit Action**
    - "Looks Good, Save Day" button.
    - Batch create/update all events in Google Calendar via `GoogleCalendarProvider`.
    - Success feedback / confetti.
