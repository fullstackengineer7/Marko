import React, { useState } from 'react';
import Active_Icon from '../../../assets/img/buttons/acc_active.svg';
import Inactive_Icon from '../../../assets/img/buttons/acc_inactive.svg';
import { Button } from 'primereact/button';
import AccordionItemContent from './accordion-item-content';

import Discord_Icon from '../../../assets/img/discord.svg';
import Twitter_Icon from '../../../assets/img/twitter.svg';
import Youtube_Icon from '../../../assets/img/youtube.svg';
import Medium_Icon from '../../../assets/img/medium.svg';
import Telegram_Icon from '../../../assets/img/telegram.svg';

const AccordionItem = ({content, onToggle, active}) => {

    // const [isActive, setIsActive] = useState(false);
    console.log(content)
    const {title, comment} = content;

    const tle_discord = [
        'Join a discord server', 'Verify role in Discord server', 'Check for Discord name that includes specified characters'
    ];
    const tle_twitter = [
        'Join a Twitter server', 'Verify role in Twitter server', 'Check for Twitter name that includes specified characters'
    ];
    const tle_youtube = [
        'Join a youtube server', 'Verify role in youtube server', 'Check for youtube name that includes specified characters'
    ];
    const tle_medium = [
        'Join a medium server', 'Verify role in medium server', 'Check for medium name that includes specified characters'
    ];
    const tle_telegram = [
        'Join a telegram server', 'Verify role in telegram server', 'Check for telegram name that includes specified characters'
    ];

    const [social, setSocial] = useState("discord");
    const handleShowDiscord = () => setSocial("discord");
    const handleShowTwitter = () => setSocial("twitter");
    const handleShowYoutube = () => setSocial("youtube");
    const handleShowMedium = () => setSocial("medium");
    const handleShowTelegram = () => setSocial("telegram");

    const showAccordionContent = () => {
        switch(social){
            case "discord": return <AccordionItemContent titles={tle_discord}/>
            case "twitter": return <AccordionItemContent titles={tle_twitter}/>
            case "youtube": return <AccordionItemContent titles={tle_youtube}/>
            case "medium": return <AccordionItemContent titles={tle_medium}/>
            case "telegram": return <AccordionItemContent titles={tle_telegram}/>
            default: break;
        }
    }

    return(
        <div className='accordion-item'>
            <div className='accordion-title' onClick={ onToggle }>
                <div className='title-part'>
                    <p className='title'>{ title }</p>
                    <p className='comment'>{ comment }</p>
                </div>
                <div>
                    {active ? <img src={Inactive_Icon}/> : <img src={Active_Icon}/> }
                </div>
            </div>
            {active && 
                <div className='accordion-content'>
                    <div className='quest_entries_social_btns_group'>
                        <Button className="p-button-outlined p-button-secondary quest_entries_social_btn" onClick={handleShowDiscord}>
                            <img src={ Discord_Icon }/>
                            <span className="px-3">Discord</span>
                        </Button>
                        <Button className="p-button-outlined p-button-secondary quest_entries_social_btn" onClick={handleShowTwitter}>
                            <img src={ Twitter_Icon }/>
                            <span className="px-3">Twitter</span>
                        </Button>
                        <Button className="p-button-outlined p-button-secondary quest_entries_social_btn" onClick={handleShowYoutube}>
                            <img src={ Youtube_Icon }/>
                            <span className="px-3">Youtube</span>
                        </Button>
                        <Button className="p-button-outlined p-button-secondary quest_entries_social_btn" onClick={handleShowMedium}>
                            <img src={ Medium_Icon }/>
                            <span className="px-3">Medium</span>
                        </Button>
                        <Button className="p-button-outlined p-button-secondary quest_entries_social_btn" onClick={handleShowTelegram}>
                            <img src={ Telegram_Icon }/>
                            <span className="px-3">Telegram</span>
                        </Button>
                    </div>
                    {   
                        showAccordionContent()
                    }
                </div>
            }
        </div>
    );
};

export default AccordionItem;