import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {Colors} from './utils/Colors';
import {HomeScreen} from './screens/HomeScreen';
import {ConsumedFoodProvider} from './components/contexts/consumedFoodContext';

function App(): React.JSX.Element {
  return (
    <ConsumedFoodProvider>
      <View style={styles.appContainer}>
        <SafeAreaView>
          <Text style={styles.title}>Calorie Counter</Text>
          <HomeScreen />
        </SafeAreaView>
      </View>
    </ConsumedFoodProvider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: Colors.background,
    flex: 1,
    paddingTop: 90,
    paddingHorizontal: 20,
    paddingBottom: 50,
    // display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    color: Colors.text,
  },
});

export default App;