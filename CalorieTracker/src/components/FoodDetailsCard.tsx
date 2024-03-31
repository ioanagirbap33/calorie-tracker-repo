import {View, Text, StyleSheet, Pressable} from 'react-native';
import {Colors} from '../utils/Colors';

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
          {foodDetails.quantity}g - {Number(foodDetails.kcal).toFixed(2)}kcal
        </Text>
        <View style={styles.macronutrientsContainer}>
          <View style={styles.macronutrient}>
            <View style={styles.redDot}></View>
            <Text style={styles.macronutrients}>
              {Number(foodDetails.protein).toFixed(2)}g
            </Text>
          </View>
          <View style={styles.macronutrient}>
            <View style={styles.greenDot}></View>
            <Text style={styles.macronutrients}>
              {Number(foodDetails.carbohydrates).toFixed(2)}g
            </Text>
          </View>
          <View style={styles.macronutrient}>
            <View style={styles.yellowDot}></View>
            <Text style={styles.macronutrients}>
              {Number(foodDetails.fat).toFixed(2)}g
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    flexDirection: 'row',
    padding: 10,
    gap: 20,
    marginTop: 20,
    justifyContent: 'space-between',
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
