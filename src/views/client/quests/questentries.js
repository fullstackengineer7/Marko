import info_icon from '../../../assets/img/info.svg';
import down_icon from '../../../assets/img/down.svg';

// import { Accordion, AccordionTab } from 'primereact/accordion';
import Accordion from '../../../components/client/quest-entries/accordion';
import { Button } from 'primereact/button';

const QuestEntries = () => {

	

	return (
		<>
		  <div className="admin-quest-container">
		  		<div className="quest-entries-horizontal">
					<div>
						<div className="quest-entries-title">
				  			<div><span className="admin-title">Templates</span><img src={info_icon} className="admin-icon"/></div>
				  		</div>
						<div className="accordion">
							<Accordion/>
						</div>
					</div>
			  		<div className="admin-entries-componentr">
			  			<div className="quest-entries-title">
				  			<div><span className="admin-title">Active</span><img src={info_icon} className="admin-icon"/></div>
				  			<p className="admin-comment">Clear all templates</p>
				  		</div>
				  		<div className="quest-entries-active-element">
				  			<p className="quest-entries-comment">You have no active tasks yet<br/>Please, pick the ones you need from the <br/>block on the left</p>
				  		</div>
			  		</div>
		  		</div>
		  		<div className="admin-align-right quest-entries-btn-group">
					<Button label="Back" className="p-button-outlined p-button-secondary admin-quest-back-btn" />
					<Button label="Next" className="p-button-primary admin-quest-next-btn" />
				</div>

		  </div>
		</>
	)
}

export default QuestEntries;