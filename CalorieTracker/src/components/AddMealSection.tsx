import {SetStateAction, useState} from 'react';
import {
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
    marginTop: 20,
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
  },

  unit: {
    fontSize: 18,
    color: Colors.text,
  },
});
