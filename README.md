# ✨ Genstory — Interactive Storytelling Platform

 Genstory is a full-stack web application that generates interactive, dynamic stories based on user inputs and story preferences. It combines AI-driven story generation workflows with a modern, responsive interface to deliver an engaging storytelling experience.

---

## 🚀 Live Demo

👉 [Genstory](https://gen-story-theta.vercel.app/)

---

## 📌 Features

* 🎭 **Personalized Story Generation** — Generate stories based on user-provided prompts and themes.
* 🧠 **AI-Driven Storytelling** — Create dynamic narratives through prompt-based story-generation workflows.
* ⚡ **Dynamic Story Rendering** — Display generated story content in the user interface.
* 🎨 **Responsive User Interface** — Enjoy a clean, modern interface designed for different screen sizes.
* 🔗 **Frontend–Backend Integration** — Connect the React frontend with backend services through REST APIs.
* 📱 **Cross-Device Experience** — Access the application across desktop and mobile devices.

---

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3

### Backend

* Python
* FastAPI

### Integration

* REST APIs
* Prompt-based AI logic

---

## 🏗️ System Architecture

The application follows a frontend–backend architecture:

**User Input → React Frontend → FastAPI Backend → Story Generation Logic → Generated Story → UI Rendering**

1. The user enters a story prompt or selects available preferences.
2. The React frontend sends the input to the FastAPI backend.
3. The backend processes the request through the story-generation workflow.
4. The generated content is returned to the frontend.
5. The interface renders the resulting story dynamically.

---

## 📂 Project Structure

```text
TaleForge-AI/
├── backend/
│   ├── core/
│   │   ├── config.py
│   │   ├── models.py
│   │   ├── prompts.py
│   │   └── story_generator.py
│   ├── db/
│   │   └── database.py
│   ├── models/
│   │   ├── job.py
│   │   └── story.py
│   ├── routers/
│   │   ├── job.py
│   │   └── story.py
│   ├── schemas/
│   │   ├── job.py
│   │   └── story.py
│   ├── main.py
│   ├── requirements.txt
│   └── .env.example
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── LoadingStatus.jsx
│   │   │   ├── StoryGame.jsx
│   │   │   ├── StoryGenerator.jsx
│   │   │   ├── StoryLoader.jsx
│   │   │   └── ThemeInput.jsx
│   │   ├── effects/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── .env.example
└── README.md
```

---

## 💡 How It Works

The story-generation workflow connects user input, backend processing, and frontend rendering to create a smooth interactive experience.

* **Input:** Users provide a story prompt or select preferences.
* **Processing:** The frontend sends a request to the FastAPI backend.
* **Generation:** The backend processes the request using the story-generation logic.
* **Rendering:** The generated story is returned and displayed in the interface.

---

## 🎯 Project Objective

The goal of Genstory is to demonstrate how a modern web frontend can integrate with Python-based backend services to deliver an interactive, AI-driven storytelling experience.

---

## 🔮 Future Improvements

Potential enhancements include:

* Expanding story personalization options.
* Adding more interactive storytelling choices.
* Improving story-generation workflows.
* Enhancing error handling and loading feedback.

---

## 📄 License

License and attribution details should reflect the permissions and licensing terms applicable to the project's original code and contributions.
