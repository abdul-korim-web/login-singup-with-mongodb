# 🚀 MERN Authentication System (JWT + MongoDB + Express)

A production-ready authentication system built using **Node.js, Express, MongoDB, Mongoose, JWT, bcrypt, express-validator**. Includes secure password hashing, token-based authentication, validation, clean architecture, and best practices.

---

## ⭐ Features

* 🔐 **JWT Authentication** (Login token)
* 📝 **User Signup + Login**
* 🔒 **Password Hashing with bcrypt**
* ✔️ **Request Validation using express-validator**
* 🗄️ **MongoDB Atlas Integration**
* ⚙️ **Modular & Scalable Folder Structure**
* 🚀 **Easy to Deploy**
* 🧪 **Error Handling Middleware**

---

## 🧰 Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB Atlas**
* **Mongoose**
* **bcrypt**
* **express-validator**
* **jsonwebtoken (JWT)**
* **dotenv**
* **nodemon**

---

## 📁 Folder Structure

```
src/
 ├── Controls/
 │    ├── singupControl.js
 │    └── loginControl.js
 ├── Middlewares/
 │    ├── singupInfoValidetion.js
 │    ── loginInfoValidetion.js
 │    
 ├── Schemas/
 │    └── userSchema.js
 └── Routes/
      ├── singupRoute.js
      └── loginRoute.js

index.js
.env
package.json
README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/abdul-korim-web/login-singup-with-mongodb.git
cd login-singup-with-mongodb
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create .env file

```
PORT=5000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Run server

Development mode:

```bash
npm run dev
```

Production mode:

```bash
node index.js
```

---

## 🔐 API Endpoints

### **Signup** — `POST /signup`

**Body:**

```json
{
  "username": "abdulkorim",
  "email": "abdul@gmail.com",
  "password": "12345678"
}
```

**Response:**

```json
{
  "status": 200,
  "message": "Signup successful"
}
```

---

### **Login** — `POST /login`

**Body:**

```json
{
  "email": "abdul@gmail.com",
  "password": "12345678"
}
```

**Response:**

```json
{
  "status": 200,
  "message": "Login successful",
  "token": "your-jwt-token"
}
```

---

## 🔒 JWT Protected Route Example(If You are added your code )

### Middleware: `verifyToken.js`

```js
export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Access Denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid Token" });
  }
};
```

### Protected Route

```js
app.get("/profile", verifyToken, (req, res) => {
  res.json({ message: "Protected data", user: req.user });
});
```

---

## 🧱 Authentication Workflow

1. User signs up → Password hashed → Stored in DB
2. User logs in → Password compared with hashed password
3. If valid → Server generates JWT token
4. User sends token in headers for protected routes
5. Backend verifies token → Grants access

---

## 🛠️ Validation Example (express-validator)

```js
body("email").isEmail().withMessage("Invalid email format")
```

---

## 🧨 Error Handling

A centralized error handler automatically catches server issues.

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

---

## 👨‍💻 Author

**Abdul Korim** – MERN Stack Developer

---
## 📜 License & Copyright

This project is **open-source and free to use** under the **MIT License**.  

You can freely:
- ✅ View, modify, and use the source code  
- ✅ Distribute or include it in your own projects  
- ✅ Use it for personal or commercial purposes  

Just make sure to keep the original author credit:

**© 2025 Abdul Korim**

## For collaboration or inquiries, contact:  
📧 Email: abdulkorimwebdeveloper@gmail.com <br> 
👉 GitHub: [abdul-korim-web](https://github.com/abdul-korim-web) <br>
👉 Facebook: [abdul-korim-web](https://www.facebook.com/abdulkorimweb) <br>
👉 LinkedIn: [abdul-korim-web](https://www.linkedin.com/in/abdul-korim-web/) <br>


## ⭐ Show Your Support

If you like this project, please ⭐ the repository!

