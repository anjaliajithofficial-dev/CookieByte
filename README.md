# GreenOps & PhantomGrid

## 🌍 Problem Statement
India faces a growing challenge with **unoptimized, carbon-intensive compute**. As digital infrastructure expands, inefficient code and poorly timed background tasks lead to unnecessary energy consumption and a higher carbon footprint for developers and organizations alike.

## 💡 The Solution
[cite_start]GreenOps & PhantomGrid is an AI-powered prototype built to help developers optimize their digital environmental impact[cite: 6]. By combining code-level efficiency analysis with smart task prioritization, we aim to reduce the energy overhead of modern computing.

## 🚀 Core Features
* [cite_start]**GreenOps AI (Code Analyzer):** Analyzes submitted code snippets for energy efficiency[cite: 41]. It provides a "Green Score," identifies resource-heavy logic (like unoptimized loops), and suggests eco-friendly fixes.
* [cite_start]**PhantomGrid (Task Classifier):** Classifies development and system tasks as either "URGENT" or "DEFERRABLE"[cite: 56]. This allows non-critical, compute-heavy tasks to be scheduled during off-peak hours when greener energy is more available on the grid.

## 🛠️ Tech Stack
* [cite_start]**AI Engine:** Google Gemini API via Google AI Studio [cite: 50]
* [cite_start]**Frontend:** React hosted on Firebase [cite: 51, 52]
* [cite_start]**Backend:** FastAPI (Python) running in a Docker container [cite: 52]
* **Cloud Hosting:** Render (for the live backend environment)

## 📁 Project Structure
* [cite_start]`/frontend`: The React user interface where users input code and tasks[cite: 41].
* [cite_start]`/backend`: The FastAPI server that processes logic and communicates with the Gemini API[cite: 42].

## 📖 How to Use
1.  [cite_start]**Input:** Paste a code snippet or enter a system task into the provided forms[cite: 20].
2.  [cite_start]**AI Processing:** The backend communicates with Gemini to analyze efficiency or classify priority[cite: 21].
3.  [cite_start]**Output:** View the **Analysis Report**, which includes efficiency scores, specific issues, and actionable fixes[cite: 22].

---
*Built as a prototype for the Google Solution Challenge.*