# Metric / Imperial Unit Converter

> A small frontend project built while learning and practicing **HTML, CSS, and JavaScript**, with a particular focus on creating layouts that scale dynamically across different screen sizes.

---

## About

This is a **mini solo project** built as part of my ongoing frontend learning journey.

The project is a simple Metric/Imperial unit converter that converts between:

* **Length** — Meters ↔ Feet
* **Volume** — Litres ↔ Gallons
* **Mass** — Kilograms ↔ Pounds

The converter itself is intentionally simple. The main focus of this project was learning how to make a frontend interface **scale naturally across different screen sizes** instead of relying heavily on fixed dimensions.

---

## What I Focused On

### Dynamic Scaling

The main concept I practiced in this project was **responsive and dynamic sizing**.

Instead of designing the interface around a single screen size, I experimented with CSS techniques that allow elements to scale based on the available viewport.

This included:

* `clamp()` for dynamically scaling font sizes and dimensions
* `vw` for viewport-based sizing
* Percentage-based widths and spacing
* `aspect-ratio` for maintaining proportions
* Flexible layouts using Flexbox
* Combining minimum, preferred, and maximum sizes

The goal was to make the interface remain usable and visually consistent across **different screen sizes and device types**.

---

## 🛠️ Technologies

| Technology     | Purpose                                |
| -------------- | -------------------------------------- |
| **HTML5**      | Page structure and content             |
| **CSS3**       | Layout, styling and responsive scaling |
| **JavaScript** | Conversion logic and user interaction  |

---

## ⚙️ Features

* User input for numerical values
* Metric → Imperial conversions
* Imperial → Metric conversions
* Length, volume and mass conversions
* Dynamic result updates
* Responsive interface
* Layout that scales across different viewport sizes

---

## 🧠 Key Learning

This project helped me understand that responsive design isn't simply about adding a few media queries.

A layout can instead be designed to **scale continuously** by combining relative units, flexible dimensions, and constraints such as:

```text
Minimum size
      ↓
Preferred dynamic size
      ↓
Maximum size
```

For example, `clamp()` allows an element to have a minimum and maximum size while still responding to the available viewport.

This gave me a better understanding of how to build interfaces that adapt rather than designing separate layouts for individual screen sizes.

---

## 📁 Project Structure

```text
UnitConverter-Project/
│
├── index.html
├── stylesheet.css
└── script.js
```

---

## 📌 Current Status

**Status: Completed mini learning project**

The project is intentionally small and serves primarily as a practical exercise in **frontend fundamentals and responsive design**.

As I continue learning frontend development, I will be applying these concepts to increasingly complex projects.

---

## 👤 About

This project is part of my ongoing journey of learning frontend development through **small, practical projects**.

Rather than focusing only on completing the functionality, I'm using each project to explore a particular concept and understand how it works in a real interface.

**Learn → Build → Experiment → Improve**
