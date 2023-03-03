import React, { useState } from 'react'
import { View, Switch, Platform } from 'react-native';


interface Props {
  // isOn es mi state para saber si es true o false el switch 
  isOn: boolean;
  //onChange es para manejar el valor del estado de switch
  // y poder cambiar el texto en donde lo usaremos. 
  onChange: (value: boolean) => void;
}

export const CustomSwitch = ({ isOn, onChange }: Props) => {
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
        trackColor={{ false: '#D9D9DB', true: '#5856D6' }}
        thumbColor={(Platform.OS === 'android') ? '#5856D6' : ''}
        // ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};
