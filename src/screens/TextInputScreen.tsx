import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { HeaderTitle, styles } from '../components/HeaderTitle';

export const TextInputScreen = () => {

  const [form, setForm] = useState({
    name: ' ',
    email: ' ',
    phone: ' ',
  });

  const onChange = (value: string, field: string) => {
    setForm({
      ...form,
      [field]: value,
    })
  }

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="TextInputs" />

      <TextInput
        style={stylesScreen.inputStyle}
        placeholder="Ingrese su nombre"
        //auto corrección del texto al usuario.
        autoCorrect={false}
        //Capitalización del texto al usuario.
        autoCapitalize="words"
        // function para tomar el value de los inputs
        onChangeText={(value) => onChange(value, 'name')}
      />

      <TextInput
        style={stylesScreen.inputStyle}
        placeholder="Ingrese su email"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={(value) => onChange(value, 'email')}
        //Type de teclado
        keyboardType="email-address"
        // Apariencia del teclado (SOLO IOS)
        keyboardAppearance='dark'
      />

      <TextInput
        style={stylesScreen.inputStyle}
        placeholder="Ingrese su Teléfono"
        onChangeText={(value) => onChange(value, 'phone')}
        //Type de teclado
        keyboardType="phone-pad"
      />


      <HeaderTitle title={JSON.stringify(form, null, 3)} />
    </View>
  );
};

const stylesScreen = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0,0.3)',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
});