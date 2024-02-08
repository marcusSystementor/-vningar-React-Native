import { View, StyleSheet, Text, Pressable, TextInput } from 'react-native';
import { useState } from 'react';

/**
 3. Slumpa tal mot datorn

Skapa ett textfält (Textfield) där du skriver in ett nummer mellan 1 och 10.
Skapa sedan en Button och när man trycker på den så ska datorn generera ett tal slumpmässigt mellan 1 och 10.
Sedan ska ditt tal och datorns tal jämföras, är ditt nummer högre, lägre eller lika? Resultatet ska skrivas ut i text.
Tänk på att vid Textfield när man skriver in information så blir det av typ string, kolla gärna upp parseInt-funktionen lite mer.

 */


const Excersise3 = () => {

  const [randomNumber, setRandomNumber] = useState(0);
  const [yourNumber, setYourNumber] = useState(0);
  const [result, setResult] = useState ("");

  function generateRandomNumber() {

    setRandomNumber (Math.round(Math.random() * 10));
    compareNumbers();

 }

 function compareNumbers () {
  let parseNumber = parseInt(yourNumber);
  if (parseNumber > randomNumber) {
    setResult("Your number is higher");
  }
  else if (parseNumber < randomNumber) {
    setResult("Your number is lower")
  }
  else if (parseNumber === randomNumber) {
    setResult("Its a tie, equal numbers");
  }

 }



 return (
  <View style={styles.container}>
    <Text style={styles.text}>Enter a number between 1 and 10 and press Enter</Text>
    <TextInput style={styles.input} onChangeText={setYourNumber} value={yourNumber}>
    </TextInput>

    <Text style={styles.text}>Is your or the computers choice higher?</Text>
    <Pressable style ={styles.press} onPressIn={generateRandomNumber}>
      <Text>Let computer generate number</Text>
    </Pressable>
    <Text style={styles.text}>Computer chose {randomNumber}</Text>
    <Text>{result}</Text>



  </View>
 )


};
export default Excersise3;


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
    margin: 20,
  },
  numberText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    margin: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "white",
  }


});


