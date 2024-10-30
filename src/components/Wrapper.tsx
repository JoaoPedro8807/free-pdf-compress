import React from 'react';
import styled from 'styled-components';

interface WrapperProps {
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

const StyledWrapper = styled.div`
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(142, 142, 142, 0.09);
    display: flex;
    justify-content: center;
    align-items: center;  
    flex-wrap: wrap;
    @media (max-width: 768px) {
        width: 100%;
        padding: 0px;
        margin-top: 40px;
    }
`;

export default function Wrapper({ children, style }: WrapperProps) {
    return (
        <StyledWrapper style={style}>
            {children}
        </StyledWrapper>
    );
}