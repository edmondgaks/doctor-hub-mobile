import { View, Text } from "react-native";
import React from "react";
import Svg, { Path, Rect } from "react-native-svg";


export const OrdersIcon = ({
    size,
    color,
  }: {
    size?: number;
    color?: string;
  }) => (
    <View style={{ width: size ?? 20, height: size ?? 20 }}>
      <Svg viewBox="0 0 12 14" fill="none">
        <Path
          d="M10.3333 2.19995H1.66667C1.29848 2.19995 1 2.46858 1 2.79995V12.4C1 12.7313 1.29848 13 1.66667 13H10.3333C10.7015 13 11 12.7313 11 12.4V2.79995C11 2.46858 10.7015 2.19995 10.3333 2.19995Z"
          stroke={color ?? "gray"}
          strokeWidth="0.7"
          strokeLinejoin="round"
        />
        <Path
          d="M4.00016 1V2.8M8.00016 1V2.8M3.3335 5.5H8.66683M3.3335 7.9H7.3335M3.3335 10.3H6.00016"
          stroke={color ?? "gray"}
          strokeWidth="0.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );