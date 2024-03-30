import {View, Text, StyleSheet, Pressable} from 'react-native';
import {Colors} from '../utils/Colors';
import {FoodType} from '../mocks/foodMocks';

export type FoodDetailsType = {
  quantity: number;
  name: string;
  kcal: number;
  carbohydrates: number;
  protein: number;
  fat: number;
};

type FoodDetailsCardProps = {
  foodDetails: FoodDetailsType;
};

export const FoodDetailsCard = ({foodDetails}: FoodDetailsCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.foodTitle}>{foodDetails.name}</Text>
      <View style={styles.foodDetails}>
        <Text style={styles.kcal}>
          {foodDetails.quantity}g - {foodDetails.kcal}kcal
        </Text>
        <View style={styles.macronutrientsContainer}>
          <View style={styles.macronutrient}>
            <View style={styles.redDot}></View>
            <Text style={styles.macronutrients}>{foodDetails.protein}g</Text>
          </View>
          <View style={styles.macronutrient}>
            <View style={styles.greenDot}></View>
            <Text style={styles.macronutrients}>
              {foodDetails.carbohydrates}g
            </Text>
          </View>
          <View style={styles.macronutrient}>
            <View style={styles.yellowDot}></View>
            <Text style={styles.macronutrients}>{foodDetails.fat}g</Text>
          </View>
        </View>
      </View>
      <Pressable>
        <View>
          <Text style={styles.macronutrients}>X</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    flexDirection: 'row',
    padding: 10,
    gap: 20,
    marginTop: 50,
  },
  foodTitle: {
    fontSize: 24,
    color: Colors.text,
  },
  foodDetails: {
    gap: 10,
  },
  kcal: {
    color: Colors.text,
    fontSize: 18,
  },
  macronutrientsContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  macronutrients: {
    color: Colors.text,
    fontSize: 14,
  },
  macronutrient: {
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center',
  },
  redDot: {
    width: 10,
    height: 10,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  greenDot: {
    width: 10,
    height: 10,
    backgroundColor: 'green',
    borderRadius: 10,
  },
  yellowDot: {
    width: 10,
    height: 10,
    backgroundColor: 'yellow',
    borderRadius: 10,
  },
});
