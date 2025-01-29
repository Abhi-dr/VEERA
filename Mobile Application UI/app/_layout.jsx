import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import {SessionProvider} from '../context/ctx.jsx';
import { SafeAreaView } from 'react-native-safe-area-context';
import registerNNPushToken from 'native-notify';

// import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    registerNNPushToken(23095, 't7U6tMbwevUKc9gC7Eddsf');

  const colorScheme = 'light';
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/Poppins-Regular.ttf'),
  });



  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);






  return (
    <SessionProvider>
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* <SafeAreaView> */}
      <Stack
      screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="index" options={{}} />
        <Stack.Screen name="(auth)" options={{}} />
        <Stack.Screen name="(tabs)" options={{}} />
        <Stack.Screen name="(drawer)" options={{}} />
      </Stack>
        {/* </SafeAreaView> */}
    </ThemeProvider>
    </SessionProvider>
  );
}
