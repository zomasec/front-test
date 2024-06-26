import React, { useState } from 'react';
import styled from 'styled-components';

// Container for the entire dashboard
const DashboardContainer = styled.div`
    padding: 20px;
    position: relative;
`;

const ScanList = styled.div`
    margin-top: 20px;
    padding: 20px;
    background-color: rebeccapurple;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NewScanButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #45a049;
    }
`;

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
`;

const ModalContent = styled.div`
    width: 50%;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Select = styled.select`
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Label = styled.label`
    margin-bottom: 5px;
    font-weight: bold;
`;

const SubmitButton = styled.button`
    background-color: #e94560;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: cyan;
    }
`;

const Dashboard = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <DashboardContainer>
            <h1>Dashboard</h1>
            <p>Your Dashboard for monitoring and managing scans.</p>
            <NewScanButton onClick={openModal}>Start New Scan</NewScanButton>
            {showModal && (
                <ModalOverlay onClick={closeModal}>
                    <ModalContent onClick={e => e.stopPropagation()}>
                        <Form>
                            <Label htmlFor="group">Group</Label>
                            <Select id="group">
                                <option value="zomasec">zomasec</option>
                            </Select>
                            <Label htmlFor="description">Description</Label>
                            <Input id="description" placeholder="Enter description for the scan" />
                            <Label htmlFor="scanType">Scan Type</Label>
                            <Select id="scanType">
                                <option>Select Scan Type</option>
                                <option value="quick">Quick</option>
                                <option value="full">Full</option>
                            </Select>
                            <SubmitButton type="button" onClick={closeModal}>Start Scan</SubmitButton>
                        </Form>
                    </ModalContent>
                </ModalOverlay>
            )}
            <ScanList>
                <p>Scan 1</p>
                <p>Scan 2</p>
                <p>Scan 3</p>
            </ScanList>
        </DashboardContainer>
    );
};

export default Dashboard;
