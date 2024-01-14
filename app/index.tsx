import { View } from "react-native"
import React, { useEffect, useState } from "react";
import { Redirect, useRootNavigation } from "expo-router";
import useStorage from "../hooks/useStorage";
import { LOCAL_STORAGE_TOKEN_KEY } from "../constants/config";
const IndexPage = () => {
    const {getData} = useStorage();
    const [token, setToken] = useState<string | null>(null);
    getData(LOCAL_STORAGE_TOKEN_KEY).then((res) => {
        setToken(res);
    });
    const rootNavigation = useRootNavigation();
    const [ready, setReady] = React.useState(false);

    useEffect(() => {
        const unsubscribe = rootNavigation?.addListener("state", (e) => {
          setReady(true);
        });
        return () => {
          if (unsubscribe) unsubscribe();
        };
    }, [rootNavigation]);
    
    if (!ready) return null;

    return (
        <View>
            {token ? <Redirect href={"/(tabs)/_layout"} /> : <Redirect href={"/landing"} />}
        </View>
    )
}