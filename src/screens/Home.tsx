import { useState } from "react"
import { useNavigation } from "@react-navigation/native"

import { tripTitleCreate } from "@storage/tripTitle/tripTitleCreate"
import { Container, NativeInput } from "./styles"

import { Button } from "@components/button"
import { Highlights } from "@components/highlights"
import { Input as NativeBaseInput } from "native-base"
import { Header } from "@components/header"

export function Home() {
  const [title, setTitle] = useState('')

  const navigation = useNavigation()

  
  async function handleNewTrip() {
    try {
      await tripTitleCreate(
        title
      )
      navigation.navigate("new", {
        title,
      })
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <Container>
      <Header />
      <Highlights
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
          fontFamily: "body",
          fontSize: "md",
          color: "white",
        }}
        onChangeText={setTitle}
      />

      <Button title="Criar" onPress={handleNewTrip} />
    </Container>
  )
}
