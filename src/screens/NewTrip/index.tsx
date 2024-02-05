import { useState } from "react"
import { useNavigation, useRoute } from "@react-navigation/native"

import { tripCreate } from "@storage/trip/tripCreate"
import { Container, NativeInput } from "./styles"
import { Button } from "@components/button"
import { Title } from "@components/title"
import {Input as NativeBaseInput,ScrollView} from "native-base"

import { Header } from "@components/header"
import { Containers, IconGas, IconMap, IconMoney } from "./styles"
import { Label } from "@components/label"

type RouteParams= {
  title:string;
}
type NumericValue = string | number

export function NewTrip() {
  const route = useRoute()
  const { title } = route.params as RouteParams

  const [origin, setOrigin] = useState("")
  const [destiny, setDestiny] = useState("")
  const [distance, setDistance] = useState<NumericValue>(0.0)
  const [efficiency, setEfficiency] = useState<NumericValue>(0.0)
  const [fuel, setFuel] = useState<NumericValue>(0.0)
  const [local, setLocal] = useState("")
  const [toll, setToll] = useState<NumericValue>(0.0)

  const navigation = useNavigation()

  async function handleNewTrip() {
    try {
      await tripCreate(
        title,
        origin,
        destiny,
        parseFloat(distance as string),
        parseFloat(efficiency as string),
        parseFloat(fuel as string),
        local,
        parseFloat(toll as string)
      )
      navigation.navigate("trips", {
        title,
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <Container>
        <Header showBackButton />

        <Title title={title} />

        <Containers>
          <Title title="Distância" />
          <IconMap />
        </Containers>

        <Label label="Origem" />
        <NativeBaseInput
          style={NativeInput}
          onChangeText={setOrigin}
          mb={4}
          placeholder="Origem da Viagem"
          color="white"
          autoCapitalize="sentences"
          _focus={{
            bg: "gray.800",
            borderWidth: 1,
            borderColor: "blue.500",
          }}
        />
        <Label label="Destino" />
        <NativeBaseInput
          style={NativeInput}
          mb={4}
          placeholder="Destino da Viagem"
          onChangeText={setDestiny}
          color="white"
          autoCapitalize="sentences"
          _focus={{
            bg: "gray.800",
            borderWidth: 1,
            borderColor: "blue.500",
          }}
        />
        <Label label="Distância" />
        <NativeBaseInput
          style={NativeInput}
          mb={4}
          placeholder="Distância da Viagem"
          onChangeText={(text) => setDistance(Number(text))}
          keyboardType="numeric"
          autoCapitalize="sentences"
          color="white"
          _focus={{
            bg: "gray.800",
            borderWidth: 1,
            borderColor: "blue.500",
          }}
        />
        <Containers>
          <Title title=" Combustivel" />
          <IconGas />
        </Containers>
        <Label label="Eficiência por km/l" />
        <NativeBaseInput
          style={NativeInput}
          mb={4}
          placeholder="Km/l"
          onChangeText={(text) => setEfficiency(Number(text))}
          keyboardType="numeric"
          autoCapitalize="sentences"
          color="white"
          _focus={{
            bg: "gray.800",
            borderWidth: 1,
            borderColor: "blue.500",
          }}
        />
        <Label label="Preço combustivel" />
        <NativeBaseInput
          style={NativeInput}
          mb={4}
          onChangeText={(text) => setFuel(Number(text))}
          placeholder="Preço do combustivel"
          color="white"
          keyboardType="numeric"
          autoCapitalize="sentences"
          _focus={{
            bg: "gray.800",
            borderWidth: 1,
            borderColor: "blue.500",
          }}
        />
        <Containers>
          <Title title="Pedágios" />
          <IconMoney />
        </Containers>
        <Label label="Localização Pedágio" />
        <NativeBaseInput
          style={NativeInput}
          mb={4}
          placeholder="Localização do Pedágio"
          onChangeText={setLocal}
          color="white"
          autoCapitalize="sentences"
          _focus={{
            bg: "gray.800",
            borderWidth: 1,
            borderColor: "blue.500",
          }}
        />
        <Label label="Preço pedágio" />
        <NativeBaseInput
          style={NativeInput}
          mb={4}
          placeholder="Preço do pedágio"
          onChangeText={(text) => setToll(Number(text))}
          color="white"
          autoCapitalize="sentences"
          keyboardType="numeric"
          _focus={{
            bg: "gray.800",
            borderWidth: 1,
            borderColor: "blue.500",
          }}
        />
        <Button
          title="Criar nova viagem"
          style={{ marginTop: 20 }}
          onPress={handleNewTrip}
        />
      </Container>
    </ScrollView>
  )
}
