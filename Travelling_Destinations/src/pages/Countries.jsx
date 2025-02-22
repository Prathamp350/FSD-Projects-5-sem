// src/pages/Countries.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/countries.css';

const externalLinks = {
    USA: "https://travel.usnews.com/rankings/best-usa-vacations/",
    India: "https://www.travelandleisure.com/best-places-to-visit-in-india-8550824",
    Australia: "https://www.australia.com/en/places.html",
    Canada: "https://travel.usnews.com/rankings/best-canada-vacations/",
    UK: "https://www.planetware.com/england/best-places-to-visit-in-the-uk-eng-1-2.htm"
};

const Countries = () => {
    const [selectedCountry, setSelectedCountry] = useState("");
    const navigate = useNavigate();

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedCountry) {
            // Check if there's an external link for the selected country
            const link = externalLinks[selectedCountry];
            if (link) {
                // Open the external link in a new tab
                window.open(link, '_blank');
            } else {
                // Navigate to Destination page with the selected country
                navigate(`/destination/${selectedCountry}`);
            }
        }
    };

    return (
        <div className="wrapper">
            <h1>Select a Country</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-box">
                    <select onChange={handleCountryChange} value={selectedCountry} required>
                        <option value="">Select a Country</option>
                        <option value="USA">USA</option>
                        <option value="India">India</option>
                        <option value="Australia">Australia</option>
                        <option value="Canada">Canada</option>
                        <option value="UK">UK</option>
                    </select>
                </div>
                <button type="submit" className="btn">Next</button>
            </form>
        </div>
    );
};

export default Countries;
