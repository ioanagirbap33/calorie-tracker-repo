import {SetStateAction, useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TextInputComponent,
  View,
} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import {FoodType, foodListMock} from '../mocks/foodMocks';
import {Colors} from '../utils/Colors';
import {PrimaryButton} from './PrimaryButton';
import {FoodDetailsCard} from './FoodDetailsCard';

export const AddMealSection = () => {
  const [selected, setSelected] = useState<FoodType>();
  const [totalCalories, setTotalCalories] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const addHandler = () => {
    if (selected && inputValue) {
      const quantity = parseFloat(inputValue);
      const kcalAdded = selected?.kcal;
      const total = totalCalories + (kcalAdded * quantity) / 100;
      setTotalCalories(total);
      setInputValue('');
    }
  };

  return (
    <View style={styles.AddMealSectionContainer}>
      <SelectList
        data={foodListMock}
        setSelected={(val: FoodType) => setSelected(val)}
      />
      <View style={styles.quantityContainerWrapper}>
        <View style={styles.quantityContainer}>
          <TextInput
            style={styles.quantityInput}
            keyboardType="numeric"
            autoCapitalize="none"
            autoCorrect={false}
            value={inputValue}
            onChangeText={setInputValue}
          />
          <Text style={styles.unit}>g</Text>
        </View>
        <View>
          <PrimaryButton text="Add" pressHandler={addHandler} />
        </View>
      </View>
      <Text style={styles.totalText}>Total kcal: {totalCalories}</Text>
      <FoodDetailsCard
        foodDetails={{
          name: 'Egg',
          kcal: 70,
          carbohydrates: 0.4,
          protein: 6.3,
          fat: 4.8,
          quantity: 50,
        }}></FoodDetailsCard>
    </View>
  );
};

const styles = StyleSheet.create({
  AddMealSectionContainer: {
    paddingVertical: 20,
    color: Colors.text,
  },
  searchContainer: {
    color: Colors.text,
  },
  quantityContainerWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 10,
  },

  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  quantityInput: {
    backgroundColor: Colors.card,
    width: 70,
    height: 35,
    borderRadius: 10,
    color: Colors.text,
    fontSize: 18,
    textAlign: 'center',
  },

  unit: {
    fontSize: 18,
    color: Colors.text,
  },

  totalText: {
    color: Colors.text,
    fontSize: 20,
  },
});
