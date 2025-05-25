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

export const NavItem = styled.div<{ active?: boolean }>`
    padding: 1rem 2rem;
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: ${props => props.active ? '#000' : 'transparent'};
    color: ${props => props.active ? '#fff' : '#000'};
    
    &:hover {
        background-color: #000;
        color: #fff;
    }
`;

export const Content = styled.div`
    flex: 1;
    padding: 2rem;
    overflow-x: auto;
`;

export const ClientsContainer = styled.div`
    width: 100%;
    overflow-x: auto;
`;

export const ClientsTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    min-width: 800px;
`;

export const TableHeader = styled.thead`
    background-color: #f5f5f5;
`;

export const TableBody = styled.tbody`
    tr:nth-child(even) {
        background-color: #f9f9f9;
    }
`;

export const TableRow = styled.tr`
    &:hover {
        background-color: #f0f0f0;
    }
`;

export const TableHeaderCell = styled.th`
    padding: 1rem;
    text-align: left;
    font-weight: 600;
    border-bottom: 2px solid #e0e0e0;
`;

export const TableCell = styled.td`
    padding: 1rem;
    border-bottom: 1px solid #e0e0e0;
`;

// Responsive styles
const media = {
    tablet: '@media (max-width: 1024px)',
    mobile: '@media (max-width: 768px)'
};

export const ResponsiveContainer = styled.div`
    ${media.tablet} {
        ${Sidebar} {
            width: 200px;
        }
    }

    ${media.mobile} {
        ${Sidebar} {
            width: 60px;
            padding: 1rem 0;
        }

        ${NavItem} {
            padding: 1rem;
            text-align: center;
        }

        ${Content} {
            padding: 1rem;
        }
    }
`; 