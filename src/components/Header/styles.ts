import styled from "styled-components"

export const Container = styled.div`
    height: 60px;
    background-color: ${props => props.theme.colors.primary};
    color: ${porps => porps.theme.colors.text};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
`

export const ThemeContainer = styled.div`
    display: flex;
    width: auto;
    gap: 10px;
    
`
