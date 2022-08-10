import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, TextInput, View} from "react-native";
import { styles } from "./style/Css";

const App = () =>{

  const [country, setCountry] = useState([])
  const [text, setText] = useState('')

  useEffect(()=>{

    async function getCountry() {
      const response =await fetch('https://restcountries.com/v3.1/all',{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          text
        })
      })
    }

    fetch('https://restcountries.com/v3.1/all')
    
  },[])
    
  var data = null;

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
    }
  });

  xhr.open("GET", "https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=ankara");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader("authorization", "apikey your_token");

  xhr.send(data);


  return(
    <SafeAreaView style={styles.container} >
      <Text>{data}</Text>
      <View>

      </View>
    </SafeAreaView>
  )
}
export default App;