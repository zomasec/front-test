import React from 'react';
import styled from 'styled-components';

const SettingsContainer = styled.div`
    padding: 20px;
`;

const ConfigSection = styled.div`
    margin-bottom: 20px;
    padding: 20px;
    background-color: #f8f9fa;  // Light grey background for section
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ConfigTitle = styled.h2`
    margin-bottom: 10px;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  box-sizing: border-box;  // Makes padding included in the width
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;  // Larger text area for YAML configurations
  padding: 8px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-family: monospace;  // Monospace font to better format YAML or code
`;

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
