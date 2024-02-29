import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMoon,faSun} from '@fortawesome/free-solid-svg-icons'
import './styles/ThemePage.css'

export function ThemePage({funChangeThemePage, themePage}) {
    return(
        <>
        {themePage?
        <button className='changeTheme_btn-moon' onClick={funChangeThemePage}>
            <FontAwesomeIcon icon={faMoon} className='changeTheme_btn_icon'/>
        </button>
        :
        <button className='changeTheme_btn-sun' onClick={funChangeThemePage}>
            <FontAwesomeIcon icon={faSun} className='changeTheme_btn_icon'/>
        </button>
        }
        </>
    )
}