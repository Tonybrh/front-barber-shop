import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import * as S from './style';
import Cookies from 'js-cookie';
import ClientsComponent from './clients-component';

interface User {
    id: number;
    name: string;
    email: string;
    roles: string[];
}

export default function DashboardFeature() {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);
    const [activeMenu, setActiveMenu] = useState('clientes');

    useEffect(() => {
        const storedUser = Cookies.get('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            router.push('/auth/login');
        }
    }, [router]);

    if (!user) {
        return null;
    }

    const renderContent = () => {
        switch (activeMenu) {
            case 'clientes':
                return <ClientsComponent />;
            default:
                return <div>Conteúdo em desenvolvimento</div>;
        }
    };

    return (
        <S.Container>
            <S.Header>
                <h1>Olá, {user.name}</h1>
            </S.Header>
            <S.MainContent>
                <S.Sidebar>
                    <S.NavItem 
                        active={activeMenu === 'clientes'} 
                        onClick={() => setActiveMenu('clientes')}
                    >
                        Clientes
                    </S.NavItem>
                    <S.NavItem 
                        active={activeMenu === 'barbeiros'} 
                        onClick={() => setActiveMenu('barbeiros')}
                    >
                        Barbeiros
                    </S.NavItem>
                    <S.NavItem 
                        active={activeMenu === 'agendamentos'} 
                        onClick={() => setActiveMenu('agendamentos')}
                    >
                        Agendamentos
                    </S.NavItem>
                    <S.NavItem 
                        active={activeMenu === 'configuracoes'} 
                        onClick={() => setActiveMenu('configuracoes')}
                    >
                        Configurações
                    </S.NavItem>
                </S.Sidebar>
                <S.Content>
                    {renderContent()}
                </S.Content>
            </S.MainContent>
        </S.Container>
    );
} 