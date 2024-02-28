import { View, Text, StyleSheet } from "react-native"

export function Cabecalho(){
    return(
        <View style={estilos.conteiner}>
            <Text style={estilos.texto}>Contatos</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        height: 55,
        backgroundColor: '#011828',
        justifyContent: 'center',
        alignItems: 'center'
    },
    texto: {
        color: '#e1e5f2',
        fontSize: 24,
        fontWeight: '600'
    }
  });