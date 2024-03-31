import {Text, View} from 'react-native';
import {AddMealSection} from '../components/AddMealSection';
import {SecondaryButton} from '../components/SecondaryButton';
import {useState} from 'react';

export const HomeScreen = () => {
  const [showStatistics, setShowStatistics] = useState(false);

  const handleButton = () => {
    setShowStatistics(true);
  };
  return (
    <View>
      {!showStatistics ? (
        <>
          <SecondaryButton text="Show statistics" pressHandler={handleButton} />
          <AddMealSection />
        </>
      ) : (
        <View>
          <Text>Hi</Text>
        </View>
      )}
    </View>
  );
};
