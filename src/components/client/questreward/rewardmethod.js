import { Card } from 'primereact/card';

import Rand_Icon from '../../../assets/img/random.svg';
import Medal_Icon from '../../../assets/img/medal.svg';
import Equal_Icon from '../../../assets/img/equal.svg';

const RewardMethod = () => {
    return (
        <div className='quest-reward-card'>
            <p className='main-title'>1. Method of reward</p>
            <div className='flex align-items-center justify-content-between gap-2 formula'>   
                <div className='flex-grow-1 formula-element'>
                    <img src={Rand_Icon}/><span className='title'>Random winners</span>
                </div>
                <div className='flex-grow-1 formula-element'>
                    <img src={Medal_Icon}/><span className='title'>FCFS</span>
                </div>
                <div className='flex-grow-1 formula-element'>
                    <img src={Equal_Icon}/><span className='title'>Uniform Distribution</span>
                </div>
            </div>
            <div className='flex align-items-center justify-content-between gap-3 formula'>
                <div className='flex-grow-1 reward_btn'>Project decides</div>
                <div className='flex-grow-1 reward_btn'>Winners ladder</div>
            </div>
        </div>
    )
}

export default RewardMethod;