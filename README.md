# Plava Consulting Ltd Website

## Overview
This project implements the website for Plava Consulting Ltd, an IT consulting firm based in Milton Keynes, UK, specializing in AI-based tools.

## Features
- Health check endpoint at `/health` returning status `ok`
- API endpoint `/api/plava-website` serving website content from fixture data

## Architecture
- Backend API built with Node.js and Express.js
- Fixture data stored in JSON files under `fixtures/`
- Frontend consumes backend APIs to display dynamic content

## API Endpoints
| Method | Path               | Description               |
|--------|--------------------|---------------------------|
| GET    | /health            | Returns `ok` for health check |
| GET    | /api/plava-website | Returns website content from fixtures |

## Setup
1. Install dependencies: `npm install`
2. Start server: `npm start`
3. Access frontend via `public/index.html` or API endpoints directly

## Development
- Fixture data located in `fixtures/data.json`
- Backend code in `src/app.js`

## License
MIT