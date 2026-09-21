# PROJECT DEVELOPMENT RULES
# React + TypeScript + Vite

You are working inside an existing production React + TypeScript + Vite project.

THIS FILE IS THE PRIMARY PROJECT INSTRUCTION.

You MUST read and follow this file BEFORE inspecting, modifying, creating, moving, deleting, or refactoring source code.

==================================================
1. PRIMARY OBJECTIVE
==================================================

Maintain and improve the existing project without changing its established architecture.

The project architecture is intentionally standardized for a large-scale production website.

The architecture MUST remain stable.

DO NOT introduce a new architecture unless the user explicitly requests an architectural redesign.

DO NOT reorganize folders simply because you prefer another structure.

DO NOT rename folders or files unless it is necessary for the requested task and the user explicitly approves the change.

DO NOT move existing files between architectural layers unless explicitly requested.

==================================================
2. TECHNOLOGY STACK
==================================================

The project uses:

- React
- TypeScript
- Vite
- CSS / modern styling
- React Router when routing is required

Use TypeScript for all new application code.

Avoid JavaScript files inside src/ unless an existing dependency or build requirement requires them.

Do not migrate the project to another framework.

Do not introduce Next.js, Nuxt, Angular, Vue, Remix, Astro, or another framework.

Do not replace Vite unless explicitly requested.

==================================================
3. CANONICAL PROJECT ARCHITECTURE
==================================================

The following architecture is the canonical architecture of this project.

Do not change it.

src/
│
├── app/
│   ├── App.tsx
│   ├── router.tsx
│   ├── providers.tsx
│   └── config.ts
│
├── assets/
│   ├── images/
│   ├── icons/
│   ├── logos/
│   └── illustrations/
│
├── components/
│   ├── ui/
│   ├── navigation/
│   └── feedback/
│
├── layouts/
│   ├── MainLayout.tsx
│   ├── LandingLayout.tsx
│   └── AdminLayout.tsx
│
├── pages/
│   ├── home/
│   │   ├── HomePage.tsx
│   │   ├── sections/
│   │   └── data.ts
│   │
│   ├── profil/
│   │   ├── ProfilPage.tsx
│   │   └── sections/
│   │
│   ├── berita/
│   │   ├── BeritaPage.tsx
│   │   ├── BeritaDetailPage.tsx
│   │   └── components/
│   │
│   ├── pariwisata/
│   │   ├── PariwisataPage.tsx
│   │   └── components/
│   │
│   └── bidang/
│       ├── BidangPage.tsx
│       ├── EkrafPage.tsx
│       ├── KebudayaanPage.tsx
│       ├── PariwisataPage.tsx
│       └── PemasaranPage.tsx
│
├── features/
│   ├── language/
│   ├── news/
│   ├── tourism/
│   └── profile/
│
├── services/
│   ├── api/
│   │   ├── client.ts
│   │   └── endpoints.ts
│   ├── analytics/
│   └── storage/
│
├── hooks/
│   ├── useScroll.ts
│   ├── useMediaQuery.ts
│   └── useTranslation.ts
│
├── lib/
│   ├── utils.ts
│   ├── formatters.ts
│   └── validators.ts
│
├── types/
│   ├── api.ts
│   ├── common.ts
│   └── navigation.ts
│
├── constants/
│   ├── routes.ts
│   ├── site.ts
│   └── navigation.ts
│
├── i18n/
│   ├── index.ts
│   ├── id.json
│   └── en.json
│
├── styles/
│   ├── globals.css
│   ├── tokens.css
│   └── animations.css
│
├── main.tsx
└── vite-env.d.ts

## TOKEN AND CONTEXT EFFICIENCY

Before reading source code, answer:

"What is the smallest set of files required to solve this task?"

Do not inspect unrelated files.

Never recursively read the entire src/ directory at task startup.

Never open every component merely to understand the project.

Use the following priority:

1. AGENTS.md
2. ARCHITECTURE.md
3. PROJECT_MAP.md
4. Relevant file
5. Direct dependencies of that file
6. Tests related to the change

Stop inspecting files once sufficient context has been obtained.

Do not continue repository exploration without a technical reason.

==================================================
4. ARCHITECTURE RESPONSIBILITIES
==================================================

Each folder has a specific responsibility.

app/
Application bootstrap, routing, providers, global application configuration.

components/
Reusable visual components.

components/ui/
Generic UI components that do not belong to a specific business feature.

