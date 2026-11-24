# CLICK Ecommerce Store India – Admin Console

A responsive React-based admin dashboard for monitoring ecommerce sales, transactions, and order performance.

## Project Overview

The CLICK Ecommerce Admin Console provides a centralized interface to monitor business performance and transaction activity.

## Features

- Responsive admin dashboard for desktop, tablet, and mobile screens.
- Sidebar navigation with Dashboard, Sales, and Transactions sections.
- KPI cards displaying key business metrics.
- Sales overview with paid sales, paid orders, and average order value.
- Sales channel breakdown for Website, Marketplace, and Direct.
- Recent transactions table.
- Transaction status filtering:
  - All
  - Paid
  - Processing
  - Refunded
  - Failed
- Data displayed using the supplied project JSON files.
- Keyboard-accessible navigation.

## Technologies Used

- React 18
- Vite
- JavaScript
- CSS Modules
- Recharts
- ESLint

## Project Structure

```text
REACT_STARTER/
├── public/
├── src/
│   ├── components/
│   ├── data/
│   ├── styles/
│   ├── App.jsx
│   ├── App.module.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Installation

Make sure Node.js 18 or later and npm are installed.

Open the project folder in the terminal and run:

```bash
npm install
```

## Run the Development Server

```bash
npm run dev
```

Open the local URL displayed in the terminal to view the dashboard.

## Code Quality Check

Run ESLint:

```bash
npm run lint
```

## Production Build

Create the production build:

```bash
npm run build
```

The production-ready files will be generated in the `dist` folder.

## Responsive Testing

The dashboard has been tested at the following screen sizes:

- Desktop: 1440px
- Tablet: 768px
- Mobile: 390px
- Small Mobile: 320px

## Project Status

- Dashboard navigation implemented.
- Sales section implemented.
- Transactions section implemented.
- Transaction status filters tested.
- Responsive layout tested.
- Keyboard navigation tested.
- ESLint check passed.
- Production build completed successfully.

---

**Project:** CLICK Ecommerce Store India – Admin Console  
**Version:** 1.0.0