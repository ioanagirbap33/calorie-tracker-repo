import {createContext, useContext, useState, Dispatch} from 'react';
import {FoodDetailsType} from '../components/FoodDetailsCard';

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
  return (
    <ConsumedFoodContext.Provider value={{consumedFood, setConsumedFood}}>
      {children}
    </ConsumedFoodContext.Provider>
  );
};
