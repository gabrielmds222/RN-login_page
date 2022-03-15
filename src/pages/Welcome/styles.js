import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

export const Container = styled.View`
    flex: 1;
    background-color: #38A690;
`;

export const LogoContainer = styled.View`
    flex: 2;
    background-color: #38A690;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.Image``;

export const Content = styled.View`
    flex: 1;
    background-color: #fff;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    padding-left: 5%;
    padding-right: 5%;
`;

export const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    margin-top: 28px;
    margin-bottom: 12px;
`;

export const SubTitle = styled.Text`
    color: #a1a1a1;
`;

export const Button = styled(TouchableOpacity)`
    position: absolute;
    background-color: #38A690;
    border-radius: 50px;
    width: 60%;
    padding: 8px;
    align-self: center;
    bottom: 15%;
    justify-content: center;
    align-items: center;
`;

export const TextButton = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #FFFFFF;
`;
