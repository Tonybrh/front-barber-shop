import * as S from './sytle';
import {TextField} from "@mui/material";
import {useForm} from "react-hook-form";

export default function LoginFeature() {
    const { handleSubmit, control } = useForm();

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <S.Container>
            <S.LeftSection>
                <h1 style={{textAlign: 'center'}}>Agende seu servico agora na <br/> Barber Shop</h1>
            </S.LeftSection>
            <S.RightSection>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField color='primary' label='Nome' placeholder='Digite seu nome' />
                    <TextField color='primary' label='Email' placeholder='Digite seu email' />
                    <TextField color='primary' label='Senha' placeholder='Digite sua senha' type='password' />
                    <button type='submit'>Enviar</button>
                </form>
            </S.RightSection>
        </S.Container>
    )
}