import { useState } from 'react';
import AccordionItem from './accordionitem';

const Accordion = () => {

    const [clicked , setClicked] = useState("0");
    const handleToggle = (index) => {
        if(clicked === index){
            return setClicked("0");
        }
        setClicked(index);
    }

    const accordionData = [
		{
		  title: 'Social',
		  comment: `The block for social interactions with your brand`
		},
		{
		  title: 'Educational',
		  comment: `The block will help make your service more clearly`
		},
		{
		  title: 'Governance',
		  comment: `The block to collect information from your users`
		},
		{
		  title: 'Technical',
		  comment: `The block focused on interaction with your on-chain service`
		}
    ];

    return (
        <>
            { accordionData.map((item, index) => (
                <AccordionItem key={index} content={item} onToggle={ () => handleToggle(index) }
                    active={ clicked === index } />
            ))}
        </>      
    );
};

export default Accordion;
