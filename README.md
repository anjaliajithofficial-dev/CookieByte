# GreenOps & PhantomGrid

## 🌍 Problem Statement
India faces a growing challenge with **unoptimized, carbon-intensive compute**. As digital infrastructure expands, inefficient code and poorly timed background tasks lead to unnecessary energy consumption and a higher carbon footprint for developers and organizations alike.

## 💡 The Solution
GreenOps & PhantomGrid is an AI-powered prototype built to help developers optimize their digital environmental impact. By combining code-level efficiency analysis with smart task prioritization, we aim to reduce the energy overhead of modern computing.

## 🚀 Core Features
* **GreenOps AI (Code Analyzer):** Analyzes submitted code snippets for energy efficiency. It provides a "Green Score," identifies resource-heavy logic (like unoptimized loops), and suggests eco-friendly fixes.
*  **PhantomGrid (Task Classifier):** Classifies development and system tasks as either "URGENT" or "DEFERRABLE". This allows non-critical, compute-heavy tasks to be scheduled during off-peak hours when greener energy is more available on the grid.

## 🛠️ Tech Stack
*  **AI Engine:** Google Gemini API via Google AI Studio 
*  **Frontend:** React hosted on Firebase
*  **Backend:** FastAPI (Python) running in a Docker container
* **Cloud Hosting:** Render (for the live backend environment)



## 📖 How to Use
1.   **Input:** Paste a code snippet or enter a system task into the provided forms.
2.   **AI Processing:** The backend communicates with Gemini to analyze efficiency or classify priority.
3.   **Output:** View the **Analysis Report**, which includes efficiency scores, specific issues, and actionable fixes.

## 📸 Project Screenshots

### GreenOps AI: Code Analysis in Action
![Analysis Screenshot](frontend/image1.png)


![Result Status](frontend/image2.png)
