# 💻 Doowla Frontend

The **official frontend** for [Doowla](https://doowla.com) — a modern African fintech API platform.  
This client-facing app serves as the main user interface for testing core financial features including onboarding, wallet operations, payouts, and fraud checks.

---

## 🔎 What is Doowla?

Doowla is building developer-first financial infrastructure for African businesses.  
It provides APIs for payments, wallets, payouts, fraud detection, and more — designed to be fast, secure, and cost-effective.

---

## 🧩 Features of the Frontend

- 🔐 **User Authentication UI** (login, signup)
- 💼 **Wallet Dashboard** (balance, fund, history)
- 💸 **Payout Form** (initiate test payouts)
- 🕵️‍♂️ **Fraud Check Interface** (see flagged transactions)
- ⚙️ **Admin Routes** (optional)
- 🌘 Responsive design & dark mode

---

## ⚙️ Built With

| Tech                | Purpose                 |
| ------------------- | ----------------------- |
| **React / Next.js** | Core frontend framework |
| **Tailwind CSS**    | UI styling              |
| **Axios / Fetch**   | API calls to backend    |
| **Vercel**          | Deployment              |
| **Framer Motion**   | Animations (optional)   |

---

## 🔧 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/doowla-frontend.git
cd doowla-frontend
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure environment variables

Create a `.env.local` file with your API base URL:

```env
NEXT_PUBLIC_API_URL=https://api.doowla.com
```

### 4. Run the app locally

```bash
npm run dev
# or
yarn dev
```

App runs at `http://localhost:3000`

---

## 🧪 Folder Structure (example)

```
doowla-frontend/
├── pages/               # Routes (Next.js)
├── components/          # Reusable UI components
├── services/            # API request helpers
├── contexts/            # Auth & state management
├── styles/              # Tailwind/global styles
└── public/              # Assets (logo, icons, etc.)
```

---

## 🚀 Deployment

> This app is deployed on [Vercel](https://vercel.com/), and automatically updates from `main`.

To deploy manually:

```bash
npm run build
npm start
```

Or push to GitHub and link the repo to your Vercel account.

---

## 📦 API Integration

This frontend connects to the [Doowla Backend API](https://github.com/yourusername/doowla-api) using REST endpoints like:

| Endpoint                | Description                   |
| ----------------------- | ----------------------------- |
| `POST /auth/login`      | Authenticate user             |
| `GET /wallet/balance`   | Fetch user wallet balance     |
| `POST /payout/initiate` | Create a payout request       |
| `POST /fraud/check`     | Analyze transaction for fraud |

---

## 🛡️ Auth & Security

- JWT token stored in memory or secure cookie
- Route protection via middleware
- Backend verifies all sensitive operations

---

## 🧠 Roadmap

- [ ] Add user notification system (toasts)
- [ ] Add transaction history UI
- [ ] Improve admin panel (approve payouts, flag fraud)
- [ ] Integrate test payment providers (e.g. Paystack sandbox)

---

## 👥 Contributors

- Anderson Caleb (Frontend + Backend)
- Victor Emenike (Frontend)
- Barisuka Peter (Co-founders, strategy)

---

## 📫 Contact

- Email: [hello@doowla.com](mailto:hello@doowla.com)
- Twitter: [@doowlaapi](https://twitter.com/doowlaapi)
- Website: [https://doowla.com](https://doowla.com)

---

## 📝 License

MIT License — open for collaboration under terms of fair use and credit.

---
