import React from 'react';
import { StyleSheet, View} from 'react-native';
import Index from './Index'
import MyStatusBar from './src/components/MyStatusBar';

export default function App() {
  return (
    <View style={styles.container}>
      <MyStatusBar/>
      <Index/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