Examples:
- Button
- Card
- Modal
- Container
- Typography
- Badge
- Input

components/navigation/
Reusable navigation components.

Examples:
- Header
- Navbar
- Footer
- MobileMenu

components/feedback/
Reusable application feedback components.

Examples:
- Loading
- ErrorState
- EmptyState

layouts/
Page-level structural layouts.

Examples:
- MainLayout
- LandingLayout
- AdminLayout

pages/
Route-level pages.

A page represents a complete route or screen.

features/
Business/domain functionality.

Examples:
- news
- tourism
- profile
- language

services/
External communication and infrastructure.

Examples:
- API client
- analytics
- storage

hooks/
Reusable React hooks.

lib/
Small reusable utilities that are framework-independent where practical.

types/
Shared TypeScript type definitions.

constants/
Application constants.

i18n/
Translation configuration and translation resources.

styles/
Global styling, design tokens and animations.

==================================================
5. COMPONENT PLACEMENT RULES
==================================================

Before creating a new component, determine its scope.

If it is reusable across the entire application:

components/

If it belongs to navigation:

components/navigation/

If it is a generic UI primitive:

components/ui/

If it belongs to a business/domain feature:

features/<feature>/

If it is only used by a single page:

pages/<page>/components/

If it is a large visual section of a page:

pages/<page>/sections/

DO NOT place everything inside components/.

DO NOT place page-specific components into global components/.

==================================================
6. PAGE RULES
==================================================

Pages represent routes.

A page SHOULD NOT contain excessive reusable logic.

Large pages SHOULD be split into sections.

Example:

pages/home/
├── HomePage.tsx
└── sections/
    ├── HeroSection.tsx
    ├── TourismSection.tsx
    ├── CultureSection.tsx
    ├── StatisticsSection.tsx
    └── NewsSection.tsx

HomePage.tsx should primarily compose sections.

==================================================
7. FEATURE RULES
==================================================

Feature-specific logic MUST stay close to its domain.

Example:

features/news/
├── news.api.ts
├── news.types.ts
├── news.utils.ts
└── components/

Do not spread feature-specific logic across unrelated folders.

Do not put business logic into generic UI components.

==================================================
8. API RULES
==================================================

All API communication MUST go through:

services/api/

Do not scatter fetch/axios configuration throughout pages.

Recommended:

services/api/client.ts

services/api/endpoints.ts

Feature API functions should be grouped by domain.

Example:

features/news/
└── news.api.ts

Do not duplicate API configuration.

Do not hardcode API base URLs inside components.

Use environment variables for environment-specific configuration.

==================================================
9. TYPESCRIPT RULES
==================================================

Use strict TypeScript.

Prefer:

type
interface
generics
discriminated unions

Avoid:

any

Do not use:

// @ts-ignore

unless absolutely necessary and the reason is documented.

Do not silently weaken TypeScript checks to make errors disappear.

==================================================
10. STYLING RULES
==================================================

Global design tokens belong in:

styles/tokens.css

Global styles belong in:

styles/globals.css

Animation definitions belong in:

styles/animations.css

Avoid random global CSS.

Avoid duplicating the same spacing, typography, radius and layout values across many files.

Use shared design tokens where practical.

The website should maintain a consistent visual language.

==================================================
11. DESIGN SYSTEM
==================================================

The project should use a centralized design system.

Design tokens should cover:

- typography
- spacing
- radius
- container widths
- shadows
- transitions
- animation timing
- breakpoints
- z-index layers

Do not invent slightly different values for every component.

If a design token already exists, reuse it.

==================================================
12. ASSET RULES
==================================================

Application assets belong to:

src/assets/

Static files that must be directly addressable by URL may belong to:

public/

Do not duplicate the same asset in multiple locations.

Before adding an image, icon or logo:

1. Check whether it already exists.
2. Reuse the existing asset when possible.
3. Only create a new asset when necessary.

Do not create duplicate copies of logos or icons.

==================================================
13. ROUTING RULES
==================================================

Routing is centralized in:

src/app/router.tsx

Do not create independent routing systems inside pages.

Use nested routes when appropriate.

Route definitions should remain centralized.

Route paths that are reused by code should be defined in:

constants/routes.ts

==================================================
14. APP.TSX RULE
==================================================

App.tsx MUST remain lightweight.

App.tsx should not become a large collection of:

- page implementations
- API requests
- business logic
- large UI sections
- unrelated state

