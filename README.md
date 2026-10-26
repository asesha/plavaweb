# Plava Consulting Ltd Website

## Overview
Plava Consulting Ltd is an IT consulting company based in Milton Keynes, UK, specializing in AI-based tools development and support. This project delivers a modern, responsive website built with Node.js and React.

## Features
- Health check endpoint (`GET /health`) to verify service status.
- API endpoint (`GET /api/plava-website`) serving website content from fixture data.
- Frontend React application rendering company information and services.
- Backend Express server serving APIs and frontend assets.

## Technologies
- Node.js
- Express
- React
- Jest for testing
- ESLint for linting

## API Endpoints
| Method | Path               | Description                 |
|--------|--------------------|-----------------------------|
| GET    | /health            | Service health check        |
| GET    | /api/plava-website | Retrieve website content    |

## Setup
1. Install dependencies: `npm install`
2. Run development server: `npm start`
3. Run tests: `npm test`

## Deployment
Deploy using existing Git connection "Plavagit" and pipeline targeting the dev environment. Rollback owner: Platform on-call.

## License
MIT