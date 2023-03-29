import { Text, View } from 'react-native'

import { styles } from './styles'

export default function Home(){
  return(
    <View style={styles.container}>
      <Text style={styles.eventName}> 
        React Native
      </Text>

      <Text style={styles.eventDate}>
         Segunda, 27 de março de 2023
      </Text>
    </View>
    )
}