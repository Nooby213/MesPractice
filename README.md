# MesPractice

MES side project starter.

## Structure

- `backend`: Spring Boot, JPA, MyBatis, MySQL, QueryDSL
- `frontend`: Vite, React, TypeScript
- `docker-compose.yml`: local MySQL for development

## Quick Start

### Database

```powershell
docker compose up -d
```

### Backend

```powershell
cd backend
gradle bootRun
```

Backend runs on `http://localhost:8080`.

### Frontend

```powershell
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`.
