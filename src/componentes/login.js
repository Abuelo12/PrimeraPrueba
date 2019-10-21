import React from 'react';

import {
    View,
    Text,
    Button,
    TextInput,
    StyleSheet,
} from 'react-native';

const Login= (props) => {

    const { cambiodepantalla } = props;
    const{miOnChangeDeTexto,Texto,} = props;

    return (
        <View>
            
            <View>
                <TextInput
                onChangeText={miOnChangeDeTexto}
                defaultValue={Texto}
                placeholder='Escribe aqui........'/>
            </View>

            <Button
                title='Ir a pantalla Inicio'
                onPress={
                    () => {
                        cambiodepantalla('inicio');
                    }
                }
            />
        </View>
    );

};

export default Login;