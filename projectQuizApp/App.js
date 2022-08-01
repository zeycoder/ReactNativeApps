import { Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { styles } from './style/Css';
import { data } from './data/Question';

const allQuestions = data;
const [questionIndex, setQuestionIndex] = useState(0)



export default function App() {
  const renderOptions = () => {
    return (
      <View>
        {allQuestions[questionIndex]?.secenek.map(secenek => (
          <TouchableOpacity>
            <Text> {secenek} </Text>
          </TouchableOpacity>
        )) }
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container} >
      {data.map(list => {
        return(
          <View>
            <Text style={styles.question} >{list.soru} </Text>
            <Text> {list.secenek} </Text>
          </View>
        )
      })}
      {renderOptions}
      <Text > {} </Text>
    </SafeAreaView>
  );
}

