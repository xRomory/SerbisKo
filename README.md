# 🇵🇭🛠️ SerbisKo

![Made With](https://img.shields.io/badge/made%20with-love-red)
![Status](https://img.shields.io/badge/status-learning-blue)
![License](https://img.shields.io/badge/license-CC%20BY--NC%204.0-lightgrey)


**SerbisKo** is an AI-powered local service finder built for the Filipino community. Whether you need a plumber, tutor, or cleaner, SerbisKo connects everyday people with skilled local freelancers — fast, easy, and reliable.

> “Serbisyo ko. Para sa’yo.”

---

## 📌 Overview

In the Philippines, many skilled workers don’t know how to market themselves online unless they’re connected to a company or rely on word-of-mouth via Facebook. **SerbisKo** gives these freelancers a platform to offer their services, gain reviews, and get discovered — even if they don’t know how to write a long promotional post.

This platform is built **by a Filipino, for Filipinos**, and aims to become the go-to service hub for local communities.

---

## 🧠 AI-Assisted Matching (Coming Soon)

SerbisKo will feature an AI-powered assistant that understands natural Filipino/Taglish input and connects them to the right local service provider.

For example:

> **User:** “Yung AC ko maingay at hindi na lumalamig.”  
> **AI:** “Mukhang kailangan mo ng aircon technician. Gusto mo bang mag-book ngayon?”

⚠️ The specific AI model is still **being explored**, with options open for open-source LLMs or cloud APIs.

---

## 🧰 Tech Stack

📦 See: [`frontend/package.json`](./frontend/package.json) | [`backend/requirements.txt`](./backend/requirements.txt)

### 🖥️ Frontend

- **ReactJS 19** + **TypeScript**
- **Vite** for fast dev environment
- **TailwindCSS 4** + [`shadcn/ui`](https://ui.shadcn.com/) (`slate` as base color)
- **React Router v7** – for routing
- **TanStack React Query** – for server state management
- **Axios** – for API communication
- **Yup** – for validation
- **Radix UI Primitives** – for accessible components
- **Lucide Icons**, `clsx`, `tailwind-merge` and more

### 📦 Frontend Dependencies (from `package.json`)

<details>
<summary>Click to expand</summary>

```json
{
  "dependencies": {
    "@radix-ui/react-alert-dialog": "^1.1.14",
    "@radix-ui/react-avatar": "^1.1.10",
    "@radix-ui/react-checkbox": "^1.3.2",
    "@radix-ui/react-dialog": "^1.1.14",
    "@radix-ui/react-dropdown-menu": "^2.1.15",
    "@radix-ui/react-label": "^2.1.7",
    "@radix-ui/react-radio-group": "^1.3.7",
    "@radix-ui/react-select": "^2.2.5",
    "@radix-ui/react-separator": "^1.1.7",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-switch": "^1.2.5",
    "@radix-ui/react-tabs": "^1.1.12",
    "@radix-ui/react-tooltip": "^1.2.7",
    "@tanstack/react-query": "^5.82.0",
    "axios": "^1.10.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "date-fns": "^4.1.0",
    "leaflet": "^1.9.4",
    "lucide-react": "^0.525.0",
    "react": "^19.1.0",
    "react-day-picker": "^9.8.0",
    "react-dom": "^19.1.0",
    "react-icons": "^5.5.0",
    "react-leaflet": "^5.0.0",
    "react-router-dom": "^7.6.3",
    "tailwind-merge": "^3.3.1",
    "tailwindcss": "^4.1.11",
    "yup": "^1.6.1"
  }
}

```
</details>

---

### 🔧 Backend 

**Core Technologies:**
- **FastAPI** (v0.116.1) - Async API framework
- **SQLAlchemy** (v2.0.41) - ORM for PostgreSQL
- **Pydantic** (v2.11.7) - Data validation
- **JWT Authentication** via python-jose
- **Alembic** (v1.16.4) - Database migrations
- **Bcrypt** (v4.3.0) - Password hashing

> 💡 **Why FastAPI over Django?**  
> FastAPI is simpler to scaffold, async-first, and better suited for lightweight, modular microservices — perfect for building scalable and AI-ready APIs.

**Key Dependencies:**

| Package | Purpose |
|---------|---------|
| fastapi | Web framework |
| uvicorn | ASGI server |
| SQLAlchemy | ORM |
| psycopg2-binary | PostgreSQL adapter |
| python-jose | JWT authentication |
| bcrypt | Password hashing |
| pydantic | Data validation |
| alembic | DB migrations |
| python-dotenv | Environment variables |
| email-validator | Email validation |

**Full Dependency List:**
```text
alembic==1.16.4
annotated-types==0.7.0
anyio==4.9.0
bcrypt==4.3.0
cffi==1.17.1
click==8.2.1
colorama==0.4.6
cryptography==45.0.5
dnspython==2.7.0
ecdsa==0.19.1
email_validator==2.2.0
fastapi==0.116.1
greenlet==3.2.3
h11==0.16.0
idna==3.10
Mako==1.3.10
MarkupSafe==3.0.2
passlib==1.7.4
psycopg2-binary==2.9.10
pyasn1==0.6.1
pycparser==2.22
pydantic==2.11.7
pydantic_core==2.33.2
python-dotenv==1.1.1
python-jose==3.5.0
rsa==4.9.1
six==1.17.0
sniffio==1.3.1
SQLAlchemy==2.0.41
starlette==0.47.1
typing-inspection==0.4.1
typing_extensions==4.14.1
uvicorn==0.35.0

```

---

## 📁 Project Structure

```text
SerbisKo/
├── README.md
├── frontend/       # ReactJS + Vite + Tailwind + shadcn/ui
├── backend/        # FastAPI + Pydantic backend 
└── ai/             # Placeholder for future AI integration
```

---

## 🔑 Key Features (Planned)

- 🔍 Search and filter providers by service, rating, and location  
- 🧑‍🔧 Profile pages for workers with reviews, photos, and pricing  
- 🗓️ Booking system (calendar or simple request-based)  
- 💬 User-generated ratings and reviews  
- 🧠 AI-powered service suggestion (coming soon)  
- 🔐 Authentication for clients and freelancers  
- 📱 Mobile-friendly responsive UI  

---

## 🧪 Local Development

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend (FastAPI - in active development)

```bash
cd backend
# Setup virtual environment and dependencies
pip install -r requirements.txt
uvicorn main:app --reload
```

---

## 🚀 Future Roadmap

- 🤖 AI integration for user chat assistance  
- 💸 Payment integration (GCash, Maya, bank transfer)  
- 📱 Mobile app (PWA or React Native)  
- 📍 Geo-targeted job matching  
- 🛡️ Verification options (ID/barangay, ratings)  

---

## 🤝 Contributing

I welcome ideas, suggestions, and pull requests!  
Help me build the future of local Filipino freelancing.

---

## 📄 License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)** license.

You are free to:
- Share — copy and redistribute the material in any medium or format
- Adapt — remix, transform, and build upon the material

**Under the following terms:**
- Attribution — You must give appropriate credit.
- NonCommercial — You may not use the material for commercial purposes.

Read more: [https://creativecommons.org/licenses/by-nc/4.0](https://creativecommons.org/licenses/by-nc/4.0)

---

>  _**"You don’t need a big agency to get noticed — you just need a place where your skills speak for themselves."**_  
> — *SerbisKo*
