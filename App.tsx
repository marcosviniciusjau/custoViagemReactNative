import { StatusBar } from 'react-native';
import { NativeBaseProvider } from "native-base"
import { Routes } from '@routes/index';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
  <NativeBaseProvider>
   <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent>
   </StatusBar>
   <Routes/>
  </NativeBaseProvider>
  )
}

