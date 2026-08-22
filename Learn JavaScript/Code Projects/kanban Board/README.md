# 📋 Kanban Board

## What is this?

A simple **task manager** where you can:
- 📝 Add new tasks
- 🎮 Drag tasks between columns
- 🎨 Enjoy a clean and beautiful design

In simple words: **Digital sticky notes!**

---

## 📁 File Overview

| File | Description |
|------|-------------|
| **index.html** | The main structure of the page (3 columns) |
| **style.css** | Handles the colors and design |
| **index.js** | Connects all the functionality |
| **taskManager.js** | Manages adding new tasks |
| **drag-and-drop.js** | Enables drag-and-drop functionality |

---

## ⚙️ How It Works

### 1️⃣ **Add a Task**
```
Click the "Add Task" button → Type a name → Press Enter ✅
```

### 2️⃣ **Move a Task**
```
Click and drag → Drop into another column → Done! 🎯
```

---

## 🔍 Key Code

**Creating a task:**
```javascript
task.setAttribute("draggable", true);
```

**Moving a task:**
```javascript
closestDiv.appendChild(dragDiv);
```

---

## 🚀 Getting Started

1. Open `index.html` in your browser
2. Click "Add Task"
3. Type a task name
4. Drag it to another column
5. Done! 🎉

---

## 📚 What You Learn

✅ How to structure a webpage with HTML  
✅ How to style it with CSS  
✅ How to add interactivity with JavaScript  
✅ How drag-and-drop works  
✅ How to manipulate the DOM  

**Enjoy Coding!** 💻
