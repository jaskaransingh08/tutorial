import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleMenu} style={styles.hamburger}>
        <Text style={{fontSize:20}}>=</Text>
      </TouchableOpacity>
      {menuOpen && (
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem}>
            <Text>Menu Item 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text>Menu Item 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text>Menu Item 3</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.content}>
        {/* Your main content goes here */}
        <Text>Main Content</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 40,
  },
  hamburger: {
    paddingHorizontal: 10,
  },
  menu: {
    backgroundColor: '#f0f0f0',
    position: 'absolute',
    top: 0,
    left: 0,
    width: 200,
    zIndex: 1,
    paddingTop: 40,
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
