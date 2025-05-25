import { GlobalContainer } from "/src/styles/global-style";
import * as S from "./style";
import {Button, Snackbar, TextField} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "/src/utils/validation-schemas/login-schema";
import { loginUser } from "/src/features/login-feature/login-service";
import { UserLoginInputsInterface } from "/src/types/User/user-login-inputs-interface";
import { useState } from "react";

export default function LoginFeature() {
    const { handleSubmit, register, formState: { errors }} = useForm<UserLoginInputsInterface>({
        resolver: yupResolver(loginSchema)
    });
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const onSubmit: SubmitHandler<UserLoginInputsInterface> = async (data) => {
        let userLogged = await loginUser(data)

        if(userLogged) {
            setSnackbarOpen(true)
        }
    }

    return (
        <GlobalContainer>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={() => setSnackbarOpen(false)}
                message="Login realizado com sucesso!"
            />
            <S.LeftSection>
                <h1 style={{textAlign: 'center'}}>Faça login na <br/> Barber Shop</h1>
            </S.LeftSection>
            <S.RightSection>
                <S.StyledForm onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        {...register('email')}
                        helperText={errors.email?.message}
                        color='primary'
                        label='Email'
                        placeholder='Digite seu email'
                        error={!!errors.email}
                    />
                    <TextField
                        {...register('password')}
                        helperText={errors.password?.message}
                        color='primary'
                        label='Senha'
                        placeholder='Digite sua senha'
                        type='password'
                        error={!!errors.password}
                    />

                    <Button sx={{
                        backgroundColor: '#fff',
                        color: '#000',
                        '&:hover': {
                            backgroundColor: '#000',
                            color: '#fff',
                        },
                        padding: '8px 16px',
                        borderRadius: '4px',
                    }}
                    size='large' type='submit' variant='contained'>Enviar</Button>
                </S.StyledForm>
            </S.RightSection>
        </GlobalContainer>
    )
}