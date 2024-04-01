import {SetStateAction, useEffect, useState} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SelectList} from 'react-native-dropdown-select-list';
import {FoodType, foodListMock} from '../mocks/foodMocks';
import {Colors} from '../utils/Colors';
import {PrimaryButton} from './PrimaryButton';
import {FoodDetailsCard, FoodDetailsType} from './FoodDetailsCard';
import {useConsumedFood} from '../contexts/consumedFoodContext';

export const AddMealSection = () => {
  const [selectedFood, setSelectedFood] = useState<FoodType>();
  const [totalCalories, setTotalCalories] = useState(0);
  const [quantityValue, setQuantityValue] = useState('');

  const {consumedFood, setConsumedFood} = useConsumedFood();

  useEffect(() => {
    let totalKcal = 0;
    consumedFood.map(
      consumedFoodDetails => (totalKcal = totalKcal + consumedFoodDetails.kcal),
    );
    setTotalCalories(totalKcal);
  }, [consumedFood]);

  const storeData = async (key: string, value: any) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error storing data:', error);
    }
  };

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

      setConsumedFood([...consumedFood, newAddedFood]);
      setQuantityValue('');
      storeData('consumedFood', [...consumedFood, newAddedFood]);
    }
  };

  const restartHandler = () => {
    setConsumedFood([]);
    setTotalCalories(0);
    AsyncStorage.removeItem('consumedFood');
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
        <View style={styles.buttonsContainer}>
          <PrimaryButton text="Add" pressHandler={addHandler} />
          <PrimaryButton text="Reset" pressHandler={restartHandler} />
        </View>
      </View>
      <Text style={styles.totalText}>
        Total kcal: {Number(totalCalories).toFixed(2)}
      </Text>

      <View style={styles.listContainer}>
        <FlatList
          data={consumedFood}
          renderItem={item => {
            return (
              <View>
                <FoodDetailsCard foodDetails={item.item} />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  AddMealSectionContainer: {
    paddingVertical: 0,
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
  buttonsContainer: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  listContainer: {
    maxHeight: '70%',
  },
});
