import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItem';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';


export const HomeScreens = () => {


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


    //Element o component para utilizar como separador en el ItemSeparatorComponent dentro del FlatList. 
    // const ItemSeparator = () => {
    //     return (
    //         <View
    //             style={{
    //                 borderBottomWidth: 2,
    //                 opacity: 0.4,
    //                 marginVertical: 8
    //             }}
    //         />

    //     )
    // }


    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>

            <FlatList
                //data=  mi lista de elementos. 
                data={menuItems}

                //  renderItem = función para renderizar cada uno de los elementos.
                // importante regresa un jsx.
                // renderItem posee 2 argumentos: 
                //1- el item o iteración de cada uno de mi elementos de la lista. 
                //2- el index o la posición de cada uno de mis elementos de la lista.
                renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}

                // keyExtractor= genera una key unica por cada elemento de mi lista.
                // tiene un argumento el item.
                // iteración donde me encuentro(element1, element2) de mi lista.
                // (key.item.algo )debe ser un elemento único y STRING.
                // si fuera un numero agregar la propiedad toString()
                // keyExtractor={(item) => item.name}
                keyExtractor={(item) => item.id.toString()}

                //ListHeaderComponent: header component de mi flat list 
                // recibe un jsx al igual que renderItem. 
                ListHeaderComponent={() => <HeaderTitle title="Opciones de Menu" />}

                //Item separador: component para separa cada elemento de mi list.
                ItemSeparatorComponent={() => <ItemSeparator />}
            />

        </View>
    );
};


export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
    },

    title: {
        fontSize: 35,
        fontWeight: 'bold'
    }
});