App.tsx should primarily connect the application shell/router/providers.

==================================================
15. REFACTORING RULES
==================================================

When fixing existing code:

DO NOT perform unrelated refactoring.

DO NOT rename unrelated variables.

DO NOT move unrelated files.

DO NOT change architecture just because another structure looks cleaner.

DO NOT rewrite working code without a reason.

Only modify what is necessary to complete the requested task.

==================================================
16. EXISTING CODE SAFETY
==================================================

Treat the existing project as production code.

Before changing a file, inspect only the relevant portion required for the task.

Do not scan the entire repository unless absolutely necessary.

Do not read every source file at project startup.

Prefer targeted inspection.

==================================================
17. AI REPOSITORY READING PROTOCOL
==================================================

IMPORTANT:

DO NOT START BY READING THE ENTIRE CODEBASE.

At the beginning of a task:

STEP 1
Read:

AGENTS.md

STEP 2
Read:

ARCHITECTURE.md

STEP 3
Inspect the directory tree only to identify relevant files.

STEP 4
Identify the smallest number of files necessary to solve the task.

STEP 5
Read only those files.

STEP 6
Make the smallest safe change.

STEP 7
Check the changed files for consistency.

STEP 8
Do not inspect unrelated parts of the repository.

The goal is to minimize unnecessary repository reading and AI token usage.

==================================================
18. PROJECT CONTEXT MEMORY
==================================================

ARCHITECTURE.md contains the persistent architectural map of this repository.

Treat ARCHITECTURE.md as the project's architectural memory.

Do not repeatedly rediscover architecture by reading the entire source tree.

When architecture changes intentionally:

1. Update ARCHITECTURE.md.
2. Update AGENTS.md if the development rules change.
3. Keep the architecture documented.

==================================================
19. CHANGE CONTROL
==================================================

Architecture changes require explicit user instruction.

Without explicit instruction, do NOT:

- rename top-level folders
- introduce new architectural layers
- remove architectural layers
- migrate frameworks
- replace routing systems
- replace state management
- move all files
- reorganize the entire project

Normal bug fixes and feature work should preserve the architecture.

==================================================
20. NEW FILE RULE
==================================================

Before creating a new file, determine:

1. What layer owns this code?
2. Is there an existing file that should contain it?
3. Is the code reusable?
4. Is it feature-specific?
5. Is it page-specific?
6. Does the architecture already provide an appropriate location?

Do not create random files at src/ root.

==================================================
21. CLEAN CODE RULE
==================================================

Prefer:

- small components
- clear naming
- single responsibility
- reusable logic
- explicit types
- predictable imports
- minimal coupling

Avoid:

- giant components
- duplicated logic
- deeply nested conditional JSX
- unnecessary abstractions
- magic numbers
- hidden side effects
- global mutable state without justification

==================================================
22. SEO RULES
==================================================

SEO-related utilities belong to:

services/seo/

or the appropriate page/feature layer.

Do not duplicate SEO implementation across unrelated components.

Each page should be able to define its own:

- title
- description
- canonical URL
- Open Graph metadata
- structured data where appropriate

==================================================
23. INTERNATIONALIZATION
==================================================

Internationalization belongs to:

i18n/

Language-specific functionality belongs to:

features/language/

Do not hardcode large amounts of user-facing text when the application architecture requires translation.

==================================================
24. PERFORMANCE
==================================================

Preserve good production practices.

Prefer:

- lazy loading for large route-level pages
- optimized images
- code splitting
- memoization only where justified
- minimal unnecessary re-renders
- reusable components
- clean API boundaries

Do not add optimization complexity without measurable or architectural justification.

==================================================
25. RESPONSE FORMAT
==================================================

When making code changes, report:

1. What was changed.
2. Which files were changed.
3. Why those files were changed.
4. Whether the existing architecture was preserved.
5. Any remaining issue or risk.

Do not report unrelated observations unless they affect the requested task.

==================================================
26. FINAL ARCHITECTURE RULE
==================================================

THIS IS A STRICT RULE:

The architecture documented in AGENTS.md and ARCHITECTURE.md is the source of truth.

When working on this project:

PRESERVE THE STRUCTURE.

EXTEND THE STRUCTURE.

DO NOT REINVENT THE STRUCTURE.

DO NOT MOVE THE STRUCTURE.

DO NOT RANDOMLY CREATE A NEW STRUCTURE.

Use the existing architecture unless the user explicitly requests an architectural change.