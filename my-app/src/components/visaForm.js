"use client";

import React,{ useState } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";   // ✔ Corrected
import { Button } from "primereact/button";
import { Card } from "primereact/card";


export default function VisaForm(){
    const[formData, setData] =useState({
        name:"",
        country:"",
        dob:null,
        email:"",
    });
    


const countries=[{
    name:"canada", code:"CA"},
    {name:"united states", code:"US"},
    {name:"australia", code:"AU"},
];

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("Form data submitted:",formData);
    alert("Form submitted successfully!");
};

return(
    <div className="form-container" style={{padding:"20px"}}>
        
        <Card title="visa Ballot Registration Form" className="p-4">
            <form onSubmit={handleSubmit} className="p-fluid">
                <div className="field">
                    <label htmlFor="name">Full Name</label>
                    <InputText
                        id="name"
                        value={formData.name}
                        onChange={(e)=> setData({...formData, name:e.target.value})}
                        placeholder="Enter your Name"
                        required
                    />
                    </div>

                    <div className="field">
                        <label htmlFor="country">Select Country</label>
                        <Dropdown
                            id="country"
                            value={formData.country}
                            options={countries}
                            onChange={(e)=> setData({...formData, country:e.value})}
                            optionLabel="name"
                            placeholder="choose a country"
                            required
                    />
                    </div>

                    <div className="field">
                        <label htmlFor="dob">Date of Birth</label>
                        <Calendar
                            id="dob"
                            value={formData.dob}        
                            onChange={(e)=> setData({...formData, dob:e.value})}
                            placeholder="Select your date of birth"
                            required
                        />
                    </div>  
                    <div className="field">
                        <label htmlFor="email">Email Address</label>
                        <InputText
                            id="email"
                            type="email"
                            value={formData.email}              
                            onChange={(e)=> setData({...formData, email:e.target.value})}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <Button type="submit" label="Submit" className="mt-2"/>
            </form> 
        </Card>
    </div>
);
}