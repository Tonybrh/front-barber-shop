import { useEffect, useState } from 'react';
import { Client } from "/src/types/Client/client-interface";
import { getClients } from './clients-service';
import * as S from './style';

export default function ClientsComponent() {
    const [clients, setClients] = useState<Client[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchClients = async () => {
            const data = await getClients();
            setClients(data);
            setLoading(false);
        };

        fetchClients();
    }, []);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR');
    };

    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <S.ClientsContainer>
            <S.ClientsTable>
                <S.TableHeader>
                    <S.TableRow>
                        <S.TableHeaderCell>Nome</S.TableHeaderCell>
                        <S.TableHeaderCell>Email</S.TableHeaderCell>
                        <S.TableHeaderCell>Telefone</S.TableHeaderCell>
                        <S.TableHeaderCell>Data Cadastro</S.TableHeaderCell>
                    </S.TableRow>
                </S.TableHeader>
                <S.TableBody>
                    {clients.map((client) => (
                        <S.TableRow key={client.id}>
                            <S.TableCell>{client.name}</S.TableCell>
                            <S.TableCell>{client.email}</S.TableCell>
                            <S.TableCell>{client.phone}</S.TableCell>
                            <S.TableCell>{formatDate(client.created_at)}</S.TableCell>
                        </S.TableRow>
                    ))}
                </S.TableBody>
            </S.ClientsTable>
        </S.ClientsContainer>
    );
} 