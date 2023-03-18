import React, { useContext } from 'react'
import { View } from 'react-native'
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const ItemSeparator = () => {

  //context para personalizar el theme
  const { theme: { dividerColor } } = useContext(ThemeContext)

  return (
    <View
      style={{
        backgroundColor: dividerColor,
        borderBottomWidth: 2,
        opacity: 0.4,
        marginVertical: 8
      }}
    />
  );
};
