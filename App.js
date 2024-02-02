/*


1. Event, funktion, state

Skapa en knapp, button. Eller använd en Pressable.
Skapa och importera useState med och döp staten till text och setText.
När man trycker på button så ska funktionen helloWorld anropas.
Hello World i sin tur ska sätta ett text-state till "Hello World" och texten ska synas på sidan.



*/


import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';



const App = () => {

  const [text, setText] = useState("");
  

  function helloWorld() {
    setText("Hello World!")
   
  }
  
  return (
    <View style={styles.container}>
     <Pressable style={styles.press} onPressIn={helloWorld}><Text>Press me</Text></Pressable> 
     <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  press: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "grey"
  }
});

export default App;