import { useContext, React } from 'react'
import 'styles/SiteHeader.css'
import { ThemeContext } from 'utils/theme'
import Brightness2Icon from '@mui/icons-material/Brightness2';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const SiteHeader = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)

  return (
    <div className="header-container">
      <div className="header-content">
        <div className="logo">
          <a href="https://takumiwatanabe.me" className="link">
            TW.
          </a>
        </div>

        <button
          type="button"
          onClick={toggleTheme}
          className="theme-mode"
          aria-label="toggle theme"
        >
          {themeName === "dark" ? <WbSunnyIcon /> : <Brightness2Icon />}
        </button>
      </div>
    </div>
  );
}

SiteHeader.propTypes = {
}

export default SiteHeader
