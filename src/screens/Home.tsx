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
import Logo from '@assets/logo.png'
import { GasPump,MapPin   } from 'phosphor-react-native'
import { Header } from '@components/header'

export function Home() {
   const [tripName, setTripName] = useState("")

  return (
    <Container>
     
        <Title title="Bem Vindo ao Aventuras em Conta!" />
        <Title title="Digite o nome da sua viagem" />
        <NativeBaseInput
          style={NativeInput}
          onChangeText={setTripName}
          autoCapitalize="sentences"
          _focus={{
            bg: "gray.800",
            borderWidth: 1,
            borderColor: "blue.500",
          }}
        />

        <Button title="Criar" />

    </Container>
  )
}
