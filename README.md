# 🇵🇭🛠️ SerbisKo

![Made With](https://img.shields.io/badge/made%20with-love-red)
![Status](https://img.shields.io/badge/status-learning-blue)
![License](https://img.shields.io/badge/license-CC%20BY--NC%204.0-lightgrey)


**SerbisKo** is an AI-powered local service finder built for the Filipino community. Whether you need a plumber, tutor, or cleaner, SerbisKo connects everyday people with skilled local freelancers — fast, easy, and reliable.

> “Serbisyo ko. Para sa’yo.”

---

## 📌 Overview

In the Philippines, many skilled workers don’t know how to market themselves online unless they’re connected to a company or rely on word-of-mouth via Facebook. **SerbisKo** gives these freelancers a platform to offer their services, gain reviews, and get discovered — even if they don’t know how to write a long promotional post.

This platform is built **by Filipinos, for Filipinos**, and aims to become the go-to service hub for local communities.

---

## 🧠 AI-Assisted Matching (Coming Soon)

SerbisKo will feature an AI-powered assistant that understands natural Filipino/Taglish input and connects them to the right local service provider.

For example:

> **User:** “Yung AC ko maingay at hindi na lumalamig.”  
> **AI:** “Mukhang kailangan mo ng aircon technician. Gusto mo bang mag-book ngayon?”

⚠️ The specific AI model to be used is **still to be decided**, but AI integration is part of the core roadmap.

---

## 🧰 Tech Stack

### 🖥️ Frontend

- **ReactJS 19** + **TypeScript**
- **Vite** for fast dev environment
- **TailwindCSS 4** + [`shadcn/ui`](https://ui.shadcn.com/) (`slate` as base color)
- **React Router v7** – for routing
- **TanStack React Query** – for server state management
- **Axios** – for API communication
- **Yup** – for validation
- **Lucide Icons**, **Radix UI**, `clsx`, `tailwind-merge` and more

### 📦 Frontend Dependencies (from `package.json`)

<details>
<summary>Click to expand</summary>

```json
{
  "dependencies": {
    "@radix-ui/react-dialog": "^1.1.14",
    "@tailwindcss/vite": "^4.1.11",
    "@tanstack/react-query": "^5.82.0",
    "axios": "^1.10.0",
    "clsx": "^2.1.1",
    "lucide-react": "^0.525.0",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-icons": "^5.5.0",
    "react-router-dom": "^7.6.3",
    "tailwind-merge": "^3.3.1",
    "tailwindcss": "^4.1.11",
    "yup": "^1.6.1"
  }
}

```
</details>

---

### 🔧 Backend (Planned)

I plan to use FastAPI for the backend because of its:

- ✅ Async support and performance  
- ✅ Pydantic for data validation  
- ✅ Clean RESTful API design  
- ✅ Easier AI integration in the future  

> 💡 **Why FastAPI over Django?**  
> FastAPI is simpler to scaffold, async-first, and better suited for lightweight, modular microservices — perfect for building scalable and AI-ready APIs.

#### 📦 Planned Backend Stack

- FastAPI  
- Pydantic  
- PostgreSQL  
- SQLAlchemy or Tortoise ORM  
- JWT Authentication  

---

## 📁 Project Structure

```text
SerbisKo/
├── README.md
├── frontend/       # ReactJS + Vite + Tailwind + shadcn/ui
├── backend/        # FastAPI backend (soon)
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

### Backend (FastAPI, soon)

```bash
cd backend
# Setup virtual environment and dependencies
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

> 🧰 **"You don’t need a big agency to get noticed — you just need a place where your skills speak for themselves."**  
> — *SerbisKo*
