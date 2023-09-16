import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function Layout({ children }) {
    const [isLoaded] = useFonts({
        DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
        DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
        DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
    });

    const onLayoutRootView = useCallback(async () => {
        if (isLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [isLoaded]);

    if (!isLoaded) {
        return null;
    }

    return <Stack onLayout={onLayoutRootView}/>;
}
