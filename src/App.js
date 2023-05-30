import React, { useState , useEffect} from "react";
import ClientLayout from "./layouts/client/clientlayout";

import Navbar  from "./components/client/nav";
import WebFont from 'webfontloader';

export default function App() {
    
    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Work Sans', 'Chilanka']
          }
        });
    }, []);

    return (
        <div className="App">
            <ClientLayout/>
        </div>
    )
}
        