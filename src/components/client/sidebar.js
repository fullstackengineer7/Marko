import { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import logo from '../../assets/mark.svg';
import dashboard from '../../assets/img/buttons/dashboard.svg';
import quests from '../../assets/img/buttons/quests.svg';
import journeys from '../../assets/img/buttons/journeys.svg';
import settings from '../../assets/img/buttons/settings.svg';
import analytics from '../../assets/img/buttons/analytics.svg';


const ClientSidebar = ({visible}) => {

    const [visibleLeft, setVisibleLeft] = useState(true);
    let location = useLocation();

	//sidebar hide and show
	const dispatch = useDispatch();
	const sidebarShow = useSelector((state) => state.sidebarShow);
	
	let trans = { transform: null };
	if(sidebarShow){
		console.log("sidebarShow => ", sidebarShow);
		trans = { transform: 'translateX(100%) !important' }
		dispatch({ type: 'set', sidebarShow: false })
	}
	
    return (
        <>
			<div className="admin-sidebar" style={trans}>
				<div className="admin-logo">
					<img src={logo} />
				</div>
				<Link to="/client/dashboard" className={`admin-sidebar-btn ${location.pathname === '/client/dashboard' ? 'active' : ''}` }>
					<img src={dashboard} className="admin-sidebar-btn-ele"/>
					<span className="admin-sidebar-btn-ele">Dashboard</span>
				</Link>
				<Link to="/client/quests" className={`admin-sidebar-btn ${location.pathname === '/client/quests' ? 'active' : ''}` }>
					<img src={quests} className="admin-sidebar-btn-ele"/>
					<span className="admin-sidebar-btn-ele">Quests</span>
				</Link>
				<Link to="/client/analytics" className={`admin-sidebar-btn ${location.pathname === '/client/analytics' ? 'active' : ''}` }>
					<img src={analytics} className="admin-sidebar-btn-ele"/>
					<span className="admin-sidebar-btn-ele">Analytics</span>
				</Link>
				<Link to="/client/journeys" className={`admin-sidebar-btn ${location.pathname === '/client/journeys' ? 'active' : ''}` }>
					<img src={journeys} className="admin-sidebar-btn-ele"/>
					<span className="admin-sidebar-btn-ele">Journeys</span>
				</Link>
				<Link to="/client/settings" className={`admin-sidebar-btn ${location.pathname === '/client/settings' ? 'active' : ''}` }>
					<img src={settings} className="admin-sidebar-btn-ele"/>
					<span className="admin-sidebar-btn-ele">Settings</span>
				</Link>

			</div>
		</>	
        // <div>
        //     {/* <Sidebar visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
        //     </Sidebar> */}
        // </div>
    )
}

export default ClientSidebar;