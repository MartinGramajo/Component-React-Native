import React, { useState, useContext } from 'react'
import { View, Switch, Platform } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';


interface Props {
  // isOn es mi state para saber si es true o false el switch 
  isOn: boolean;
  //onChange es para manejar el valor del estado de switch
  // y poder cambiar el texto en donde lo usaremos. 
  onChange: (value: boolean) => void;
}

export const CustomSwitch = ({ isOn, onChange }: Props) => {

  //context para personalizar el theme
  const { theme: { colors } } = useContext(ThemeContext)


  //state del switch
  const [isEnabled, setIsEnabled] = useState(isOn);
  //toggle switch
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };


  return (
    <View>
      <Switch
        //esto es obligatorio el trackColor.
        trackColor={{ false: '#D9D9DB', true: colors.primary }}
        thumbColor={(Platform.OS === 'android') ? colors.primary : ''}
        // ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};
