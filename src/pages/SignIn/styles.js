import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import {View, Image, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';

export const Container = styled.View`
    flex: 1;
    background-color: #38A690;
`;

export const Content = styled(Animatable.View)`
    margin-top: 14%;
    margin-bottom: 8%;
    padding-left: 5%;
`;

export const Message = styled.Text`
   font-size: 28px;
   font-weight: bold;
   color: #FFFFFF;
`;

export const FormContent = styled(Animatable.View)`
    background-color: #FFFFFF;
    flex: 1;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    padding-left: 5%;
    padding-right: 5%;
`;

export const Email = styled.Text`
    font-size: 20px;
    margin-top: 28px;
`;

export const Senha = styled.Text`
    font-size: 20px;
    margin-top: 28px;
`;

export const Input = styled.Text`
    border-bottom-width: 1px;
    height: 40px;
    margin-bottom: 12px;
    font-size: 16px;
`;

export const Button = styled(TouchableOpacity)`
    background-color: #38A690;
    width: 100%;
    border-radius: 4px;
    padding: 8px 0;
    margin-top: 14px;
    justify-content: center;
    align-items: center;
`;

export const ButtonTitle = styled.Text`
    color: #FFFFFF;
    font-size: 18px;
    font-weight: bold;
`;

export const Register = styled(TouchableOpacity)`
    margin-top: 14px;
    align-self: center;
`;

export const RegisterText = styled.Text`
    color: #a1a1a1;
`;
