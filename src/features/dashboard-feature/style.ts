import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #fff;
`;

export const Header = styled.header`
    background-color: #000;
    color: #fff;
    padding: 1rem 2rem;
    h1 {
        margin: 0;
        font-size: 1.5rem;
    }
`;

export const MainContent = styled.main`
    display: flex;
    flex: 1;
`;

export const Sidebar = styled.aside`
    width: 250px;
    background-color: #f5f5f5;
    padding: 2rem 0;
    border-right: 1px solid #e0e0e0;
`;

export const NavItem = styled.div`
    padding: 1rem 2rem;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
        background-color: #000;
        color: #fff;
    }
`;

export const Content = styled.div`
    flex: 1;
    padding: 2rem;
`; 