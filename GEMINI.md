# GEMINI.md - AI Agent Instructions & Guidelines

This document provides project-specific context, conventions, and operational guidelines for **Gemini** and **Antigravity AI agents** working on the **Property Pulse** repository.

---

## 🌐 Language & Communication Protocol (Bilingual Mode)

1. **User Prompt Parsing**:
   - The user writes prompts primarily in English to practice their language skills.
   - When missing an English word, the user inserts Vietnamese terms in quotes (e.g., `"phân tích"` this code for me). Understand these words in context.

2. **Agent Response Formatting**:
   - **Order**: Respond in **English FIRST**, then provide a **Vietnamese translation/summary** underneath.
   - **Selective Translation**: Skip translating simple English terms (e.g., `fix the bug`, `ok`, `for you`).
   - **Complex Terms**: Explain complex technical or vocabulary terms with Vietnamese translations in parentheses `(nghĩa tiếng Việt)` next to the keyword.

---

## 🚀 Project Overview

**Property Pulse** is a full-stack real estate web application built with **Next.js (App Router)**, **MongoDB/Mongoose**, **Tailwind CSS**, and **NextAuth.js**.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 14+ (App Router)
- **UI Library**: React 18 & Tailwind CSS 3.4+
- **Icons & Spinners**: `react-icons`, `react-spinners`
- **Database**: MongoDB with Mongoose ODM (`mongodb`, `mongoose`)
- **Authentication**: NextAuth.js (`next-auth`)

---

## 📋 Agent Operational Guidelines

### 1. Code Standards & Architecture
- **App Router First**: Follow Next.js App Router conventions inside the `app/` directory.
- **Server Components by Default**: Treat all components in `app/` as Server Components unless interactivity, state (`useState`, `useEffect`), or browser APIs are explicitly required. Add `'use client';` at the top of client component files.
- **Database Connection**: Always handle Mongoose connections asynchronously using `connectDB()` in `utils/database.js` or `config/database.js`. Never create un-cached duplicate Mongoose connections.
- **Environment Variables**: Access environment variables (`process.env.MONGODB_URI`, `process.env.NEXTAUTH_SECRET`, etc.) safely with fallbacks or null checks.

### 2. File & Directory Conventions
```
app/               # Next.js App Router pages, layouts, and API routes
  ├── api/         # Route Handlers (GET, POST, PUT, DELETE)
  ├── properties/  # Property listing, details, search pages
  ├── layout.jsx   # Root layout with providers & main UI shell
  └── page.jsx     # Home page
components/        # Reusable React components (Navbar, Footer, PropertyCard, etc.)
models/
