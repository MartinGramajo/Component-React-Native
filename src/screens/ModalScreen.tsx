import React, { useState } from 'react';
import { Button, View, Modal, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const ModalScreen = () => {

  const [isVisible, setIsVisible] = useState(false)

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal Screen" />

      <Button
        title="Abrir Modal"
        onPress={() => setIsVisible(true)} />

      <Modal

        //animation de apertura del modal
        animationType='fade'

        //Visibility del modal
        visible={isVisible}

        //transparency del modal
        transparent={true}
      >
        {/* Background del modal */}
        <View style={{
          flex: 1,
          // height: 100,
          // width: 100,
          backgroundColor: 'rgba(0,0,0,0.3)',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {/* Contenido del modal */}
          <View style={{
            backgroundColor: "white",
            width: 200,
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
            shadowOffset: {
              width: 0,
              height: 10
            },
            shadowOpacity: 0.25,
            elevation: 10,
            borderRadius: 5
          }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Modal</Text>
            <Text style={{ fontSize: 16, fontWeight: '500', marginVertical: 20 }}>  Cuerpo del modal</Text>
            <Button
              title="Cerrar"
              onPress={() => setIsVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
