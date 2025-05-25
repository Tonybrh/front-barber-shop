import { GlobalContainer } from "/src/styles/global-style";
import * as S from "./style";
import {Button, Snackbar, TextField} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import IMask from 'imask';
import {useEffect, useRef, useState} from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "/src/utils/validation-schemas/register-schema";
import { saveUser } from "/src/features/register-feature/register-service";
import { UserRegisterInputsInterface } from "/src/types/User/user-register-inputs-interface";

export default function RegisterFeature() {
    const { handleSubmit, register, formState: { errors }} = useForm<UserRegisterInputsInterface>({
        resolver: yupResolver(registerSchema)
    });
    const phoneMaskRef = useRef(null);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const onSubmit: SubmitHandler<UserRegisterInputsInterface> = async (data) => {
        data.phone = data.phone.replace(/\D/g, '');
        let userSaved = await saveUser(data)

        if(userSaved) {
            setSnackbarOpen(true)
        }
    }

    useEffect(() => {
        if (phoneMaskRef.current) {
            IMask(phoneMaskRef.current, {
                mask: '(00) 00000-0000'
            });
        }
    }, []);

    return (
        <GlobalContainer>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={() => setSnackbarOpen(false)}
                message="Usuário cadastrado com sucesso!"
            />
            <S.LeftSection>
                <h1 style={{textAlign: 'center'}}>Crie sua conta agora na <br/> Barber Shop</h1>
            </S.LeftSection>
            <S.RightSection>
                <S.StyledForm onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        {...register('name')}
                        helperText={errors.name?.message}
                        color='primary'
                        label='Nome'
                        placeholder='Digite seu nome'
                        error={!!errors.name}
                    />
                    <TextField
                        {...register('phone')}
                        helperText={errors.phone?.message}
                        inputRef={phoneMaskRef}
                        name="phone"
                        label="Telefone"
                        placeholder="Digite seu telefone"
                        color="primary"
                        variant="outlined"
                        margin="normal"
                        error={!!errors.phone}
                    />
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