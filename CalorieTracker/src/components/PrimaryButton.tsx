import {View, Text, Pressable, StyleSheet} from 'react-native';
import {Colors} from '../utils/Colors';

type PrimaryButtonType = {
  text: string;
  pressHandler: () => void;
};

export const PrimaryButton = ({text, pressHandler}: PrimaryButtonType) => {
  return (
    <View style={styles.primaryButton}>
      <Pressable
        style={({pressed}) => (pressed ? styles.pressed : null)}
        onPress={pressHandler}>
        <Text style={styles.buttonText}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: Colors.button,
    padding: 10,
    borderRadius: 10,
  },
  pressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: Colors.text,
    fontSize: 16,
  },
});
