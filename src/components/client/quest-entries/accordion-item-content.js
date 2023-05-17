import { useState } from 'react';
import Active_Icon from '../../../assets/img/active_check.svg';
import Inactive_Icon from '../../../assets/img/inactive_plus.svg';

const AccordionItemContent = ({titles}) => {
    const [active, setActive] = useState(false);
    return (
        <>  
            {
                titles.map((title, index) => (
                    <div className='accordion-content-item' key={index}>
                        <img src={Active_Icon}/><span className='title'> {title} </span> 
                    </div>
                ))
            }
        </>
    )
}

export default AccordionItemContent;