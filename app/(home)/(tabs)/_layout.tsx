import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'react-native';
import { Tabs } from 'expo-router';
import { useColorScheme, SafeAreaView } from 'react-native';

import Colors from '../../../constants/Colors';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -10 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={{ flex: 1, marginTop: -60 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: '',
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          }}
        />
        <Tabs.Screen
          name="favourites"
          options={{
            title: '',
            tabBarIcon: ({ color }) => <TabBarIcon name="heart" color={color} />,
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: '',
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="book-open" size={24} color={color} style={{ marginBottom: -10 }} />
            ),
          }}
        />
        <Tabs.Screen
          name="messaging"
          options={{
            title: '',
            tabBarIcon: ({ color }) => (
              <AntDesign name="message1" size={24} color={color} style={{ marginBottom: -10 }} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}