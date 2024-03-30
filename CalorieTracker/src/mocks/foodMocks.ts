export type FoodType = {
  name: string;
  kcal: number;
  carbohydrates: number;
  protein: number;
  fat: number;
};

export const foodListMock: {key: FoodType; value: string}[] = [
  {
    key: {
      name: 'Egg',
      kcal: 70,
      carbohydrates: 0.4,
      protein: 6.3,
      fat: 4.8,
    },
    value: 'Egg',
  },
  {
    key: {
      name: 'Banana',
      kcal: 105,
      carbohydrates: 27,
      protein: 1.3,
      fat: 0.4,
    },
    value: 'Banana',
  },
  {
    key: {
      name: 'Chicken (skinless, boneless breast)',
      kcal: 165,
      carbohydrates: 0,
      protein: 31,
      fat: 3.6,
    },
    value: 'Chicken (skinless, boneless breast)',
  },
  {
    key: {
      name: 'Quinoa',
      kcal: 120,
      carbohydrates: 21,
      protein: 4,
      fat: 2,
    },
    value: 'Quinoa',
  },
  {
    key: {
      name: 'Avocado',
      kcal: 160,
      carbohydrates: 9,
      protein: 2,
      fat: 15,
    },
    value: 'Avocado',
  },
  {
    key: {
      name: 'Salmon',
      kcal: 206,
      carbohydrates: 0,
      protein: 22,
      fat: 13,
    },
    value: 'Salmon',
  },
  {
    key: {
      name: 'Brown Rice',
      kcal: 216,
      carbohydrates: 45,
      protein: 5,
      fat: 1.6,
    },
    value: 'Brown Rice',
  },
  {
    key: {
      name: 'Spinach',
      kcal: 23,
      carbohydrates: 3.6,
      protein: 2.9,
      fat: 0.4,
    },
    value: 'Spinach',
  },
  {
    key: {
      name: 'Almonds',
      kcal: 579,
      carbohydrates: 22,
      protein: 21,
      fat: 49,
    },
    value: 'Almonds',
  },
  {
    key: {
      name: 'Greek Yogurt (plain, low-fat)',
      kcal: 59,
      carbohydrates: 3.6,
      protein: 10,
      fat: 0.4,
    },
    value: 'Greek Yogurt (plain, low-fat)',
  },
  {
    key: {
      name: 'Apple',
      kcal: 95,
      carbohydrates: 25,
      protein: 0.5,
      fat: 0.3,
    },
    value: 'Apple',
  },
  {
    key: {
      name: 'Broccoli',
      kcal: 55,
      carbohydrates: 11,
      protein: 4.2,
      fat: 0.4,
    },
    value: 'Broccoli',
  },
  {
    key: {
      name: 'Cucumber',
      kcal: 16,
      carbohydrates: 3.6,
      protein: 0.7,
      fat: 0.1,
    },
    value: 'Cucumber',
  },
  {
    key: {
      name: 'Carrot',
      kcal: 41,
      carbohydrates: 10,
      protein: 0.9,
      fat: 0.2,
    },
    value: 'Carrot',
  },
  {
    key: {
      name: 'Tuna (canned in water)',
      kcal: 116,
      carbohydrates: 0,
      protein: 26,
      fat: 1,
    },
    value: 'Tuna (canned in water)',
  },
  {
    key: {
      name: 'Whole Wheat Bread',
      kcal: 69,
      carbohydrates: 12,
      protein: 2.6,
      fat: 0.8,
    },
    value: 'Whole Wheat Bread',
  },
  {
    key: {
      name: 'Sweet Potato',
      kcal: 86,
      carbohydrates: 20,
      protein: 1.6,
      fat: 0.1,
    },
    value: 'Sweet Potato',
  },
  {
    key: {
      name: 'Peanut Butter',
      kcal: 188,
      carbohydrates: 6,
      protein: 8,
      fat: 16,
    },
    value: 'Peanut Butter',
  },
  {
    key: {
      name: 'Milk (1% fat)',
      kcal: 42,
      carbohydrates: 4.7,
      protein: 3.4,
      fat: 1,
    },
    value: 'Milk (1% fat)',
  },
  {
    key: {
      name: 'Cheese (cheddar)',
      kcal: 113,
      carbohydrates: 0.4,
      protein: 7,
      fat: 9,
    },
    value: 'Cheese (cheddar)',
  },
  {
    key: {
      name: 'Oatmeal',
      kcal: 68,
      carbohydrates: 12,
      protein: 2.5,
      fat: 1.4,
    },
    value: 'Oatmeal',
  },
  {
    key: {
      name: 'Black Beans (canned)',
      kcal: 88,
      carbohydrates: 15,
      protein: 5,
      fat: 0.5,
    },
    value: 'Black Beans (canned)',
  },
  {
    key: {
      name: 'Lentils',
      kcal: 116,
      carbohydrates: 20,
      protein: 9,
      fat: 0.4,
    },
    value: 'Lentils',
  },
  {
    key: {
      name: 'Yogurt (low-fat, fruit flavored)',
      kcal: 106,
      carbohydrates: 18,
      protein: 6,
      fat: 1.5,
    },
    value: 'Yogurt (low-fat, fruit flavored)',
  },
  {
    key: {
      name: 'Tomato',
      kcal: 18,
      carbohydrates: 4,
      protein: 0.9,
      fat: 0.2,
    },
    value: 'Tomato',
  },
  {
    key: {
      name: 'Orange',
      kcal: 62,
      carbohydrates: 15,
      protein: 1.2,
      fat: 0.2,
    },
    value: 'Orange',
  },
  {
    key: {
      name: 'Pasta (cooked)',
      kcal: 158,
      carbohydrates: 31,
      protein: 5,
      fat: 1.1,
    },
    value: 'Pasta (cooked)',
  },
  {
    key: {
      name: 'Cottage Cheese (low-fat)',
      kcal: 81,
      carbohydrates: 3.4,
      protein: 11,
      fat: 2.3,
    },
    value: 'Cottage Cheese (low-fat)',
  },
  {
    key: {
      name: 'Hummus',
      kcal: 166,
      carbohydrates: 9,
      protein: 8,
      fat: 10,
    },
    value: 'Hummus',
  },
  {
    key: {
      name: 'Peach',
      kcal: 59,
      carbohydrates: 15,
      protein: 1.2,
      fat: 0.4,
    },
    value: 'Peach',
  },
  {
    key: {
      name: 'Raspberries',
      kcal: 52,
      carbohydrates: 11,
      protein: 1.5,
      fat: 0.7,
    },
    value: 'Raspberries',
  },
];
