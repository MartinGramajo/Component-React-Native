import React from 'react';
import { Alert, Button, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const AlertScreen = () => {

  const showAlert = () => {
    // COMPONENT ALERT.(function que crea el alert)
    Alert.alert('Titulo', 'Este es el mensaje de la alerta', [
      // Botón de cancel
      {
        // texto del botón
        text: 'Cancel',
        // función del botón propiamente
        onPress: () => console.log('Cancel Pressed'),
        // style del botón según el sistema operativo.
        style: 'cancel',
      },
      // Botón de ok
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ],
      //2# Parámetro para las configuraciones.
      // IMPORTANTE: no colocar este segundo parámetro
      // para que tanto en ios y android obliguemos al usuario a tocar el cancel. 
      {
        // cancelable: permite al usuario cerrar el alert tocando fuera del recuadro.
        cancelable: true,
        // function para disparar console.log
        onDismiss: () => console.log('onDismiss')
      }
    );
  };

  // Esto es solo para IOS
  const showPrompt = () => {
    Alert.prompt(
      // title
      'Esta seguro?',
      'Esta acción no se puede repetir',
      //callback o arreglo de botones 
      (valor: string) => console.log('info: ', valor),
      // Acción o tipo de acciones.
      'plain-text',
      // Placeholder o default value.
      'hola mundo',
      //keyboard Type 
      'email-address',


    )
  };


  return (
    <View style={{ ...styles.globalMargin, flex: 1 }}>
      <HeaderTitle title="Alerts" />
      <View style={styles.contentCenter}>
        <View style={{ marginVertical: 20 }}>
          <Button
            title="Mostrar alert"
            onPress={showAlert}
          />
        </View>

        <View>
          <Button
            title="Mostrar Prompt"
            onPress={showPrompt}
          />
        </View>
      </View>
    </View>
  );
};

