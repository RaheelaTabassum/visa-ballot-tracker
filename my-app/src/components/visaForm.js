"use client";
import dynamic from "next/dynamic";


import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

export default function VisaForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone:"",
        dob: null,
        country: "",

            
    });

    const countries = [
        { name: "Canada", code: "CA" },
        { name: "United States", code: "US" },
        { name: "Australia", code: "AU" },
        { name: "New Zealand", code: "NZ" },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/visas", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await res.json();

            if (result.success) {
                alert("Visa info saved successfully!");
            } else {
                alert("Error: " + result.error);
            }
        } catch (err) {
            alert("An error occurred while submitting the form.");
            console.error(err);
        }
    };

    return (
        <div className="form-container" style={{ padding: "20px" }}>
            <Card title="Visa Ballot Registration Form" className="p-4">
                <form onSubmit={handleSubmit} className="p-fluid">

                    <div className="field">
                        <label>Full Name</label>
                        <InputText
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                            }
                            required
                        />
                    </div>
                   
                   <div className="field">
                        <label>Email Address</label>
                        <InputText
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                            }
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                     <div className="field">
                        <label>phone Number</label>
                        <InputText
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                                setFormData({ ...formData, phone: e.target.value })
                            }   
                            placeholder="Enter your phone number"
                            required
                        />

                    </div>

                    <div className="field">
                        <label>Date of Birth</label>
                        <Calendar
                            value={formData.dob}
                            onChange={(e) =>
                                setFormData({ ...formData, dob: e.value })
                            }
                            dateFormat="yy-mm-dd"
                            required
                        />
                    </div>

                    <div className="field">
                        <label>Select Country</label>
                        <Dropdown
                            value={formData.country}
                            options={countries}
                            optionLabel="name"
                            onChange={(e) =>
                                setFormData({ ...formData, country: e.value })
                            }
                            placeholder="Choose a country"
                            required
                        />
                    </div>

                    <Button type="submit" label="Submit" className="mt-2" />
                </form>
            </Card>
        </div>
    );
}
