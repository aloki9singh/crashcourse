import React, { useState, createContext, useContext } from 'react';
import UserForm from './components/UserForm';

// Theme context
const ThemeContext = createContext();

// Themes
const themes = {
  light: {
    background: '#ffffff',
    text: '#000000',
  },
  dark: {
    background: '#333333',
    text: '#ffffff',
  },
};

function ThemeSwitcher() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
    </button>
  );
}

function Header() {
  const theme = useContext(ThemeContext);
  const style = {
    background: theme.background,
    color: theme.text,
    padding: '1rem',
    marginBottom: '1rem',
  };

  return <header style={style}>Header</header>;
}

function App() {
  return (
    <ThemeContext.Provider value={themes.light}>
      <div>
        <ThemeSwitcher />
        <Header />
        <UserForm />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
