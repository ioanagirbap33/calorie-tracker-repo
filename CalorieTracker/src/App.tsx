import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {Colors} from './utils/Colors';
import {ConsumedFoodProvider} from './contexts/consumedFoodContext';
import {SecondaryButton} from './components/SecondaryButton';
import {AddMealSection} from './components/AddMealSection';
import {Statistics} from './components/Statistics';

function App(): React.JSX.Element {
  const [showStatistics, setShowStatistics] = useState(false);

  const handleButton = () => {
    showStatistics ? setShowStatistics(false) : setShowStatistics(true);
  };
  return (
    <ConsumedFoodProvider>
      <View style={styles.appContainer}>
        <SafeAreaView>
          <Text style={styles.title}>Calorie Counter</Text>
          <View>
            {!showStatistics ? (
              <>
                <SecondaryButton
                  text="Show statistics"
                  pressHandler={handleButton}
                />
                <AddMealSection />
              </>
            ) : (
              <>
                <SecondaryButton text="Back" pressHandler={handleButton} />
                <Statistics />
              </>
            )}
          </View>
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
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    color: Colors.text,
  },
});

export default App;
