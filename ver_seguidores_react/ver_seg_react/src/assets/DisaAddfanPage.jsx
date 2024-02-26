import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { AñadirFanPage } from './AñadirFanPage';
export function DisaAddfanPage ({addFanPageBo,editNomFanPage,appearAddFanPage}) {
    return(
        <>
      {appearAddFanPage?
        <AñadirFanPage 
          addFanPageBo={addFanPageBo} 
          editNomFanPage={editNomFanPage}
        />
      :
      <button onClick={addFanPageBo} className='addFanPage-btn-appear'>
        <FontAwesomeIcon icon={faArrowRight} className='addFanPage-btn-apear-icon'/>
      </button>
      }
      </>
    )
}