You must strictly follow the instructions below.
Do not invent visuals, layouts, or decorative elements outside this spec.

1. CORE PRODUCT UNDERSTANDING (DO NOT IGNORE)

Planner.ai is a decision-removal layer between human intent and a real calendar.

It:

accepts tasks in natural language

reasons about time, constraints, and existing events

syncs the result to Google Calendar

automatically adapts when plans change

Time is the primary object.
Tasks are secondary.
AI must remain invisible.

2. DESIGN PHILOSOPHY (ABSOLUTE)

The design must feel like:

a calm executive assistant

precise and editorial

quiet and confident

sparse and intentional

Explicitly avoid:

decorative gradient blocks with no meaning

random rounded rectangles

“AI” metaphors (brains, sparkles, orbits)

dashboard screenshots as decoration

glassmorphism blobs

more than one visual idea per section

If a visual cannot be explained in one sentence, it must not exist.

3. TYPOGRAPHY SYSTEM (LOCKED)
Fonts

Primary font: Inter

Accent font (choose ONE and use sparingly):

Playfair Display Italic

Libre Baskerville Italic

Accent font rules:

Use for one keyword only per section

Never for full sentences

Never stacked or repeated

Type scale (desktop)

Hero H1: 64px / 1.1

Section H2: 36px / 1.25

Subtext: 18px / 1.6

Body: 15px / 1.6

Meta: 13px / 1.5

Mobile scales proportionally.

4. COLOR SYSTEM (NO DRIFT)
Dark theme (primary)

Background: #0B0D10

Primary text: #EDEDED

Secondary text: #9CA3AF

Divider lines: #1F2937

Light theme

Background: #FAFAFA

Primary text: #111827

Secondary text: #6B7280

Divider lines: #E5E7EB

Accent colors (tasks only)

Muted blue → focus work

Sand / beige → meetings

Muted orange → execution

No other colors allowed.

5. ANIMATION SYSTEM (STRICT)

Animations must explain logic, not decorate.

Duration: 400–900ms

Easing: cubic-bezier(0.22, 1, 0.36, 1)

No infinite loops

No attention-seeking motion

SECTION-BY-SECTION REQUIREMENTS
SECTION 1 — HERO
Goal

Immediately communicate:
“Planner.ai decides when, so the user doesn’t have to.”

Layout

Left-aligned text

Right-aligned vertical day timeline

Asymmetrical, editorial layout

Headline

Stop deciding what to do next.

Rules:

“deciding” uses accent italic font

All other words use Inter

Subtext

Planner.ai turns your tasks into a realistic schedule —
and keeps it in sync when plans change.

Max 2 lines.

CTAs

Primary: “Plan my day”

Secondary: “See a sample schedule”

Visual

A single vertical day timeline:

Time labels from morning to night

5–6 task blocks

Clear spacing

Animation

On page load:

Tasks slide vertically into place

One task shifts slightly afterward (implying re-planning)

Animation plays once only

SECTION 2 — “TELL IT WHAT YOU NEED TO DO”
Goal

Explain input → reasoning → sync visually.

Layout

Three panels horizontally (desktop), stacked on mobile.

PANEL 1 — INPUT

Visual:

A single multiline text input

Thin border only

No background fill

Micro-animation:

Cursor blinks

Ghost text types once:
“Finish report by 5”

Stops halfway

This communicates natural language input.

PANEL 2 — REASONING

Visual:

Plain text task lines

They slide into a faint timeline skeleton

Micro-animation:

Tasks snap into time slots

One task resizes slightly (duration inference)

No AI branding.

PANEL 3 — SYNC

Visual:

Timeline compresses

Morphs into a faint calendar grid

Subtle checkmark appears

No Google logo or branding.

SECTION 3 — “YOUR CALENDAR IS THE SOURCE OF TRUTH”
CRITICAL — NO ABSTRACT BACKGROUNDS
Goal

Visually assert:
The calendar is immutable. Planner adapts around it.

Layout

Left: text

Right: layered visual

Visual construction

Background layer: faint weekly calendar grid

Foreground layer: Planner timeline blocks

Calendar:

Soft

Low contrast

Static

Planner timeline:

Sharp

Higher contrast

Slight movement on scroll

Micro-interaction:

On scroll, Planner tasks adjust subtly

Calendar grid remains fixed

SECTION 4 — “PLANS CHANGE. THE SCHEDULE ADAPTS.”
Goal

Show cause → effect automatically.

Visual

One task expands vertically

Lower-priority tasks slide downward

One fades and exits (scheduled for tomorrow)

No dragging UI.
No cursors.
No chrome.

SECTION 5 — AI MENTION (CONTROLLED)
Copy

Built with AI. Designed for humans.

Planner.ai uses intelligent scheduling models to reason about time and constraints — so you don’t have to.

No logos. No model names.

SECTION 6 — “WHAT PLANNER.AI WON’T DO”
Goal

Build emotional trust.

Layout

Three columns

No cards

Thin dividers only

Items:

It won’t nag you.

It won’t shame unfinished tasks.

It won’t over-optimize your life.

SECTION 7 — TESTIMONIAL (OPTIONAL)

Only include if specific.

Design:

Editorial typography

Minimal emphasis

No promotional styling

SECTION 8 — FINAL CTA
Goal

Confident close, not sales close.

Visual

Soft rounded container

Subtle elevation

No heavy shadows

Copy

Stop prioritizing your schedule.
Start scheduling your priorities.

Accent font allowed on one word only.

SECTION 9 — FOOTER

Minimal links only:

How it works

Privacy

Google Calendar integration

Contact

No social clutter.

MOBILE RULES (MANDATORY)

One idea per screen

Sticky CTA after first scroll

Bottom sheets instead of modals

Input feels like messaging

Timeline vertically scrollable

FINAL EXECUTION RULE

Do not invent visuals.
Do not add decorative elements.
Every shape must represent time, input, or constraint.

If a section cannot explain how Planner.ai reasons about time, remove elements until it can.

END OF SYSTEM PROMPT