import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import * as S from './style';
import Cookies from 'js-cookie';

interface User {
    id: number;
    name: string;
    email: string;
    roles: string[];
}

export default function DashboardFeature() {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);

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

    return (
        <S.Container>
            <S.Header>
                <h1>Olá, {user.name}</h1>
            </S.Header>
            <S.MainContent>
                <S.Sidebar>
                    <S.NavItem>Clientes</S.NavItem>
                    <S.NavItem>Barbeiros</S.NavItem>
                    <S.NavItem>Agendamentos</S.NavItem>
                    <S.NavItem>Configurações</S.NavItem>
                </S.Sidebar>
                <S.Content>
                    {/* Main content will go here */}
                </S.Content>
            </S.MainContent>
        </S.Container>
    );
} 