import React from 'react';
// import Logo from '../../../assets/logo.png'

import { 
    Container, 
    LogoContainer,
    Logo, 
    Content, 
    Title,
    SubTitle,
    Button,
    TextButton,
} from './styles';

export default function Welcome(){
  return(
    <Container>
        <LogoContainer>
            <Logo
             source={require('../../../assets/logo.png')}
             style={{ width: '100%' }}
             resizeMode="contain"
            />
        </LogoContainer>

        <Content>
            <Title>Monitore, organize seus gastos de qualquer lugar</Title>
            <SubTitle>Faça o login para começar</SubTitle>

            <Button>
                <TextButton>Acessar</TextButton>
            </Button>
        </Content>
    </Container>
  );
}
