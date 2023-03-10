import React from 'react';
import { View, SectionList, Text } from 'react-native';
import { HeaderTitle, styles } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: "DC Comics",
    data: ["Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin",]
  },
  {
    casa: "Marvel Comics",
    data: ["Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman", "Antman",]
  },
  {
    casa: "Anime",
    data: ["Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama",]
  }
];


export const SectionListScreen = () => {
  return (
    <View style={{ ...styles.globalMargin, flex: 1 }}>

      <SectionList
        // sections={}
        // enviamos la secciones (casas) que tenemos en nuestro array de datos. 
        // en nuestro caso las casas.
        sections={casas}

        //ListHeaderComponent={} del componente completo
        // Permite tener un header en la section list. 
        // que se comporta de igual manera que la propiedad renderSectionHeader={}
        ListHeaderComponent={() => <HeaderTitle title='Section list' />}

        //ListFooterComponent={} del componente completo
        // Permite agregar un footer en la section list.
        ListFooterComponent={() =>
        (
          <View style={{ marginBottom: 70 }}>
            <HeaderTitle title={'Total de casas: ' + casas.length} />
          </View>
        )}

        //keyExtractor={}
        // id o key unica por cada item de la section
        // por lo general se recomienda tener un id por cada elemento, es decir,
        // un elemento único por item.
        // la documentación oficial nos sugiere concatenar 
        // algún elemento + index (posición en la cual se encuentra cada item)
        // con esto lo hacemos un elemento único.
        keyExtractor={(item, index) => item + index}

        // renderItem={}
        // Propiedad para renderizar los items.
        // en este caso accedemos a cada uno de las sections y tomamos los datos(data).
        renderItem={({ item }) => <Text> {item}</Text>}

        // stickySectionHeadersEnabled={true | false}
        // agrega un efecto de sticky a los headers 
        // para estilizar el component.
        stickySectionHeadersEnabled

        //renderSectionHeader={} de cada section 
        // Propiedad para los encabezados o header de cada section.
        renderSectionHeader={({ section }) =>
          <View style={{ backgroundColor: 'white' }}>
            <HeaderTitle title={section.casa} />
          </View>}

        //renderSectionFooter={}
        // Propiedad que agrega un footer a cada section.
        renderSectionFooter={({ section }) => (
          <HeaderTitle title={'Total: ' + section.data.length} />
        )}

        //Separador del Componente
        //SectionSeparatorComponent={} 
        // utilizamos un component que creamos especialmente para esa tarea.
        // SectionSeparatorComponent={() => <ItemSeparator />}

        //Separador de cada item de la section
        //ItemSeparatorComponent={}
        ItemSeparatorComponent={() => <ItemSeparator />}

        //Quitar la barra de scroll
        //showsVerticalScrollIndicator={true|false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
