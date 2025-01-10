# 📜 Accordion

This project demonstrates how to build an **accordion component** using **HTML**, **CSS**, and **JavaScript**. The accordion features multiple sections, allowing only one section to be expanded at a time. Clicking on a section header toggles its visibility, while collapsing any previously opened section.

---

## 🎯 Project Overview

This accordion offers:
- **Expandable Sections**: Only one section is visible at a time.
- **Smooth Transitions**: Content expands and collapses with animation.
- **Interactive Design**: Enhances user experience in FAQs or organized content.

---

## 🌟 Features

- **Collapsible Sections**: Only one section remains open for a clean UI.
- **Hover Effects**: Header background changes on hover.
- **Responsive Design**: Works seamlessly across different devices.
- **Smooth Animation**: Transition effect for content visibility.

---

## 📂 Project Structure

```
Accessible-Form-UI/
├── index.html      # Core HTML structure
├── styles.css      # CSS for styling
├── script.js       # Contains JavaScript for interactivity
└── README.md       # Documentation
```

---

## 🚀 How to Run

### Prerequisites

- A web browser to preview the UI.
- A code editor like VS Code for customization.

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/mhaseebaslam/frontend-projects-showcase/tree/main/projects/beginner-level/javascript/accordion.git
   ```
2. Navigate to the project folder:
   ```bash
   cd accordion
   ```
3. Open the `index.html` file in your browser to view the component.

---

## 🌐 Live Demo

Check out the live demo at [Accordion](https://mhaseebaslam.github.io/frontend-projects-showcase/projects/beginner-level/javascript/accordion/).

---

## 📄 Pages Overview

### HTML
- The accordion is wrapped in a `<div>` with the class `accordion`.
- Each section is represented by a `<div>` with the class `accordion-item`, containing:
  - A clickable `accordion-header` for the title.
  - A hidden `accordion-content` for the expandable content.

### CSS
- Defines the default styles for headers and content.
- Uses `max-height: 0` and `overflow: hidden` to hide content initially.
- Smooth animations are added using the `transition` property.

### JavaScript
- Adds `click` event listeners to all headers.
- Toggles the `active` class on the clicked header and its corresponding content.
- Collapses any previously opened section by removing the `active` class.

---

## 🔮 Future Improvements

- Add icons or arrows to indicate expanded/collapsed state.
- Enable keyboard navigation for improved accessibility.
- Support multiple open sections simultaneously.

---

## 📬 Feedback

If you have any suggestions or feedback, feel free to open an issue or submit a pull request. Contributions are welcome!

---

## 🛠️ Built With

This project was built by following the project [Accordion](https://roadmap.sh/projects/accordion) guidelines for frontend developers, focusing on CSS fundamentals and responsive design.

---

## 📄 License

This project is licensed under the **[MIT License](LICENSE)**. You are free to use, modify, and distribute this code as per the license.

---

Made with ❤️ by [Muhammad Haseeb](https://github.com/mhaseebaslam).
