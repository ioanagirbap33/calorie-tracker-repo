import {View, Text, StyleSheet} from 'react-native';
import {useConsumedFood} from '../contexts/consumedFoodContext';
import {Colors} from '../utils/Colors';
import {BarChart} from 'react-native-chart-kit';
import {useWindowDimensions} from 'react-native';

export const Statistics = () => {
  const {consumedFood} = useConsumedFood();
  const {width: screenWidth} = useWindowDimensions();
  let totalProtein = 0;
  let totalCarbo = 0;
  let totalFat = 0;

  consumedFood.map(
    (consumedFoodDetails, index) => (
      (totalProtein = totalProtein + consumedFoodDetails.protein),
      (totalCarbo = totalCarbo + consumedFoodDetails.carbohydrates),
      (totalFat = totalFat + consumedFoodDetails.fat)
    ),
  );

  const data = {
    labels: ['Protein', 'Carbo', 'Fat'],
    datasets: [
      {
        data: [totalProtein, totalCarbo, totalFat],
      },
    ],
  };
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0.5,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.75,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };

  return (
    <View style={styles.statisticsContainer}>
      <Text style={styles.totalText}>
        Total of protein: {Number(totalProtein).toFixed(2)}
      </Text>
      <Text style={styles.totalText}>
        Total of carbohydrates: {Number(totalCarbo).toFixed(2)}
      </Text>
      <Text style={styles.totalText}>
        Total of fat: {Number(totalFat).toFixed(2)}
      </Text>

      <BarChart
        style={styles.graphStyle}
        data={data}
        width={screenWidth / 1.2}
        height={250}
        yAxisLabel=""
        yAxisSuffix="g"
        chartConfig={chartConfig}
        verticalLabelRotation={30}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  statisticsContainer: {
    gap: 10,
    paddingTop: 20,
  },
  totalText: {
    color: Colors.text,
    fontSize: 20,
  },
  graphStyle: {
    padding: 10,
  },
});
