import React from 'react';

import {
    Container,
    Content,
    Message,
    FormContent,
    Email,
    Senha,
    Input,
    Button,
    ButtonTitle,
    Register,
    RegisterText
} from './styles';

export default function SignIn(){
  return(
    <Container>
      <Content animation="fadeInLeft" delay={500}>
       <Message> Tela de Login</Message>
      </Content>

      <FormContent animation="fadeInUp">
        <Email placeholder="Digite um email">Email</Email>
        <Input />

        <Senha placeholder="Sua senha">Senha</Senha>
        <Input />

        <Button>
          <ButtonTitle> Acessar </ButtonTitle>
        </Button>

        <Register>
          <RegisterText> Não possui conta? Cadastre-se </RegisterText>
        </Register>
      </FormContent>
    </Container>
  );
}