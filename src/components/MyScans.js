import React from 'react';
import styled from 'styled-components';

const MyScansContainer = styled.div`
  padding: 20px;
`;

const MyScans = () => {
    return (
        <MyScansContainer>
            <h1>My Scans</h1>
            <p>View all your scans and results here.</p>
        </MyScansContainer>
    );
};

export default MyScans;
