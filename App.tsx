import React from 'react';
import { View, Text, StatusBar, StyleSheet, ScrollView } from 'react-native';

const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Innovation distinguishes between a leader and a follower. - Steve Jobs",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Stay hungry, stay foolish. - Steve Jobs",
  "klsmnjkdn"
];

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <Text style={styles.cont}>Cards</Text>
      <View style={styles.cardContainer}>
        {quotes.map((quote, index) => (
          <ScrollView key={index} style={styles.card}>
            <Text style={styles.quote}>{quote}</Text>

          </ScrollView>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: "wrap",
  },
  card: {
    width: 150,
    height: "auto",
    margin: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 5, // For Android
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginHorizontal: 5,
    padding: 10,
  },
  quote: {
    fontSize: 18,
    fontStyle: "normal",
    textAlign: 'center',
    color:"blue"
  },
  cont:{
  fontSize:40,
  color:"red",
  marginBottom:60

  }
});

export default App;
