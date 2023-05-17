import { useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { Dropdown } from 'primereact/dropdown';
import 'primeicons/primeicons.css';
import { useDispatch } from 'react-redux';

const ClientNavbar = () => {
    const [address, setAddress] = useState("");
    const addresses = [
        {name: '0xA3Eb7Aa1624458d44A3df5Dea0b7F2599d8B6bd1', code: 'NY'},
        {name: '0xB3Eb7Aa1624458d44A3df5Dea0b7F2599d8B6bd1', code: 'RM'},
        {name: '0xC3Eb7Aa1624458d44A3df5Dea0b7F2599d8B6bd1', code: 'LDN'},
        {name: '0xD3Eb7Aa1624458d44A3df5Dea0b7F2599d8B6bd1', code: 'IST'},
        {name: '0xE3Eb7Aa1624458d44A3df5Dea0b7F2599d8B6bd1', code: 'PRS'}
    ];
    const dispatch = useDispatch();

    const showSidebar = () => {
        dispatch({type: 'set', sidebarShow: true});
    }    

    return(
		<>
			<div className="admin-navbar">
                <div>
                    <i className="pi pi-bars disp-sidebar-icon" style={{'fontSize': '2em'}} onClick={showSidebar}></i>
                </div>
				<div className='navbar-row'>
                    <div className="admin-navbar-titles">
                        <a href="#">Explore</a>
                        <a href="#">Community</a>
                        <a href="#">Solutions</a>
                    </div>
                    <div className='admin-navbar-btns'>
                        <div className='admin-navbar-btn-ether'></div>                    
                        <Dropdown className='admin-navbar-wallet-address' optionLabel="name"  options={ addresses } value={address} onChange={(e) => setAddress(e.value)}/>
                        <div className='admin-navbar-btn-ring'></div> 
                    </div>
                </div>
			</div>
		</>	
	)

    // const navlist = [
    //     { label: 'Home', icon: 'pi pi-fw pi-home'},
    //     { label: 'About', icon: 'pi pi-fw pi-file' },
    //     { label: 'Contact', icon: 'pi pi-fw pi-phone'}
    // ];

    // return (
    //     <div>
    //         <header>
    //             <nav>
    //                 <ul>
    //                     <Menubar
    //                          model={navlist}
    //                     />
    //                 </ul>
    //             </nav>
    //         </header>
    //     </div>
    // )
}

export default ClientNavbar;