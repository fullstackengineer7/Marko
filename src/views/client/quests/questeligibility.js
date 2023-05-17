
import ElegibilityGroup from '../../../components/client/questeligibility/elegibilitygroup';
import NFT from '../../../components/client/questeligibility/nft';
import Tokens from '../../../components/client/questeligibility/tokens';
import Specific from '../../../components/client/questeligibility/specific';
import { useState } from 'react';
import { Button } from 'primereact/button';

const QuestEligibility = () => {
	
	const [checked, setChecked] = useState("-1");
	const first = { title: 'All users', comment:'All participants can pass this quest'};
	const items = [
		{ title: 'NFTs holder', comment:'Users with a certain NFT can participate'},
		{ title: 'Tokens holder', comment:'Users with a certain token can participate'},
		{ title: 'Specific role', comment:'Your community members with a specific role in discord can take a part'}
	]
	const handleToggle = (index) => {
		if(checked == index){
			return setChecked("-1");
		}
		console.log("checked index = ", checked);
		setChecked(index);
	}

	return (
		<div className="">
	  		<div className="flex flex-row justify-content-between gap-3 admin-quest-container quest-eligibility-container">
		  		<div className="quest-left-containter">
		  			<div><span className="quest-eligibility-title">Select what access requirement to pass this quest</span></div>	
					<ElegibilityGroup  content={first} active={null} onToggle={ () => console.log("all users")}/>					
					{
						items.map((item, index) => (
							<ElegibilityGroup key={index} content={item} active={checked === index} onToggle={() => handleToggle(index)}/>
						))
					}
		  		
					<div className="quest-eligibility-group">					
							<div className='quest-eligibility-title-b'>
								<p className="title">Amount of karma</p>
								<p className="comment">Community members with a certain Karma can take a part</p>
							</div>
		  			</div>	
					<div className="quest-eligibility-group">					
							<div className='quest-eligibility-title-b'>
								<p className="title">Old users</p>
								<p className="comment">Users with old wallets and discord can take part in this quest</p>
							</div>
		  			</div>	
					<div className="quest-eligibility-group">					
							<div className='quest-eligibility-title-b'>
								<p className="title">With user experience</p>
								<p className="comment">Users who have at least 1 interaction who your smart contract</p>
							</div>
		  			</div>	
					<div className="quest-eligibility-group">					
							<div className='quest-eligibility-title-b'>
								<p className="title">New users</p>
								<p className="comment">Only users who have not passed any quests can pass the quest</p>
							</div>
		  			</div>	
		  		</div>
		  		<div className="quest-right-container">
						{ checked == -1 ? 
						  	<div className="quest-entries-active-element">
							<p className="quest-entries-comment">You have no active tasks yet<br/>Please, pick the ones you need from the <br/>block on the left</p>
							</div>					
						: <></>
						}	
					{ checked == 0 ? <NFT/> : <></>}
					{ checked == 1 ? <Tokens/>: <></>}
					{ checked == 2 ? <Specific/>:<></>}

		  		</div>
	  		</div>
	  		<div className="admin-align-right quest-entries-btn-group">
			    <Button label="Back" className="p-button-outlined p-button-secondary admin-quest-back-btn" />
				<Button label="Next" className="p-button-primary admin-quest-next-btn" />
			</div>
		</div>
	)
}

export default QuestEligibility;