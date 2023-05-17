import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import Info_Icon from '../../../assets/img/info.svg';

const Specific = () => {
    return (
        <Card class="elegibility-card elegibility-card-specific">
            <p className='title'>Role</p>
            <div className="field">
                <div className='label-row'>
                    <label htmlFor="title1" className="block">Role ID<img src={Info_Icon} className='info-icon'/></label>
                </div>
                    <InputText id="title1" aria-describedby="username1-help" className="block"/>
            </div>
            <div className="field">
                <div className='label-row'>
                    <label htmlFor="title2" className="block">Discord ID<img src={Info_Icon} className='info-icon'/></label>
                </div>
                    <InputText id="title2" aria-describedby="username1-help" className="block"/>
            </div>  
            <a href='#' className='add_more'>Add more</a>
        </Card>
    )
}

export default Specific;