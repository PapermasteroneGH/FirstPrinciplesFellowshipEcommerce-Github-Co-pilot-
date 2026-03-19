# First Principles Fellowship (React + Vite)

A modern React-based website for a research & development organization:

- Technical consulting
- Training and mentorship
- Sponsorship packages

## Features

- Responsive single-page React UI
- Cart and checkout simulation (no payments)
- Contact form with local feedback
- Data-driven services and sponsorship packages
- Mobile menu and layout adjustments

## Run locally

1. npm install
2. npm run dev
3. Open the local URL (default http://localhost:5173)

## Build

npm run build

## Future improvements

- Add Stripe/PayPal checkout integration
- Add real backend API for form submissions and order processing
- Authentication for partner access
- CMS integration for dynamic content

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
