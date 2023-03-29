import { Text, View, TextInput, TouchableOpacity} from 'react-native'

import { styles } from './styles'

export function Home(){

  function handleParticipantAdd(){
    console.log('VOCE TA CLICANDO AQUIIIIII')
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
  </View>
  )
}