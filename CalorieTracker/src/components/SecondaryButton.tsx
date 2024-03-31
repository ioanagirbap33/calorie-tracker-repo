import {View, Text, Pressable, StyleSheet} from 'react-native';
import {Colors} from '../utils/Colors';

type SecondaryButtonType = {
  text: string;
  pressHandler: () => void;
};

export const SecondaryButton = ({text, pressHandler}: SecondaryButtonType) => {
  return (
    <View style={styles.secondaryButton}>
      <Pressable
        style={({pressed}) => (pressed ? styles.pressed : null)}
        onPress={pressHandler}>
        <Text style={styles.buttonText}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  secondaryButton: {
    borderColor: Colors.text,
    borderWidth: 1,
    padding: 2,
    borderRadius: 5,
    marginVertical: 10,
    marginTop: 20,
    alignSelf: 'flex-start',
  },
  pressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: Colors.text,
    fontSize: 16,
  },
});
