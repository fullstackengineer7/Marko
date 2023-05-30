// import { Card } from 'primereact/card';
import ClientSidebar from '../../components/client/sidebar';
import ClientNavbar from '../../components/client/nav';
import '../../assets/css/client.css';
import '../../assets/css/client-responsive.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Dashboard from '../../views/client/dashboard';
import Quests from '../../views/client/quests/quests.js';
import Analytics from '../../views/client/analytics/analytics.js';
import Journeys  from '../../views/client/journeys/journeys.js';
import Settings from '../../views/client/settings/settings.js';


const ClientLayout = () => {	

	const dispatch = useDispatch();
	const sidebarShow = useSelector((state) => state.sidebarShow);
	// console.log("sidebarShow => ", sidebarShow);

	return(
		<>  
			<div>
			   <ClientNavbar/>		
		  	   <ClientSidebar  visible={ sidebarShow }/>
		  	   <div className='layout-content'>
			  	   <div  className='client-content-page'>
			  	   		<Routes>
                            <Route path="/" element={null} />
                            <Route path='/client/dashboard' element={<Dashboard/>}/>
                            <Route path='/client/quests' element={<Quests/>}/>
                            <Route path='/client/analytics' element={<Analytics/>}/>
                            <Route path='/client/journeys' element={<Journeys/>}/>
                            <Route path='/client/settings' element={<Settings/>}/>
                        </Routes>
			  	   </div>
		  	   </div>
			</div>
		</>
	)
}

export default ClientLayout;