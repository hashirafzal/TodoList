## Todo List App using React + TypeScript + Tailwind

This repository contains a practice project developed with React.js, showcasing the implementation of a simple Todo List application. The project utilizes React components, hooks, and local storage to create an interactive and user-friendly todo list.

### How to Use:

1. **Clone the Repository:**
   ```
   git clone https://github.com/hashirafzal/TodoList.git
   ```

2. **Install Dependencies:**
   ```
   cd TodoList
   npm install
   ```

3. **Run the Application:**
   ```
   npm start
   ```

4. **View the Todo List:**
   - Once the application is running, open your web browser and navigate to `http://localhost:5173/`.
   - You will see the Todo List interface where you can add, edit, and delete tasks.

### About the Project:

This Todo List application serves as a practice project for learning React.js concepts and building interactive web applications. Key features and technologies utilized in this project include:

- **React Components:** The application is built using modular React components, enabling efficient code organization and reusability.
- **React Hooks:** Hooks such as `useState` and `useEffect` are utilized to manage state and perform side effects within functional components.
- **Local Storage:** The application utilizes browser local storage to persist todo list data between sessions, ensuring that tasks remain saved even after the user refreshes the page or closes the browser.
- **Responsive Design:** The Todo List app is designed to be responsive, ensuring a seamless user experience across various devices and screen sizes.

This project serves as a practical demonstration of React.js fundamentals and provides a foundation for further exploration and development of more complex web applications. Feel free to explore the code, experiment with different features, and customize the Todo List app according to your preferences.

Happy coding! 🚀


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
