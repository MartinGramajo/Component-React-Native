import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';

export const SwitchScreen = () => {

  //state de los texto que serán cambiado con la function onChange.
  // cuando cambiar de valor (true - false) el switch.
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  const { isActive, isHungry, isHappy } = state;

  // function onChange para cambiar los textos 
  // recibe dos parámetros:
  //1- el value o valor (true o false) del switch.
  //2- el field de tipo string que es el texto a cambiar.
  // en nuestro ejemplo el state isActive, isHungry, isHappy

  const onChange = (value: boolean, field: string) => {
    setState({
      ...state,
      [field]: value,
    })
  };

  return (
    <View style={{ marginHorizontal: 20 }}>
      <HeaderTitle title="Switches" />
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>
          isActive
        </Text>
        <CustomSwitch isOn={isActive} onChange={(value) => onChange(value, 'isActive')} />
      </View>
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>
          isHungry
        </Text>
        <CustomSwitch isOn={isHungry} onChange={(value) => onChange(value, 'isHungry')} />
      </View>
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>
          isHappy
        </Text>
        <CustomSwitch isOn={isHappy} onChange={(value) => onChange(value, 'isHappy')} />
      </View>
      <Text style={styles.switchText}>
        {JSON.stringify(state, null, 5)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  switchText: {
    fontSize: 25
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  }
});


