import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMoon} from '@fortawesome/free-solid-svg-icons'
export function ThemePage() {
    return(
        <button className='changeTheme-btn'>
            <FontAwesomeIcon icon={faMoon} className='changeTheme-btn-icon'/>
        </button>
    )
}