import { ActivityIndicator } from "react-native";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto"

import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import { Routes } from "@routes/index";

export default function App() {
  const [fontsLoaded]= useFonts({Roboto_400Regular,Roboto_700Bold});



  return (
    <ThemeProvider theme={theme}>
      <NativeBaseProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        ></StatusBar>
        { fontsLoaded ? <Routes /> : <ActivityIndicator/>}
      </NativeBaseProvider>
    </ThemeProvider>
  )
}
