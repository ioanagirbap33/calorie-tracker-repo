import {Text, View} from 'react-native';
import {AddMealSection} from '../components/AddMealSection';
import {SecondaryButton} from '../components/SecondaryButton';
import {useState} from 'react';
import {Statistics} from '../components/Statistics';

export const HomeScreen = () => {
  const [showStatistics, setShowStatistics] = useState(false);

  const handleButton = () => {
    showStatistics ? setShowStatistics(false) : setShowStatistics(true);
  };

  return (
    <View>
      {!showStatistics ? (
        <>
          <SecondaryButton text="Show statistics" pressHandler={handleButton} />
          <AddMealSection />
        </>
      ) : (
        <>
          <SecondaryButton text="Back" pressHandler={handleButton} />
          <Statistics />
        </>
      )}
    </View>
  );
};
