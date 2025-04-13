import { View, Image, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import React from 'react';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/images/dong.png')} style={styles.logo} />
      </View>
      <WebView source={{ uri: 'https://carlarocha.vercel.app' }} style={styles.webview} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#13181f',
  },
  logoContainer: {
    flex: 0,                  // Makes sure the logo stays fixed in size
    alignItems: 'center',     // Centers logo horizontally
    justifyContent: 'center', // Centers logo vertically
  },
  logo: {
    width: 100,
    height: 60,
    resizeMode: 'contain',
  },
  webview: {
    flex: 1,           // WebView takes the rest of the space
    width: '100%',
  },
});
