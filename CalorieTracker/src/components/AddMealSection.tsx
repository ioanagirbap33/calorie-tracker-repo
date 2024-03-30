import {SetStateAction, useState} from 'react';
import {
  Button,
  FlatList,
  ScrollView,
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
import {FoodDetailsCard, FoodDetailsType} from './FoodDetailsCard';
import {useConsumedFood} from './contexts/consumedFoodContext';

export const AddMealSection = () => {
  const [selectedFood, setSelectedFood] = useState<FoodType>();
  const [totalCalories, setTotalCalories] = useState(0);
  const [quantityValue, setQuantityValue] = useState('');

  const {consumedFood, setConsumedFood} = useConsumedFood();

  const addHandler = () => {
    if (selectedFood && quantityValue) {
      const quantity = Number(quantityValue);

      const newAddedFood: FoodDetailsType = {
        quantity,
        name: selectedFood?.name,
        kcal: (selectedFood.kcal * quantity) / 100,
        protein: (selectedFood.protein * quantity) / 100,
        carbohydrates: (selectedFood.carbohydrates * quantity) / 100,
        fat: (selectedFood.fat * quantity) / 100,
      };

      const total = totalCalories + (selectedFood.kcal * quantity) / 100;

      setConsumedFood([...consumedFood, newAddedFood]);
      console.log(consumedFood);
      setTotalCalories(total);
      setQuantityValue('');
    }
  };

  return (
    <View style={styles.AddMealSectionContainer}>
      <SelectList
        data={foodListMock}
        setSelected={(val: FoodType) => setSelectedFood(val)}
      />
      <View style={styles.quantityContainerWrapper}>
        <View style={styles.quantityContainer}>
          <TextInput
            style={styles.quantityInput}
            keyboardType="numeric"
            autoCapitalize="none"
            autoCorrect={false}
            value={quantityValue}
            onChangeText={setQuantityValue}
          />
          <Text style={styles.unit}>g</Text>
        </View>
        <View>
          <PrimaryButton text="Add" pressHandler={addHandler} />
        </View>
      </View>
      <Text style={styles.totalText}>
        Total kcal: {Number(totalCalories).toFixed(2)}
      </Text>
      <View style={styles.cardsContainer}>
        <ScrollView>
          {consumedFood.map((consumedFoodDetails, index) => (
            <View key={index}>
              <FoodDetailsCard foodDetails={consumedFoodDetails} />
            </View>
          ))}
        </ScrollView>
      </View>
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
  cardsContainer: {
    // padding: 20,
  },
});
