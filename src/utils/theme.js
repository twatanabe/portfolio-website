import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('light')

  useEffect(() => {

    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setThemeName(darkMediaQuery.matches ? 'dark' : 'light')
    darkMediaQuery.addEventListener('change', (e) => {
      setThemeName(e.matches ? 'dark' : 'light')
    });
  }, [])

  const toggleTheme = () => {
    const name = themeName === 'dark' ? 'light' : 'dark'
    localStorage.setItem('themeName', name)
    setThemeName(name)
    if (themeName == 'light')
    {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }