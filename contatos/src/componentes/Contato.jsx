import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { UserMinus } from 'phosphor-react-native'


export function Contato({nome, email, telefone, excluir}){
    return(
        <View style={estilos.conteiner}>

            <View style={estilos.conteinerContato}>
                <Text style={estilos.texto}>Nome: {nome}</Text>
                <Text style={estilos.texto}>E-mail: {email}</Text>
                <Text style={estilos.texto}>Telefone: {telefone}</Text>
            </View>

            <TouchableOpacity 
                style={estilos.botao}
                onPress={excluir}
            >
                <Text>
                    <UserMinus 
                        size={28} 
                        color="#FFF"
                    />               
                </Text>
            </TouchableOpacity>            

        </View>
    )
}


const estilos = StyleSheet.create({
    conteiner: {
        flexDirection: 'row',
        margin: 5,
        borderRadius: 5,
    },
    conteinerContato: {
        flex: 1,
        paddingStart: 10,
        paddingVertical: 10,
        backgroundColor: '#e1e5f2',
        borderRadius: 5,
    },    
    texto: {
        color: '#010228',
        fontSize: 16,
        fontWeight: '600'
    },
    botao: {
        width: 60,
        marginStart: 10,
        backgroundColor: '#590d22',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    
})