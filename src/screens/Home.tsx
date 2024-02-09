import { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"

import { Container } from "./styles"

import { Button } from "@components/button"
import { Highlights } from "@components/highlights"
import { Input as NativeBaseInput } from "native-base"
import { Header } from "@components/header"
import { Alert } from "react-native"

export function Home() {
    useEffect(() => {
      setTitle("")
      setTitleValid(true)
      setLengthValid(true)
    }, [])
    
  const [title, setTitle] = useState("")

  const [titleValid, setTitleValid] = useState(false)
  
  const [lengthValid, setLengthValid] = useState(false)
  const navigation = useNavigation()

  function handleNewTrip() {
    try {
      if (!titleValid) {
        Alert.alert("Cadastrar viagem", "Preencha o campo do nome da viagem!")
      }
       else if (!lengthValid) {
         Alert.alert("Cadastrar viagem", "Digite um nome com mais de duas palavras!")
       } else {
         navigation.navigate("new", {
           title,
         })
       }
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
        error={titleValid && lengthValid ? "" : "Preencha o campo corretamente"}
      />

      <NativeBaseInput
        mb={4}
        placeholder="Nome da viagem!"
        size={3}
        autoCapitalize="sentences"
        borderColor={titleValid ? "" : "red.500"}
        _focus={{
          bg: "gray.800",
          borderWidth: 1,
          fontFamily: "body",
          fontSize: "md",
          color: "white",
        }}
        onChangeText={(text) => {
          setTitle(text)
          setTitleValid(text.trim() !== "")
          setLengthValid(text.length > 2)
        }}
      />

      <Button title="Criar" onPress={handleNewTrip} style={{ marginTop: 20 }} />
    </Container>
  )
}
