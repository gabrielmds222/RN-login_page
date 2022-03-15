import React from 'react';

import { 
    Container, 
    LogoContainer,
    Content, 
    Logo,
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
             animation="flipInY"
             source={require('../../../assets/logo.png')}
             style={{ width: '100%' }}
             resizeMode="contain"
            />
        </LogoContainer>

        <Content delay={600} animation="fadeInUp">
            <Title>Monitore, organize seus gastos de qualquer lugar</Title>
            <SubTitle>Faça o login para começar</SubTitle>

            <Button>
                <TextButton>Acessar</TextButton>
            </Button>
        </Content>
    </Container>
  );
}
