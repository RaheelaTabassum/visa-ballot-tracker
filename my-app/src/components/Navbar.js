"use client";

import React from "react";
import {Menubar} from "primereact/menubar";

export default function Navbar(){
    const items=[
        {
            label: " Countries",
            icon:"pi-pi-globe",
            url :'/countries'
        },
        {
            label: " Subscribe",
            url:"/subscribe"
        }
    ];

    const start=<h3 style={{marginleft:"10px"}}> 🌐 Visa Ballot Tracker</h3>;
    const end =<span style={{ marginRight:"15px"}}>👩‍💻 Raheela</span>;

    return <Menubar model={items} start={start} end={end} />;
}
