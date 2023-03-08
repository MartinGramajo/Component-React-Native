import React from 'react';
import { TextInput, Keyboard, View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Text } from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle, styles } from '../components/HeaderTitle';
import { useForm } from '../hooks/useForm';

export const TextInputScreen = () => {

  // version inicial
  //STATE INPUTS
  // const [form, setForm]=useState({
  //   name: '',
  //   email: ' ',
  //   phone: ' ',
  //   isSubscribed: false,
  // })

  // FUNCTION PARA CAPTURAR LO INGRESADO EN LOS INPUTS
  // const onChange = (value: string, field: keyof T) => {
  //   setState({
  //     ...state,
  //     [field]: value
  //   });
  // }

  // con el hook
  const { onChange, form, isSubscribed } = useForm({
    name: '',
    email: ' ',
    phone: ' ',
    isSubscribed: false,
  });

  return (
    //KeyboardAvoidingView: debe envolver todo nuestro formulario. 
    // TouchableWithoutFeedback + function keyboard.dismiss() 
    // Permite cerrar el teclado tocando fuera del mismo.
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
            <View style={stylesScreen.switchRow}>
              <Text> Suscribirse</Text>
              <CustomSwitch isOn={isSubscribed} onChange={(value) => onChange(value, 'isSubscribed')} />
            </View>

            <HeaderTitle title={JSON.stringify(form, null, 3)} />

            <HeaderTitle title={JSON.stringify(form, null, 3)} />

            <TextInput
              style={stylesScreen.inputStyle}
              placeholder="Ingrese su Teléfono"
              onChangeText={(value) => onChange(value, 'phone')}
              //Type de teclado
              keyboardType="phone-pad"
            />
            <View style={{ height: 100 }} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
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
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  }
});