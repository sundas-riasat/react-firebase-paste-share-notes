# 🚀 Instant Note Sharing App (React + Firebase)

A **lightweight** and **fast** note-sharing app built with **React** and **Firebase**. Users can write a message, generate a unique shareable link, and retrieve the message later. Perfect for quick note-sharing! 🔗

## 🌟 Features
- ✅ **Instant note creation** – Write a note and save it  
- ✅ **Unique shareable links** – Generate short URLs using `nanoid`  
- ✅ **Secure & lightweight** – Uses Firebase Firestore for data storage  
- ✅ **Minimal & fast** – Built with **React + Vite + Tailwind CSS**  
- ✅ **Deployable in minutes** – Host on **Vercel, Netlify, or Firebase Hosting**  

---

## 🛠️ Tech Stack
- **Frontend:** React (Vite) + Tailwind CSS
- **Backend:** Firebase Firestore (NoSQL Database)
- **Unique IDs:** nanoid (short URL generation)

---

## 🚀 Live Demo
🔗 **[Try it here](https://paste-and-share.web.app/)**

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/sundas-riasat/react-firebase-paste-share-notes
cd instant-note-sharing
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Firebase
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project and set up **Cloud Firestore**
3. Add your Firebase **config keys** inside a `.env` file:
   ```sh
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

### 4️⃣ Run the Development Server
```sh
npm run dev
```
Your app should be live at `http://localhost:5173/`

---

## 🎯 How It Works

1. **User writes a note**  
2. **App generates a unique short URL**  
3. **User shares the link**  
4. **Anyone with the link can retrieve the note**  

---

## 📸 Screenshots
| Create a Note  | Share a Note |
| ------------- | ------------- |
| ![Write Note](https://via.placeholder.com/400x200) | ![Share Link](https://via.placeholder.com/400x200) |

---

## 🌍 Deployment
You can easily deploy this app on **Vercel, Netlify, or Firebase Hosting**.

### **Deploy on Firebase**
```sh
firebase deploy
```

---

## 🤝 Contributing
Want to improve this project? Feel free to **fork the repo** and submit a PR! 🚀  

---

## 📜 License
This project is **open-source** and available under the **MIT License**.

---

💬 **Have questions or suggestions?** Open an issue or reach out!  
Don’t forget to ⭐ **star this repo** if you found it useful! 🚀
