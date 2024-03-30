import {View, Text, StyleSheet, Pressable} from 'react-native';
import {Colors} from '../utils/Colors';

export const FoodDetailsCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.foodTitle}>Apple</Text>
      <View style={styles.foodDetails}>
        <Text style={styles.kcal}>50g - 100kcal</Text>
        <View style={styles.macronutrientsContainer}>
          <View style={styles.macronutrient}>
            <View style={styles.redDot}></View>
            <Text style={styles.macronutrients}>50g</Text>
          </View>
          <View style={styles.macronutrient}>
            <View style={styles.greenDot}></View>
            <Text style={styles.macronutrients}>50g</Text>
          </View>
          <View style={styles.macronutrient}>
            <View style={styles.yellowDot}></View>
            <Text style={styles.macronutrients}>50g</Text>
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
