import React from 'react';

import {
    View,
    Text,
    Button,
} from 'react-native';

const Inicio = (props) => {

    const { cambiodepantalla } = props;
    const{ campoTexto,} = props;

    return(
        <View>
            <Text>{campoTexto}</Text>
            <Button
                title='volver a la pantalla Login'
                onPress={
                    () => {
                        cambiodepantalla('login');
                    }
                }
            />
        </View>
    );

};

export default Inicio;