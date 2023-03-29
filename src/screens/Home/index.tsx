import { Alert } from 'react-native'
import { Text, View, TextInput, TouchableOpacity, FlatList} from 'react-native'
import { Participant } from '../../components/Participant'

import { styles } from './styles'

export function Home(){
  const participants = ['Rodrigo', 'Vini', 'Diego', 'Maria', 'Marcus', 'Hud', 'Lucas', 'Mike', 'Monica', 'Pheobe']

  function handleParticipantAdd(){
    if(participants.includes("Rodrigo")){
      return Alert.alert("Participante existe", 'Já existe um participante na lista com esse nome')
    }
  }

  function handleParticipantRemove(name: string){
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado!')
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
        React Native
      </Text>

      <Text style={styles.eventDate}>
         Segunda, 27 de março de 2023
      </Text>

    <View style={styles.form}>
      <TextInput 
          style={styles.input} 
          placeholder="Nome do participante"
          placeholderTextColor="#CBCBCB"
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
      ListEmptyComponent={() => (
        <Text style={styles.listEmptyText}>
          Nimguém chegou no evento ainda? Adicione participantes a sua lista de presença.
        </Text>
      )}
    />
  </View>
  )
}