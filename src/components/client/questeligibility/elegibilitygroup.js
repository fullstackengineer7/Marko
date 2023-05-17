import active_icon from '../../../assets/img/active_left.svg';
import inactive_icon from '../../../assets/img/inactive_right.svg';

const ElegibilityGroup = ({content, active, onToggle}) => {
    
    const {title, comment} = content;

    return (
        <>
            <div className={`quest-eligibility-group ${ active ? 'active' : '' }`} onClick={onToggle} >
                <div className='quest-elegibility-title-box'>				  				
                    <input type="checkbox" className="quest-checkbox" onClick={onToggle} checked={active} onChange={() => console.log(title)}/>
                    <div className='quest-eligibility-title'>
                        <p className="title">{ title }</p>
                        <p className="comment">{ comment }</p>
                    </div>
                </div>
                   {  
                     active ? <img src={active_icon} /> : <img src={inactive_icon}/>
                   } 
            </div>	
        </>
    )
}
export default ElegibilityGroup;