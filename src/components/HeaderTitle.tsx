import React, { useContext } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { View, Text, StyleSheet } from 'react-native';

import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
  title: string;
}


export const HeaderTitle = ({ title }: Props) => {

  //usamos el contexto
  const { theme: { colors } } = useContext(ThemeContext)

  // Solucionamos el Notch 
  const { top } = useSafeAreaInsets();
  return (
    //  elemento o component para mostrar en la function renderItem() del Flatlist.
    // const renderMenuItem = (menuItem: MenuItem) => {
    //     return (
    //         <View>
    //             <Text>
    //                 {menuItem.name} - {menuItem.icon}
    //             </Text>
    //         </View>
    //     )
    // }

    // elemento o component que usamos como header de nuestro flatlist
    <View style={{ marginTop: top + 20, marginBottom: 20 }}>
      <Text style={{ ...styles.title, color: colors.text }}> {title}</Text>
    </View>
  )
}

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: '800'
  }
});