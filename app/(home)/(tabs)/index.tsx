import { Text } from 'react-native';
import { StyleSheet, View } from 'react-native';
import EditScreenInfo from '../../../components/EditScreenInfo';


export default function TabOneScreen() {
  return (
    <View className="flex-1 h-full w-full bg-white justify-center items-center">
      <Text className="text-2xl font-medium">Tab One</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
