# Legal Clinic - Frontend 💼

## 📌 Project Description
A modern React-based frontend for Legal Clinic that allows clients to register/login, browse lawyers, and submit new legal cases.

---

## 🎯 Purpose of this File
Document setup, structure, and guidance for working with the frontend system.

---

## 🧰 Tech Stack
- React.js
- React Router
- CSS (custom components)
- JWT authentication (via backend)
- Fetch API integration

---

## 🔗 Backend Repository
[LegalClinic Backend](https://github.com/your-username/legalclinic-backend)

## 🔗 Deployed Site
[View Live App](https://your-frontend-deployment.com)

---

## 🚦 Routing Table

| Path              | Description                   |
|-------------------|-------------------------------|
| `/`               | Home page                     |
| `/register`       | Signup for new user           |
| `/login`          | Login for existing user       |
| `/client`         | Client dashboard              |
| `/lawyer`         | Lawyer dashboard              |
| `/add-case`       | Add a new legal case          |
| `/lawyers/:id`    | Lawyer profile and messaging  |

---

## 📥 Installation Instructions

1. **Standard Install**
```bash
cd legalclinic-frontend
npm install
npm run dev
```

2. **Docker**
```bash
docker build -t legalclinic-frontend .
docker run -p 5173:5173 legalclinic-frontend
```

---

## 🧊 IceBox Features
- Live chat between users
- Lawyer filters (city/specialty)
- Mobile-responsive UI
- Multi-language support
- Saved draft cases