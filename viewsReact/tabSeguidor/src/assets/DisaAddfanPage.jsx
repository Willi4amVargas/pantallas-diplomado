import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { AñadirFanPage } from './AñadirFanPage';
import './styles/DisaAddfanPage.css'
export function DisaAddfanPage ({addFanPageBo,editNomFanPage,appearAddFanPage, themePage}) {
    var addFanPageBtnIcon = themePage?'addFanPage-btn-apear-icon_dark':'addFanPage-btn-apear-icon_ligh'
    
    return(
        <>
      {appearAddFanPage?
        <AñadirFanPage 
          addFanPageBo={addFanPageBo} 
          editNomFanPage={editNomFanPage}
          themePage={themePage}
        />
      :
      <button onClick={addFanPageBo} className='addFanPage-btn-appear'>
        <FontAwesomeIcon icon={faArrowRight} className={addFanPageBtnIcon}/>
      </button>
      }
      </>
    )
}