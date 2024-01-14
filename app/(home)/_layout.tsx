import { Slot, Stack, usePathname, useSegments } from "expo-router";
import React from "react";
import { StatusBar } from "expo-status-bar";

const HomeLayout = (props: any) => {
  const pathname = usePathname();  

  return (
    <>
      <StatusBar
        style="dark"
        backgroundColor={pathname !== '/' ? "#fff" : "#0EBE7E"} />
      <Stack screenOptions={{animation: 'slide_from_right', headerShown: false}} />
    </>
  );
};

export default HomeLayout;