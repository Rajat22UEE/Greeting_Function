# My First React App (Next.js + Tailwind)

A beginner-friendly React project built with **Next.js**, **Tailwind CSS**, and **App Router**, focused on learning **functional components** and **props**.

---

## 🚀 Features

- ✅ Built with [Next.js](https://nextjs.org/) App Router
- 🎨 Styled using [Tailwind CSS](https://tailwindcss.com/)
- ⚛️ Functional React components
- 📦 Uses props to pass data between components
- 📁 Organized file structure with path alias `@/`
- 🌐 Client-side routing with `<Link>`
- 🧠 Educational layout explaining React concepts

---

## 🧩 Key Concept: Functional Components & Props

This project showcases a simple reusable component:

```jsx
function Greeting({ name }) {
  return <h1>Welcome, {name}!</h1>;
}
