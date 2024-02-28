import { View, StyleSheet } from "react-native"
import { useState } from "react";
import { Formulario } from '../componentes/Formulario'
import { Lista } from "../componentes/Lista"
import uuid from 'react-native-uuid'

export function Inicial(){ 

    const [listaContatos, setListaContatos] = useState([])

    function adicionarContato(nome, email, telefone){

        let novoContato = {
            codigo: uuid.v4(),
            nome: nome,
            email: email,
            telefone: telefone
        } 

        setListaContatos([...listaContatos, novoContato])

        console.log(novoContato)
    }


    function removerContato(nome){

        setListaContatos( listaContatos.filter(
            nomeContato => nomeContato !== nome
        ) )
    }


    return(
        <View style={estilos.conteiner}>
            <Formulario 
                adicionar={adicionarContato}
            />  
            <Lista 
                colecao={listaContatos}
                remover={removerContato}
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flex: 1,
    },
})