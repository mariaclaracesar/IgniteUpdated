import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert} from 'react-native'
import { Participant } from '../../components/Participant'

import { styles } from './styles'

export function Home(){
  // lista de participantes
 const [participants, setParticipants] = useState<string[]>([]);
 const [participantName, setParticipantName] = useState('');
 
  function handleParticipantAdd(){
    //O método includes() determina se um conjunto de caracteres pode ser encontrado dentro de outra string, retornando true ou false .
    if(participants.includes(participantName)){
      return Alert.alert("Participante existe", 'Já existe um participante na lista com esse nome')
    }

    // usando o estado para adicionar na lista
		// recupera o estado anterior e junta em um nome array com o novo participante
    setParticipants(prevState => [...prevState, participantName]);
    //limpando o estado voltando para um conteudo vazio
    setParticipantName('');
  }

  function handleParticipantRemove(name: string){
    //o filter no estado de participantes(que é um array) tem uma condição de que ele retorne todos o participantes que 
    //o nome desse particpante(que ta dentro do array) é diferente desse nome que eu to querendo deletar 

    // mensagem de confirmação
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return(
    <View style={styles.container}>
      <Text style={styles.eventName}> 
        Adicionar Participantes
      </Text>

      <Text style={styles.eventDate}>
         Segunda, 17 de abil de 2023
      </Text>

    <View style={styles.form}>
      <TextInput 
          style={styles.input} 
          placeholder="Nome do participante"
          placeholderTextColor="#CBCBCB"
          // acessa o conteudo atual da caixa de texto toda vez q ele muda
          onChangeText={setParticipantName}
          // limpando o valor do imput
          value={participantName}
      />

      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>
            +
        </Text>
      </TouchableOpacity>
    </View>

    <FlatList 
      data={participants}
      keyExtractor={item => item}
      renderItem={({ item }) => (
        <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
      )}
      showsVerticalScrollIndicator={false}
			// quando a lista estiver vazia vai ser renderizado esse texto
      ListEmptyComponent={() => (
        <Text style={styles.listEmptyText}>
          Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
        </Text>
      )}
    />
  </View>
  );
}