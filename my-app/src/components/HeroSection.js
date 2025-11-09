"use client";
import React from "react";
import {Button} from "primereact/button";
import "./h.css";

export default function HeroSection(){
    return(
    <section className="hero-container">
        <div className="overlay"></div>
        
        
        <div className="hero-content">
            <Button
                icon="pi-pi-bell"
                label="Never Miss a Visa Lottery Again"
                className="p-button-rounded p-button-text hero-button"
            />
        <h1 className="hero-title"> Track Global Visa Ballots & Lotteries </h1>
        
        <p className="hero-subtitle">
           Stay updated on visa lottery programs worldwide. Get instant WhatsApp
          notifications when applications open for your preferred countries. 
        </p>

        <div className="hero-icons">
            <span><i className="pi-pi-sync"></i> Real-time Status Updates</span>
            <span><i className="pi pi-whatsapp"></i> WhatsApp Notifications</span>
            <span><i className="pi pi-globe"></i> Multiple Countries</span>
            
            </div> 
        </div>
    </section>
    )
    
}


