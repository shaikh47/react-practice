# React Concepts Learning Guide

## react-vite-template Project

---

## Currently Used Concepts

Numbered List Format - Each concept with:

React Hooks: useState, useEffect, useContext, useCallback, useMemo, useId

React Router Hooks: useNavigate, useSearchParams, useLoaderData

Custom Hooks: useTheme, useFormField, useLogin, useRegister, useUser

Components & Patterns: Functional components, Props, Props destructuring, etc.

State Management: Local state, Context API, React Query

Event Handlers: onClick, onChange, onSubmit, onKeyPress

Conditional Rendering: Early returns, Ternary operators, Logical AND, Nullish coalescing

Form Handling: React Hook Form, Form validation, Controlled components

Routing: Router setup, Route configuration, Nested routes, Protected routes, Loaders, Route middlewarem Lazy loading with suspense

Advanced Patterns: Error boundaries, Component composition, forwardRef, TypeScript types, Callback props

---

## React Hooks

1. **useState - Local State Management**
   - Description: Declare state variables in functional components.
   - Usage: [src/features/feature-two/feature-two.tsx#L6](src/features/feature-two/feature-two.tsx#L6)

2. **useEffect - Side Effects**
   - Description: Synchronize with external systems and perform cleanup operations.
   - Usage: [src/features/theme/context.tsx#L16](src/features/theme/context.tsx#L16)

3. **useContext - Accessing Context Values**
   - Description: Consume context values in functional components without prop drilling.
   - Usage: [src/features/feature-one/feature-one.tsx#L7](src/features/feature-one/feature-one.tsx#L7)

4. **useCallback - Memoized Callbacks**
   - Description: Memoize function definitions to prevent unnecessary re-renders.
   - Usage: [src/features/theme/context.tsx#L20](src/features/theme/context.tsx#L20)

5. **useMemo - Memoized Values**
   - Description: Cache expensive computations to avoid recalculating on every render.
   - Usage: [src/app/provider.tsx#L11](src/app/provider.tsx#L11)

6. **useRef & React.forwardRef - Direct DOM Access**
   - Description: Access DOM elements directly and forward refs to child components.
   - Usage: [src/components/ui/form/form.tsx#L76](src/components/ui/form/form.tsx#L76)

7. **useId - Unique ID Generation**
   - Description: Generate unique IDs for form elements for accessibility purposes.
   - Usage: [src/components/ui/form/form.tsx#L80](src/components/ui/form/form.tsx#L80)

---

## React Router Hooks

8. **useNavigate - Programmatic Navigation**
   - Description: Programmatically navigate to different routes without using links.
   - Usage: [src/app/routes/auth/login.tsx#L8](src/app/routes/auth/login.tsx#L8)

9. **useSearchParams - URL Query Parameters**
   - Description: Get and set URL search parameters from the query string.
   - Usage: [src/app/routes/auth/login.tsx#L10](src/app/routes/auth/login.tsx#L10)

10. **useLoaderData - Accessing Route Loader Data**
    - Description: Access data pre-loaded by route loaders before the component renders.
    - Usage: [src/features/feature-one/feature-one.tsx#L6](src/features/feature-one/feature-one.tsx#L6)

---

## Custom React Hooks

11. **useTheme - Custom Hook for Theme Context**
    - Description: Custom hook that wraps useContext for theme context with error handling.
    - Usage: [src/features/theme/useTheme.ts#L1](src/features/theme/useTheme.ts#L1)

12. **useFormField - Custom Hook for Form Context**
    - Description: Custom hook that provides form field context to nested form components.
    - Usage: [src/components/ui/form/form.tsx#L45](src/components/ui/form/form.tsx#L45)

13. **useLogin - React Query Mutation Hook**
    - Description: Mutation hook for handling login API calls with React Query.
    - Usage: [src/features/auth/components/login-form.tsx#L14](src/features/auth/components/login-form.tsx#L14)

14. **useRegister - React Query Mutation Hook**
    - Description: Mutation hook for handling registration API calls with React Query.
    - Usage: [src/features/auth/components/register-form.tsx#L14](src/features/auth/components/register-form.tsx#L14)

15. **useUser - React Query Query Hook**
    - Description: Query hook for fetching user data from the server with React Query.
    - Usage: [src/lib/auth.tsx#L67](src/lib/auth.tsx#L67)

---

## Functional Components

16. **Functional Components - Modern React Pattern**
    - Description: All components in this project are functional components (not class-based).
    - Usage: [src/app/index.tsx#L4](src/app/index.tsx#L4)

---

## Props and Prop Drilling

17. **Props - Parent to Child Data Passing**
    - Description: Pass data from parent components to child components via props.
    - Usage: [src/features/feature-two/feature-two.tsx#L24](src/features/feature-two/feature-two.tsx#L24)

18. **Props Destructuring**
    - Description: Destructure props in component function parameters for cleaner code.
    - Usage: [src/features/auth/components/login-form.tsx#L11](src/features/auth/components/login-form.tsx#L11)

---

## State Management

19. **Local State with useState**
    - Description: Manage component-level state for simple, non-shared state values.
    - Usage: [src/features/feature-two/feature-two.tsx#L6](src/features/feature-two/feature-two.tsx#L6)

20. **Context API - Global State**
    - Description: Share state across component tree without prop drilling using Context.
    - Usage: [src/features/theme/context.tsx#L5](src/features/theme/context.tsx#L5)

21. **React Query - Server State Management**
    - Description: Manage server state with React Query for caching and async operations.
    - Usage: [src/app/provider.tsx#L11](src/app/provider.tsx#L11)

---

## Event Handlers

22. **onClick - Click Event Handler**
    - Description: Handle click events on buttons and interactive elements.
    - Usage: [src/features/feature-two/feature-two.tsx#L32](src/features/feature-two/feature-two.tsx#L32)

23. **onChange - Input Change Handler**
    - Description: Handle changes in input fields and form elements.
    - Usage: [src/features/feature-two/components/feature-two-child-a.tsx#L46](src/features/feature-two/components/feature-two-child-a.tsx#L46)

24. **onSubmit - Form Submission Handler**
    - Description: Handle form submission events and data.
    - Usage: [src/components/ui/form/form.tsx#L172](src/components/ui/form/form.tsx#L172)

25. **onKeyPress - Keyboard Event Handler**
    - Description: Handle keyboard events like Enter key press.
    - Usage: [src/features/feature-two/components/feature-two-child-a.tsx#L47](src/features/feature-two/components/feature-two-child-a.tsx#L47)

---

## Conditional Rendering

26. **Early Returns - Guard Clauses**
    - Description: Return null or early exit to prevent rendering under certain conditions.
    - Usage: [src/features/feature-one/feature-one.tsx#L10](src/features/feature-one/feature-one.tsx#L10)

27. **Ternary Operator - Conditional Rendering**
    - Description: Render different UI based on conditions using ternary operators.
    - Usage: [src/features/theme/theme-toggle.tsx#L20](src/features/theme/theme-toggle.tsx#L20)

28. **Logical AND (&&) Operator - Conditional Rendering**
    - Description: Render elements conditionally when a condition is true.
    - Usage: [src/components/ui/button/button.tsx#L66](src/components/ui/button/button.tsx#L66)

29. **Nullish Coalescing (??) Operator**
    - Description: Provide default values for undefined or null values.
    - Usage: [src/features/feature-one/feature-one.tsx#L27](src/features/feature-one/feature-one.tsx#L27)

---

## Lists and Array Rendering

30. **Array.map() - Rendering Lists**
    - Description: Render dynamic lists by mapping over arrays of data.
    - Usage: [src/components/layouts/dashboard-layout.tsx#L17](src/components/layouts/dashboard-layout.tsx#L17)

---

## Context API

31. **createContext - Creating Context**
    - Description: Create a context object for sharing state across components.
    - Usage: [src/features/theme/context.tsx#L5](src/features/theme/context.tsx#L5)

32. **Context.Provider - Providing Context**
    - Description: Wrap components with Provider to make context available to all children.
    - Usage: [src/features/theme/context.tsx#L35](src/features/theme/context.tsx#L35)

33. **useContext - Consuming Context**
    - Description: Access context values inside components using useContext hook.
    - Usage: [src/features/feature-one/feature-one.tsx#L7](src/features/feature-one/feature-one.tsx#L7)

---

## Error Handling

34. **Error Boundaries**
    - Description: Catch errors in component tree and display fallback UI.
    - Usage: [src/app/provider.tsx#L4](src/app/provider.tsx#L4)

35. **Error Fallback Component**
    - Description: Custom error UI component displayed when errors occur.
    - Usage: [src/components/errors/main.tsx#L1](src/components/errors/main.tsx#L1)

---

## Controlled Components

36. **Controlled Input Elements**
    - Description: Input values controlled by React state rather than DOM.
    - Usage: [src/features/feature-two/components/feature-two-child-a.tsx#L39](src/features/feature-two/components/feature-two-child-a.tsx#L39)

---

## Form Handling

37. **React Hook Form Integration**
    - Description: Use React Hook Form for efficient form state management and validation.
    - Usage: [src/components/ui/form/form.tsx#L14](src/components/ui/form/form.tsx#L14)

38. **Form Components**
    - Description: Reusable form UI components like FormItem, FormLabel, FormControl.
    - Usage: [src/components/ui/form/form.tsx#L76](src/components/ui/form/form.tsx#L76)

39. **Form Validation with Zod**
    - Description: Validate form data using Zod schemas.
    - Usage: [src/lib/auth.tsx#L19](src/lib/auth.tsx#L19)

---

## Async Operations

40. **Async Route Loader with Fetch**
    - Description: React router pre-loads data before a route is reached.
    - Usage: [src/app/loader/route-loader.ts#L2](src/app/loader/route-loader.ts#L2)

41. **Async Middleware**
    - Description: Async middleware for processing requests before component rendering.
    - Usage: [src/app/middleware/route-logging-middleware.ts](src/app/middleware/route-logging-middleware.ts)

42. **API Client Setup with Axios**
    - Description: Configure Axios interceptors for request/response handling.
    - Usage: [src/lib/api-client.tsx](src/lib/api-client.tsx)

43. **React Query Mutations**
    - Description: Handle async mutations with React Query for API calls.
    - Usage: [src/features/auth/components/login-form.tsx#L23](src/features/auth/components/login-form.tsx#L23)

---

## Dependencies Arrays

44. **useEffect Dependencies - Controlling When Effects Run**
    - Description: Specify dependencies to control when useEffect hooks execute.
    - Usage: [src/features/theme/context.tsx#L17](src/features/theme/context.tsx#L17)

45. **useCallback Dependencies - Memoizing with Dependencies**
    - Description: Memoize callbacks with specified dependency arrays.
    - Usage: [src/features/theme/context.tsx#L21](src/features/theme/context.tsx#L21)

46. **useMemo Dependencies - Memoizing Values with Dependencies**
    - Description: Memoize expensive computations with dependency tracking.
    - Usage: [src/app/provider.tsx#L11](src/app/provider.tsx#L11)

---

## React Router and Routing

47. **React Router Setup**
    - Description: Set up React Router with createBrowserRouter and RouterProvider.
    - Usage: [src/app/router.tsx#L1](src/app/router.tsx#L1)

48. **Route Configuration**
    - Description: Define routes with paths, components, loaders, and middleware.
    - Usage: [src/app/router.tsx#L25](src/app/router.tsx#L25)

49. **Nested Routes and Outlet**
    - Description: Create nested route structures with Outlet component.
    - Usage: [src/app/routes/app/root.tsx#L7](src/app/routes/app/root.tsx#L7)

50. **Navigation Components**
    - Description: Use Link and NavLink components for navigation.
    - Usage: [src/components/ui/link/link.tsx](src/components/ui/link/link.tsx)

51. **Protected Routes**
    - Description: Guard routes to allow access only to authenticated users.
    - Usage: [src/lib/auth.tsx#L63](src/lib/auth.tsx#L63)

52. **Layout Components**
    - Description: Reusable layout wrappers for different route groups.
    - Usage: [src/components/layouts/auth-layout.tsx](src/components/layouts/auth-layout.tsx), [src/components/layouts/dashboard-layout.tsx](src/components/layouts/dashboard-layout.tsx)

---

## Advanced React Patterns

53. **React.StrictMode**
    - Description: Wrapper that highlights potential problems in the application during development.
    - Usage: [src/main.tsx#L6](src/main.tsx#L6)

54. **Suspense - Code Splitting**
    - Description: Enable lazy loading with Suspense boundary and fallback UI.
    - Usage: [src/app/provider.tsx#L14](src/app/provider.tsx#L14)

55. **Component Composition**
    - Description: Build complex UIs by composing simpler components together.
    - Usage: [src/app/router.tsx#L14](src/app/router.tsx#L14)

56. **forwardRef with displayName**
    - Description: Forward refs to child components and set display names for debugging.
    - Usage: [src/components/ui/form/form.tsx#L88](src/components/ui/form/form.tsx#L88)

57. **TypeScript React.FC Type**
    - Description: Use React.FC type annotation for type-safe functional components.
    - Usage: [src/app/provider.tsx#L8](src/app/provider.tsx#L8)

58. **Props Type Interfaces**
    - Description: Define TypeScript interfaces for component props.
    - Usage: [src/features/feature-two/components/feature-two-child-a.tsx#L3](src/features/feature-two/components/feature-two-child-a.tsx#L3)

59. **Polymorphic Components with asChild**
    - Description: Create flexible components that can render as different HTML elements.
    - Usage: [src/components/ui/button/button.tsx#L49](src/components/ui/button/button.tsx#L49)

60. **Loader Data Pattern**
    - Description: Pre-load data before routes render and access it with useLoaderData.
    - Usage: [src/app/router.tsx#L49](src/app/router.tsx#L49)

---

## Child-to-Parent Communication

61. **Callback Props Pattern**
    - Description: Pass functions from parent to child for bidirectional communication.
    - Usage: [src/features/feature-two/feature-two.tsx#L10](src/features/feature-two/feature-two.tsx#L10)

---

## Summary

- **Total Concepts**: 61
- **Total Functional Components**: 20+
- **React Hook Types**: 10+
- **Custom Hooks**: 5+
- **Context Providers**: 5+
- **Error Boundaries**: 1
- **Async Patterns**: 4+
- **UI Form Components**: 8+
- **Layout Components**: 2

**Last Updated**: May 10, 2026

### React Hook Form Integration

| Concept                | File                                                                   | Line |
| ---------------------- | ---------------------------------------------------------------------- | ---- |
| Form component wrapper | [src/components/ui/form/form.tsx](src/components/ui/form/form.tsx#L14) | 14   |
| FormProvider setup     | [src/components/ui/form/form.tsx](src/components/ui/form/form.tsx#L14) | 14   |
| useFormContext hook    | [src/components/ui/form/form.tsx](src/components/ui/form/form.tsx#L15) | 15   |

### Form Components

| Concept                   | File                                                                    | Line |
| ------------------------- | ----------------------------------------------------------------------- | ---- |
| Form component            | [src/components/ui/form/form.tsx](src/components/ui/form/form.tsx#L164) | 164  |
| FormField component       | [src/components/ui/form/form.tsx](src/components/ui/form/form.tsx#L109) | 109  |
| FormItem component        | [src/components/ui/form/form.tsx](src/components/ui/form/form.tsx#L76)  | 76   |
| FormLabel component       | [src/components/ui/form/form.tsx](src/components/ui/form/form.tsx#L90)  | 90   |
| FormControl component     | [src/components/ui/form/form.tsx](src/components/ui/form/form.tsx#L107) | 107  |
| FormMessage component     | [src/components/ui/form/form.tsx](src/components/ui/form/form.tsx#L147) | 147  |
| FormDescription component | [src/components/ui/form/form.tsx](src/components/ui/form/form.tsx#L130) | 130  |

### Form Validation (Zod)

| Concept                    | File                                     | Line  |
| -------------------------- | ---------------------------------------- | ----- |
| Login validation schema    | [src/lib/auth.tsx](src/lib/auth.tsx#L19) | 19-22 |
| Register validation schema | [src/lib/auth.tsx](src/lib/auth.tsx#L31) | 31-36 |

---

## 12. Async Operations

### Async Route Loader

| Concept                 | File                                                                                    | Line |
| ----------------------- | --------------------------------------------------------------------------------------- | ---- |
| Route loader definition | [src/app/loader/route-loader.ts](src/app/loader/route-loader.ts#L2)                     | 2-4  |
| Loader data usage       | [src/features/feature-one/feature-one.tsx](src/features/feature-one/feature-one.tsx#L6) | 6    |

### Async Middleware

| Concept          | File                                                                                             | Line |
| ---------------- | ------------------------------------------------------------------------------------------------ | ---- |
| Route middleware | [src/app/middleware/route-logging-middleware.ts](src/app/middleware/route-logging-middleware.ts) | -    |

### API Client Setup (Axios)

| Concept            | File                                             | Line |
| ------------------ | ------------------------------------------------ | ---- |
| Axios interceptors | [src/lib/api-client.tsx](src/lib/api-client.tsx) | -    |

### React Query Mutations

| Concept                | File                                                                                                 | Line |
| ---------------------- | ---------------------------------------------------------------------------------------------------- | ---- |
| Login mutation call    | [src/features/auth/components/login-form.tsx](src/features/auth/components/login-form.tsx#L23)       | 23   |
| Register mutation call | [src/features/auth/components/register-form.tsx](src/features/auth/components/register-form.tsx#L21) | 21   |

---

## 13. Dependencies Arrays

### useEffect Dependencies

Controlling when effects run.

| Concept               | File                                                                                     | Line |
| --------------------- | ---------------------------------------------------------------------------------------- | ---- |
| Theme dependency      | [src/features/theme/context.tsx](src/features/theme/context.tsx#L17)                     | 17   |
| Multiple dependencies | [src/features/feature-one/feature-one.tsx](src/features/feature-one/feature-one.tsx#L12) | 12   |
| Multiple dependencies | [src/components/layouts/auth-layout.tsx](src/components/layouts/auth-layout.tsx#L24)     | 24   |

### useCallback Dependencies

Memoizing callbacks with dependencies.

| Concept                        | File                                                                 | Line |
| ------------------------------ | -------------------------------------------------------------------- | ---- |
| Empty dependency (setTheme)    | [src/features/theme/context.tsx](src/features/theme/context.tsx#L21) | 21   |
| Empty dependency (toggleTheme) | [src/features/theme/context.tsx](src/features/theme/context.tsx#L25) | 25   |

### useMemo Dependencies

Memoizing values with dependencies.

| Concept                        | File                                             | Line |
| ------------------------------ | ------------------------------------------------ | ---- |
| Empty dependency (QueryClient) | [src/app/provider.tsx](src/app/provider.tsx#L11) | 11   |

---

## 14. React Router and Routing

### React Router Setup

| Concept             | File                                         | Line |
| ------------------- | -------------------------------------------- | ---- |
| createBrowserRouter | [src/app/router.tsx](src/app/router.tsx#L1)  | 1    |
| RouterProvider      | [src/app/router.tsx](src/app/router.tsx#L76) | 76   |

### Route Configuration

| Concept           | File                                         | Line  |
| ----------------- | -------------------------------------------- | ----- |
| Route definitions | [src/app/router.tsx](src/app/router.tsx#L25) | 25-70 |

### Nested Routes

| Concept          | File                                                          | Line |
| ---------------- | ------------------------------------------------------------- | ---- |
| Outlet component | [src/app/routes/app/root.tsx](src/app/routes/app/root.tsx#L7) | 7    |

### Navigation Components

| Concept       | File                                                                                           | Line |
| ------------- | ---------------------------------------------------------------------------------------------- | ---- |
| Link wrapper  | [src/components/ui/link/link.tsx](src/components/ui/link/link.tsx)                             | -    |
| NavLink usage | [src/components/layouts/dashboard-layout.tsx](src/components/layouts/dashboard-layout.tsx#L20) | 20   |

### Route Guards / Protected Routes

| Concept                  | File                                     | Line  |
| ------------------------ | ---------------------------------------- | ----- |
| ProtectedRoute component | [src/lib/auth.tsx](src/lib/auth.tsx#L63) | 63-71 |

### Layout Components

| Concept          | File                                                                                       | Line |
| ---------------- | ------------------------------------------------------------------------------------------ | ---- |
| Auth layout      | [src/components/layouts/auth-layout.tsx](src/components/layouts/auth-layout.tsx)           | -    |
| Dashboard layout | [src/components/layouts/dashboard-layout.tsx](src/components/layouts/dashboard-layout.tsx) | -    |

---

## 15. Advanced React Patterns

### React.StrictMode

Development mode checks and warnings.

| Concept            | File                            | Line |
| ------------------ | ------------------------------- | ---- |
| StrictMode wrapper | [src/main.tsx](src/main.tsx#L6) | 6    |

### Suspense

Lazy loading and code splitting.

| Concept           | File                                             | Line |
| ----------------- | ------------------------------------------------ | ---- |
| Suspense boundary | [src/app/provider.tsx](src/app/provider.tsx#L14) | 14   |

### Component Composition

Composing components together.

| Concept                      | File                                                                                 | Line |
| ---------------------------- | ------------------------------------------------------------------------------------ | ---- |
| ProtectedAppRoot composition | [src/app/router.tsx](src/app/router.tsx#L14)                                         | 14   |
| Parent-child composition     | [src/features/feature-two/feature-two.tsx](src/features/feature-two/feature-two.tsx) | -    |

### forwardRef with displayName

Explicit component names for debugging.

| Concept                     | File                                                                           | Line |
| --------------------------- | ------------------------------------------------------------------------------ | ---- |
| FormItem displayName        | [src/components/ui/form/form.tsx](src/components/ui/form/form.tsx#L88)         | 88   |
| FormLabel displayName       | [src/components/ui/form/form.tsx](src/components/ui/form/form.tsx#L105)        | 105  |
| FormControl displayName     | [src/components/ui/form/form.tsx](src/components/ui/form/form.tsx#L128)        | 128  |
| FormMessage displayName     | [src/components/ui/form/form.tsx](src/components/ui/form/form.tsx#L145)        | 145  |
| FormDescription displayName | [src/components/ui/form/form.tsx](src/components/ui/form/form.tsx#L169)        | 169  |
| Button displayName          | [src/components/ui/button/button.tsx](src/components/ui/button/button.tsx#L73) | 73   |
| Input displayName           | [src/components/ui/form/input.tsx](src/components/ui/form/input.tsx#L35)       | 35   |
| Label displayName           | [src/components/ui/form/label.tsx](src/components/ui/form/label.tsx#L22)       | 22   |

### TypeScript React.FC Type

Type-safe functional components.

| Concept       | File                                                                          | Line |
| ------------- | ----------------------------------------------------------------------------- | ---- |
| React.FC type | [src/app/provider.tsx](src/app/provider.tsx#L8)                               | 8    |
| React.FC type | [src/features/theme/context.tsx](src/features/theme/context.tsx#L13)          | 13   |
| React.FC type | [src/features/theme/theme-toggle.tsx](src/features/theme/theme-toggle.tsx#L9) | 9    |

### Props Interfaces/Types

Type-safe props passing.

| Concept                   | File                                                                                                                          | Line  |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----- |
| Feature two child A props | [src/features/feature-two/components/feature-two-child-a.tsx](src/features/feature-two/components/feature-two-child-a.tsx#L3) | 3-6   |
| Feature two child B props | [src/features/feature-two/components/feature-two-child-b.tsx](src/features/feature-two/components/feature-two-child-b.tsx#L3) | 3-6   |
| Button component props    | [src/components/ui/button/button.tsx](src/components/ui/button/button.tsx#L38)                                                | 38-43 |
| Input component props     | [src/components/ui/form/input.tsx](src/components/ui/form/input.tsx#L8)                                                       | 8-12  |

### Polymorphic Components (asChild Pattern)

Flexible component rendering.

| Concept      | File                                                                           | Line |
| ------------ | ------------------------------------------------------------------------------ | ---- |
| asChild prop | [src/components/ui/button/button.tsx](src/components/ui/button/button.tsx#L49) | 49   |

---

## 16. Child-to-Parent Communication

### Callback Props Pattern

Passing functions to children for communication.

| Concept                     | File                                                                                                                           | Line  |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ----- |
| Parent handler functions    | [src/features/feature-two/feature-two.tsx](src/features/feature-two/feature-two.tsx#L10)                                       | 10-17 |
| Parent passes onSendMessage | [src/features/feature-two/feature-two.tsx](src/features/feature-two/feature-two.tsx#L25)                                       | 25    |
| Child calls callback        | [src/features/feature-two/components/feature-two-child-a.tsx](src/features/feature-two/components/feature-two-child-a.tsx#L23) | 23    |
| Child calls callback        | [src/features/feature-two/components/feature-two-child-b.tsx](src/features/feature-two/components/feature-two-child-b.tsx#L17) | 17    |

---

## 17. State Management Patterns

### Local State with useState

Managing component state.

| Concept           | File                                                                                    | Line |
| ----------------- | --------------------------------------------------------------------------------------- | ---- |
| Feature two state | [src/features/feature-two/feature-two.tsx](src/features/feature-two/feature-two.tsx#L6) | 6-8  |

### Context with Custom Hooks

Accessing context safely with custom hooks.

| Concept                  | File                                                                   | Line  |
| ------------------------ | ---------------------------------------------------------------------- | ----- |
| useTheme custom hook     | [src/features/theme/useTheme.ts](src/features/theme/useTheme.ts)       | -     |
| useFormField custom hook | [src/components/ui/form/form.tsx](src/components/ui/form/form.tsx#L45) | 45-67 |

### React Query Queries and Mutations

Server state management.

| Concept                  | File                                                                                           | Line |
| ------------------------ | ---------------------------------------------------------------------------------------------- | ---- |
| React Query setup        | [src/lib/auth.tsx](src/lib/auth.tsx)                                                           | -    |
| Query and mutation hooks | [src/features/auth/components/login-form.tsx](src/features/auth/components/login-form.tsx#L14) | 14   |
