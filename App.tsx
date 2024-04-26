import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Animated } from 'react-native';
import First from './src/screens/First';

const App = () => {
  const [isHidden, setIsHidden] = useState(true);
  const fadeAnim = useState(new Animated.Value(0))[0];

  const toggleHidden = () => {
    Animated.timing(
      fadeAnim,
      {
        toValue: isHidden ? 1 : 0,
        duration: 100,
        useNativeDriver: true,
      }
    ).start(() => setIsHidden(!isHidden));
  };

  return (
    <View style={styles.container}>
      <First></First>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  hiddenText: {
    fontSize: 18,
    color: 'blue',
    marginTop: 20,
  },
});

export default App;
