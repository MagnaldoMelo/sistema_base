import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from './styles';
import AvatarInput from './AvatarInput';

import { updateProfileRequest } from '~/store/modules/user/actions';
import { sigOut } from '~/store/modules/auth/actions';

export default function Profile() {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.user.profile);

    function handleSubmit(data) {
        dispatch(updateProfileRequest(data));
    }

    function handleSignOut(){
        dispatch(sigOut());
    }

    return (
        <Container>
            <Form initialData={profile} onSubmit={handleSubmit}>
                <AvatarInput name="avatar_id"/>
                <Input name="nome" placeholder="Nome completo" />
                <Input name="email" placeholder="Seu e-mail" />
                <hr />
                <Input
                    type="password"
                    name="oldPassword"
                    placeholder="Sua senha atual"
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Sua nova senha"
                />
                <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirmação de senha"
                />
                <button type="submit">Atualizar perfil</button>
            </Form>
            <button type="submit" onClick={handleSignOut}>Sair do GoBarber</button>
        </Container>
    );
}
