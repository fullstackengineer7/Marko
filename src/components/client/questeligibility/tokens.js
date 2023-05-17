import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';

import Icon1 from '../../../assets/img/coin/1.svg';
import Icon2 from '../../../assets/img/coin/2.svg';
import Icon3 from '../../../assets/img/coin/3.svg';
import Icon4 from '../../../assets/img/coin/4.svg';
import Icon5 from '../../../assets/img/coin/5.svg';
import Icon6 from '../../../assets/img/coin/6.svg';
import Info_Icon from '../../../assets/img/info.svg';

const Tokens = () => {
    return (
        <Card class="elegibility-card elegibility-card-token">
            <p className='title'>Tokens</p>
            <div className='nft-btn-container'>
                <div class="nft-btn-row">
                    <div class="nft-btn"><img src={ Icon1 }></img></div>
                    <div class="nft-btn"><img src={ Icon2 }></img></div>
                    <div class="nft-btn"><img src={ Icon3 }></img></div>
                </div>
                <div class="nft-btn-row">
                    <div class="nft-btn"><img src={ Icon4 }></img></div>
                    <div class="nft-btn"><img src={ Icon5 }></img></div>
                    <div class="nft-btn"><img src={ Icon6 }></img></div>
                </div>
            </div>
            <div className="field">
                <div className='label-row'>
                    <label htmlFor="title1" className="block">Input title<img src={Info_Icon} className='info-icon'/></label>
                </div>
                    <InputText id="title1" aria-describedby="username1-help" className="block"/>
            </div>
            <div className="field">
                <div className='label-row'>
                    <label htmlFor="title2" className="block">Input title<img src={Info_Icon} className='info-icon'/></label>
                </div>
                    <InputText id="title2" aria-describedby="username1-help" className="block"/>
            </div>  
            <a href='#' className='add_more'>Add more</a>
        </Card>
    )
}

export default Tokens;