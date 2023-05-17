import Icon1 from '../../../assets/img/coin/1.svg';
import Icon2 from '../../../assets/img/coin/2.svg';
import Icon3 from '../../../assets/img/coin/3.svg';
import Icon4 from '../../../assets/img/coin/4.svg';
import Icon5 from '../../../assets/img/coin/5.svg';
import Icon6 from '../../../assets/img/coin/6.svg';

const Network = () => {
    return (
        <div className='quest-reward-card'>
            <p className='main-title'>2. Network</p>
            <div className='flex align-items-center gap-2 formula'>   
                <div className='flex-grow-1 formula-element network'>
                    <img src={Icon1}/>
                </div>
                <div className='flex-grow-1 formula-element network'>
                    <img src={Icon2}/>
                </div>
                <div className='flex-grow-1 formula-element network'>
                    <img src={Icon3}/>
                </div>
                <div className='flex-grow-1 formula-element network'>
                    <img src={Icon4}/>
                </div>
                <div className='flex-grow-1 formula-element network'>
                    <img src={Icon5}/>
                </div>
                <div className='flex-grow-1 formula-element network'>
                    <img src={Icon6}/>
                </div>
            </div>
        </div>
    )
}

export default Network;