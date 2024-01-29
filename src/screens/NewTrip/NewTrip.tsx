import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { tripCreate } from "@storage/trip/tripCreate"
import { Container, NativeInput } from "./styles"
import { Button } from "@components/button"
import { Input as NativeBaseInput, ScrollView } from "native-base"
import { Header } from "@components/header"
import { Containers, IconGas, IconMap, IconMoney } from "./styles"
import { Highlights } from "@components/highlights"
import { Label } from "@components/label"

export function NewTrip() {
  const [origin, setOrigin] = useState("")

  const [destiny, setDestiny] = useState("")

  const [distance, setDistance] = useState(0)

  const [efficiency, setEfficiency] = useState(0)

  const [fuel, setFuel] = useState(0)

  const [local, setLocal] = useState("")

  const [toll, setToll] = useState(0)

  const navigation = useNavigation()

  async function handleNewTrip() {
    try {
      await tripCreate(origin, destiny, distance, efficiency, fuel, local, toll)
      navigation.navigate("trips", {
        origin,
        destiny,
        distance,
        efficiency,
        fuel,
        local,
        toll,
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
        <Containers>
          <Highlights title=" Distância" />
          <IconMap />
        </Containers>
        <Label label="Origem" />
        <NativeBaseInput
          style={NativeInput}
          onChangeText={setOrigin}
          mb={4}
          placeholder="Origem da Viagem"
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
          _focus={{
            bg: "gray.800",
            borderWidth: 1,
            borderColor: "blue.500",
          }}
        />
        <Containers>
          <Highlights title=" Combustivel" />
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
          keyboardType="numeric"
          autoCapitalize="sentences"
          _focus={{
            bg: "gray.800",
            borderWidth: 1,
            borderColor: "blue.500",
          }}
        />
        <Containers>
          <Highlights title="Pedágios" />
          <IconMoney />
        </Containers>
        <Label label="Localização Pedágio" />
        <NativeBaseInput
          style={NativeInput}
          mb={4}
          placeholder="Localização do Pedágio"
          onChangeText={setLocal}
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
