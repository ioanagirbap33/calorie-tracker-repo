import {createContext, useContext, useState, Dispatch, useEffect} from 'react';
import {FoodDetailsType} from '../components/FoodDetailsCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type ConsumedFoodContextProp = {
  consumedFood: FoodDetailsType[];
  setConsumedFood: Dispatch<React.SetStateAction<FoodDetailsType[]>>;
};

const ConsumedFoodContext = createContext<ConsumedFoodContextProp>({
  consumedFood: [],
  setConsumedFood: () => {},
});

export const useConsumedFood = () => {
  const context = useContext(ConsumedFoodContext);
  if (!context) {
    throw new Error(
      'useConsumedFood must be used within a ConsumedFoodProvider',
    );
  }
  return context;
};

export const ConsumedFoodProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [consumedFood, setConsumedFood] = useState<FoodDetailsType[]>([]);

  useEffect(() => {
    const fetchDataFromStorage = async () => {
      try {
        const storedData = await AsyncStorage.getItem('consumedFood');
        if (storedData !== null) {
          setConsumedFood(JSON.parse(storedData));
        }
      } catch (error) {
        console.error('Error retrieving data from local storage:', error);
      }
    };
    fetchDataFromStorage();
  }, []);

  return (
    <ConsumedFoodContext.Provider value={{consumedFood, setConsumedFood}}>
      {children}
    </ConsumedFoodContext.Provider>
  );
};
