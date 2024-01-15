import { Image, Text } from 'react-native';
import { StyleSheet, View } from 'react-native';
import EditScreenInfo from '../../../components/EditScreenInfo';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';


export default function TabOneScreen() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const handleCancelPress = () => {
    setInputValue('');
  };
  return (
    <View className="h-full w-full bg-white">
      <View className="z-0 h-36 w-full p-6 flex flex-row justify-between items-center bg-[#0EBE7E] rounded-b-3xl">
        <View className="flex-col gap-1">
          <Text className="text-xl text-white">Hi HardWerker!</Text>
          <Text className="text-3xl font-bold text-white">Find Your doctor</Text>
        </View>
        <Image source={require("../../../assets/images/home-profile.png")} />      
      </View>
      <View className="p-3 w-[80%] rounded-lg mx-auto flex flex-row items-center z-10 bottom-6 bg-white border border-[#677294] shadow-3xl">
        <Feather name="search" size={24} color="black" className="" />
        <TextInput className="shadow-3xl ml-2 placeholder:text-base rounded-md" placeholder="Search...." 
        value={inputValue}
        onChangeText={handleInputChange}></TextInput>
      </View>
      <View className="h-64 w-full p-3">
        <Text className="font-semibold text-xl">Live Doctors</Text>
        <View className="w-full flex flex-row">
        <Image source={require("../../../assets/images/doctor1.png")} />  
        <Image source={require("../../../assets/images/doctor1.png")} />  
        <Image source={require("../../../assets/images/doctor1.png")} />  
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
