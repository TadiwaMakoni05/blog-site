# 👨‍💻 Computer Scientist Portfolio (Next.js)

A sleek and modern **portfolio website** built with **Next.js** to showcase projects, skills, experience, and research work as a computer scientist.

---

## 🚀 Features

* 🏠 **Landing Page** with professional intro
* 📂 **Projects Showcase** (with descriptions, links, and tech stack)
* 📜 **Resume / CV Section** (downloadable)
* 📖 **Research / Blog Section** (optional)
* 📧 **Contact Form** with email integration
* 🌙 **Dark/Light Mode Toggle**
* 📱 **Responsive Design** with Tailwind CSS

---

## 🛠 Tech Stack

* **Framework**: Next.js (React + SSR/SSG)
* **Styling**: Tailwind CSS
* **Forms**: React Hook Form / EmailJS
* **Deployment**: Vercel / Netlify

---

## 📂 Project Structure

```
portfolio/
│── public/            # Static assets (images, CV, favicon)
│── src/
│   ├── components/    # Reusable UI components (Navbar, Footer, etc.)
│   ├── pages/         # Next.js pages (index, projects, contact, etc.)
│   ├── data/          # JSON/YAML data for projects/skills
│   └── styles/        # Global styles
│
│── package.json
│── README.md
```

---

## ⚙️ Installation & Setup

```bash
# Clone repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit: **[http://localhost:3000/](http://localhost:3000/)**

---

## 📦 Deployment

Easiest with **Vercel** (native support for Next.js):

```bash
npm run build
vercel deploy
```

---

## 📝 License

This project is licensed under the **MIT License**.
