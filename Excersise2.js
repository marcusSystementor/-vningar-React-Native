/*

2. Slumpa tal, Math-random, Conditional Rendering

Math-klasser och funktioner finns i flera programmeringsspråk och JavaScript är inget undantag.
Gå in och läs här: https://josephcardillo.medium.com/using-math-random-in-javascript-c49eff920b11#:~:text=A%20short%20guide%20to%20.,round&text=In%20JavaScript%2C%20to%20get%20a,random()%20function.&text=If%20you%20want%20a%20random,then%20round%20up%20or%20down.

Skapa en funktion generateRandomNumber som slumpar fram ett tal mellan 1 och 20. 
Detta nummer ska sättas i ett state, state döper vi till ranNumber, setRanNumber och värdet ska vara 0 från början.
Skapa en button som när vi trycker på den kallas på generateRandomNumber som sätter ett slumptal till ranNumber. 
Under knappen så ska det finnas en text som skriver ut hurvida talet är mindre än 10 eller större än 10.
Detta ska uppdateras i realtid. Ett tips. Använd er av Conditional rendering som vi gått igenom.
Numret som blir slumpat ska även det synas ovanför knappen.
Läs mer här för att fräscha upp minnet:
https://react.dev/learn/conditional-rendering


*/

import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';



const App = () => {

  const [ranNumber, setRandomNumber] = useState(0);
  

  function generateRandomNumber() {

    const randomNumber = Math.round(Math.random() * 20);
    setRandomNumber(randomNumber);

    
   
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{ranNumber}</Text>
      <View></View>
     <Pressable style={styles.press} onPressIn={generateRandomNumber}><Text style={styles.text}>Generera slumptal </Text></Pressable> 
    { ranNumber < 10 ? <Text style={styles.text}>Ditt nummer är mindre än 10</Text> : <Text style={styles.text}>Ditt tal är större än 10</Text> }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#a28089",
    color: "#ffa8B6",
  },
  press: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#ffa8B6",

  },
  text: {
    color: "white",
  },
  numberText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    margin: 20,
  }

});

export default App;
