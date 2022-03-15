import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    Image, 
    TouchableOpacity 
} from 'react-native';

export default function Welcome(){
  return(
    <View style={style.container}>
        <View>
            <Image 
             source={require('../../../assets/logo.png')}
             style={{ width: '100%' }}
             resizeMode="contain"
            />
        </View>
    </View>
  );
}

const style = StyleSheet.create({
    container: {

    }
})