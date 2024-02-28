import { StatusBar, View, StyleSheet } from 'react-native'
import { Inicial } from './src/telas/Inicial'
import { Cabecalho } from './src/componentes/Cabecalho'

export default function App() {
  return (
    <View style={estilos.conteiner}>
      <StatusBar barStyle='default' />
      <Cabecalho />
      <Inicial />
    </View>
  );
}

const estilos = StyleSheet.create({
    conteiner: {
      flex: 1,
      backgroundColor: '#000',
    },
  });
