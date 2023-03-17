
import React from 'react';
import { Navigator } from './src/navigator/Navigator';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';

// const customTheme: Theme = {
//   // 1ra consideración: si estará en tema oscuro o no. 
//   dark: true,
//   // 2da consideración agregar los colores
//   colors: {
//     // expandimos el Dark theme (viene con unos colores preestablecidos para los colores)
//     ...DarkTheme.colors,
//     // primary: string,
//     // background: 'grey',
//     // card: string,
//     // text: string,
//     // border: string,
//     // notification: string,
//   }
// }

const App = () => {
  return (
    <AppState>
      <Navigator />
    </AppState>
  );
};



//NOTA: no nos olvidemos de enviar los children por parámetros.
//NOTA2: ASEGURARSE que el <AppState></AppState> sea el padre 
// del navigatorContainer y toda la demás aplicación.
//NOTA3: Mejoramos el codigo moviendo el navigatorContainer al navigator.
// Esto lo hacemos para manejar todo el theme desde el navigator.

// 5-Creamos un component que nos permita colocar 
// todos nuestros proveedores de contexto.
const AppState = ({ children }: any) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export default App;

// Aplicación del theme dark - light:
// 1- Lo trae el react-navigator, por ende debemos buscar donde esta el componente
// <NavigationContainer />
// 2- Se le agrega la configuración del theme, el cual nos agrega el defaultTheme 
// nos permite saber cual es la configuración por defecto del fondo. 
// Ademas tiene el DarkTheme. Ambos son importados de '@react-navigation/native'
// 3- Creamos una const de tipo Theme. Pero de donde saco el tipo? poniendo el cursos sobre el darkTheme o defaultTheme.
// Nota: Tmb IMPORTAR el THEME de'@react-navigation/native'.
// 4- Nuestra app queda totalmente en dark, pero como modificamos el texto, sabiendo que la config base solo se aplica para elementos propios del stack navigator. 
// Debemos ir al component en donde utilizaremos el color, en nuestro ejemplo el <Flatlist /> que lista el texto de nuestra pantalla de <Homescreen/> y utilizar un hook para extraer los colores. 
//  const { colors } = useTheme(); 
// Pero el problema con esto es que no nos deja utilizar colores personalizados. 