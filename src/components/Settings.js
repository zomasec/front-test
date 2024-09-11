import React from 'react';
import styled from 'styled-components';

// Define color variables for better consistency
const colors = {
    background: '#f9f9f9', // Light background for better readability
    sectionBackground: '#ffffff', // White background for sections
    border: '#e0e0e0', // Light gray border for inputs and text areas
    labelColor: '#333', // Darker text color for labels
    accent: '#007bff', // Primary color for accents
    hover: '#0056b3' // Darker shade of the accent color for hover
};

// Container for settings page
const SettingsContainer = styled.div`
    padding: 20px;
    background-color: ${colors.background};
`;

// Section for each configuration block
const ConfigSection = styled.div`
    margin-bottom: 20px;
    padding: 20px;
    background-color: ${colors.sectionBackground};
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

// Title for each configuration block
const ConfigTitle = styled.h2`
    margin-bottom: 10px;
    color: ${colors.accent};
`;

// Label styling
const Label = styled.label`
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: ${colors.labelColor};
`;

// Input and text area styling
const Input = styled.input`
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid ${colors.border};
    border-radius: 4px;
    box-sizing: border-box;
    transition: border-color 0.2s;

    &:focus {
        border-color: ${colors.accent};
        outline: none;
    }
`;

const TextArea = styled.textarea`
    width: 100%;
    height: 200px;
    padding: 8px;
    border: 1px solid ${colors.border};
    border-radius: 4px;
    font-family: monospace;
    transition: border-color 0.2s;

    &:focus {
        border-color: ${colors.accent};
        outline: none;
    }
`;

// Settings component
const Settings = () => {
    return (
        <SettingsContainer>
            <h1>Settings</h1>
            <p>Configure your application settings here.</p>

            {/* Configuration Section */}
            <ConfigSection>
                <ConfigTitle>Config</ConfigTitle>
                <Label htmlFor="concurrency">Concurrency</Label>
                <Input type="number" id="concurrency" name="concurrency" min="1" />

                <Label htmlFor="deepScan">DeepScan</Label>
                <Input type="checkbox" id="deepScan" name="deepScan" />
            </ConfigSection>

            {/* Subfinder Configuration Section */}
            <ConfigSection>
                <ConfigTitle>Subfinder Config</ConfigTitle>
                <TextArea id="subfinderConfig" name="subfinderConfig" placeholder="Enter YAML code here..." />
            </ConfigSection>
        </SettingsContainer>
    );
};

export default Settings;
