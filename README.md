# 🏢 BPD Abujapi Jabar — Official Landing Page

This is the official website for **Badan Pengurus Daerah Asosiasi Badan Usaha Jasa Pengamanan Indonesia Provinsi Jawa Barat**.  
Built with **Next.js 15+, TypeScript, and Tailwind CSS** to showcase the organization's profile, programs, news, and services in a modern and professional way.

---

## ✨ Features

- 🎯 **Organization Profile** — Displays vision, mission, and objectives
- 📅 **Programs** — Information on activities, training, and strategic plans
- 📰 **News & Events** — Latest updates from the organization and industry
- 👥 **Membership** — Registration info and member benefits
- 📞 **Contact** — Easy communication with BPD Abujapi Jabar
- 🌐 **Responsive Design** — Optimized for all devices
- ⚡ **High Performance** — Powered by Next.js and Tailwind CSS

---

## 📦 Tech Stack

- [Next.js](https://nextjs.org/) — Modern React framework
- [TypeScript](https://www.typescriptlang.org/) — Strongly typed JavaScript
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling
- [ESLint + Prettier](https://eslint.org/) — Code quality and formatting
- [Husky](https://typicode.github.io/husky/#/) — Git hooks automation

---

## 🚀 Getting Started

```bash
git clone https://github.com/new-funtech/landing-page.git
cd landing-page
pnpm install
pnpm dev
```

Access in your browser: **http://localhost:3000**

---

## 🌍 Page Structure

- `/` — Home (Landing Page)
- `/login` — Member Login
- `/news` — News & Events
- `/about` — About Us
- `/contact` — Contact

---

## 🐳 Docker Deployment

### Quick Start with Health Check & Security Monitoring

```bash
# Quick deploy dengan monitoring
./scripts/deploy.sh

# Atau manual dengan docker-compose
docker-compose up -d

# Monitor security
./scripts/monitor-container.sh monitor
```

### Security Features

✅ **Health Check Otomatis** - Monitor kesehatan container setiap 30 detik  
✅ **Resource Monitoring** - Alert CPU & Memory usage > 80%  
✅ **Security Monitoring** - Deteksi proses mencurigakan & auto-stop  
✅ **Network Monitoring** - Deteksi koneksi abnormal  
✅ **Container Hardening** - Resource limits & security options  

📖 **Dokumentasi lengkap:** [DOCKER-SECURITY.md](./DOCKER-SECURITY.md)

---

## 🛠️ Development Commands

| Command       | Description                     |
|--------------|---------------------------------|
| `pnpm dev`   | Start development server        |
| `pnpm lint`  | Run ESLint for code quality     |
| `pnpm format`| Format code using Prettier      |
| `pnpm build` | Build for production            |

---

## 📁 Project Structure

```
app/
  page.tsx              # Landing Page
  login/
    page.tsx            # Login Page
  news/
    page.tsx            # News Page
components/
  Button.tsx
  Navbar.tsx
  Footer.tsx
public/
  images/
    logo-abujapi.png
styles/
  globals.css
```

---

## 📄 License

MIT License © 2025 **BPD Abujapi Jabar**
