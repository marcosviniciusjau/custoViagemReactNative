import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Input } from '@components/input'
import { tripCreate } from '@storage/trip/tripCreate'
import { Container, NativeInput} from './styles'
import { Button } from '@components/button'
import { Title } from '@components/title'
import {
  Input as NativeBaseInput,ScrollView,
  Center,
  Image,
  VStack,
} from "native-base"
import { Header } from '@components/header'

export function Home(props: { navigation: { navigate: (arg0: string) => void } }) {

   function handleNewTrip(){
      props.navigation.navigate('new');
   }

  return (
    <Container>
      <Header />
      <Title
        title="Bem Vindo ao Aventuras em Conta!"
        subtitle="Digite o nome da sua viagem"
      />
      <NativeBaseInput
        style={NativeInput}
        mb={4}
        placeholder="Nome da viagem!"
        autoCapitalize="sentences"
        _focus={{
          bg: "gray.800",
          borderWidth: 1,
          borderColor: "blue.500",
          fontFamily:'body',
          fontSize: 'md'
        }}
      />

      <Button title="Criar" onPress={handleNewTrip} />
    </Container>
  )
}
