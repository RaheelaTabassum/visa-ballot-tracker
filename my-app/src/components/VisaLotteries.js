"use client";
import React from "react";
import {Card} from "primereact/card"
import "primereact/resources/themes/lara-light-blue/theme.css"; // ✅ PrimeReact theme
import "primereact/resources/primereact.min.css";
import "./h.css"

export default function VisaLotteries(){
    return(
        <section className="visa-section">
        <h2 className="visa-heading"> Available Visa Lotteries</h2>
        <p className="visa-subtitle">
        Track the status of visa ballot and lottery programs from countries
        around the world. Applications open and close at different times
        throughout the year.    
        </p>

        <div className="visa-cards">
        {/* Canada Card */} 
        <div className="visa-card opened ">
            <Card>
            <h3> CA CANADA</h3>
            <span className="status">open</span>
            {/* <p className="status"> Status: <span> Open</span></p> */}
            <h4>Express Entry </h4>
            <p>
                Express Entry manages applications for permanent residence under
                these federal economic immigration programs: Federal Skilled Worker
                Program, Federal Skilled Trades Program, and Canadian Experience
                Class.
             </p>
             <a 
                href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html"
                target="_blank"
                rel="noopener noreferrer"
                className="visa-btn"
             >
             Visit Official Website
             </a>

             </Card>

          </div>

          <div className="visa-card closed">
            <Card>
            <h3> 🇺🇸 United States</h3>
            <p className="status"> Status: <span> Cloased </span></p>
            <h4> DV Lottery (Diversity Visa)</h4>
            <p>
                The Diversity Immigrant Visa program makes up to 50,000 immigrant
                visas available annually to persons from countries with historically
                low rates of immigration to the United States.
            </p>

            <a 
                    href="https://dvprogram.state.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="visa-btn"
            >
                Visit Official Website
            </a>  
            </Card>        
          </div>

          <div className="visa-card closed">
            <Card>
                <h3>Australia</h3>
                <p className="status">Status: <span>Open</span></p>
                <h4>Work and Holiday (Subclass 462) — Visa Ballot</h4>
                <p>
                    Australia runs a pre-application ballot system for cdertain countries (like India,china,and vietnam) under the <b> Work and Holiday (subclass 462)</b>
                    visa program. Applicantsmust first register in the ballot for a chance 
                    to apply for the visa, which allows young people to work and travel in Australia 
                    for up to 12 months.
                </p>
                <a 
                    href="https://immi.homeaffairs.gov.au/what-we-do/whm-program/latest-news/new-work-and-holiday-subclass-462-visa-pre-application-process"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="visa-btn"
                >
                    Visit Official Website
                </a>

            </Card>
          </div>

            <div className="visa-card open">
            <Card>
            <h3> 🇳🇿 New Zealand</h3>
            <p className="status">Status: <span>Open</span></p>
            <h4>Pacific Access Category (PAC) & Samoan Quota Visa Ballots</h4>
            <p>
                New Zealand runs annual <b>visa ballots</b> for citizens of Samoa, Tonga, Fiji, 
                Tuvalu, and Kiribati under the <b>Pacific Access Category (PAC)</b> 
                and <b>Samoan Quota</b> programs.  
                Successful registrants are randomly selected and invited to apply 
                for residence in New Zealand. These programs strengthen Pacific 
                partnerships and provide long-term migration pathways.
            </p>

            <a 
                href="https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/about-visa/pacific-access-category-resident-visa"
                target="_blank"
                rel="noopener noreferrer"
                className="visa-btn"
            >
                Visit Official Website
            </a>
            </Card>
            </div>

        







        </div>
               
        </section>
    )

}