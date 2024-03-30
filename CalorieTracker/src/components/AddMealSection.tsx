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

export const AddMealSection = () => {
  const [selected, setSelected] = useState<FoodType>();

  return (
    <View style={styles.AddMealSectionContainer}>
      <SelectList
        data={foodListMock}
        setSelected={(val: FoodType) => setSelected(val)}
      />
      <View style={styles.quantityContainer}>
        <TextInput
          style={styles.quantityInput}
          keyboardType="numeric"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Text style={styles.unit}>g</Text>
        <Button title="Add" />
      </View>
      <Text style={styles.totalText}>Total kcal: {1500}</Text>
      {/* <Text>{selected?.name}</Text> */}
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

  quantityContainer: {
    flexDirection: 'row',
    marginVertical: 10,
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
