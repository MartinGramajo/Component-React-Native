import React, { useContext } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import { ThemeContext } from '../context/themeContext/ThemeContext';

import { MenuItem } from '../interfaces/appInterfaces';

//Interface Props para tipar el menuItem
interface Props {
    menuItem: MenuItem

}

export const FlatListMenuItem = ({ menuItem }: Props) => {
    const navigation = useNavigation();
    // usamos el context para dar traer nuestro themeContext
    // y poder darle color a distintas parte de nuestra app
    // Incluso puedo desestructura el theme para extraer lo que necesito.
    const { theme: { colors } } = useContext(ThemeContext)

    // Hook que me permite extraer los colores para el themeDark o default theme
    // const { colors } = useTheme();


    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate(menuItem.component)}>
            <View style={styles.container}>
                <Icon
                    name={menuItem.icon}
                    size={23}
                    color={colors.primary}
                />
                <Text style={{ ...styles.itemText, color: colors.text }}>
                    {menuItem.name}
                </Text>

                <View style={styles.viewSeparator} />
                <Icon
                    name="chevron-forward-outline"
                    size={23}
                    color={colors.primary}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    itemText: {
        marginLeft: 10,
        fontSize: 19,
    },
    viewSeparator: {
        flex: 1,
    }
});