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


  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />

      <Button
        title="Mostrar alert"
        onPress={showAlert}
      />

    </View>
  );
};
