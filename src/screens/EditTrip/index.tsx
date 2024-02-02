import { useCallback, useState } from "react"
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native"

import { Container, NativeInput } from "./styles"
import { Button } from "@components/button"
import { Title } from "@components/title"

import {Input as NativeBaseInput,ScrollView} from "native-base"

import { Header } from "@components/header"
import { Containers, IconGas, IconMap, IconMoney } from "./styles"
import { Label } from "@components/label"
import { tripsGetAll } from "@storage/trip/tripsGetAll"
import { FlatList } from "react-native"
import { tripCreate } from "@storage/trip/tripCreate"
import { tripEdit } from "@storage/trip/tripEdit"

type RouteParams = {
  title: string
}

type UpdatedFields = {
  origin?: string
  destiny?: string
  distance?: number
  efficiency?: number
  fuel?: number
  local?: string
  toll?: number
}

export function EditTrip() {
  const route = useRoute()
  
  const { title } = route.params as RouteParams

  const [origin, setOrigin] = useState(title[1])

  const [destiny, setDestiny] = useState(title[2])

  const [distance, setDistance] = useState(parseFloat(title[3].toString()))

  const [efficiency, setEfficiency] = useState(parseFloat(title[4].toString()))

  const [fuel, setFuel] = useState(parseFloat(title[5].toString()))

  const [local, setLocal] = useState(title[6])

  const [toll, setToll] = useState(parseFloat(title[7].toString()))
 
  const navigation = useNavigation()
  const [updatedFields, setUpdatedFields] = useState<UpdatedFields>({})

 const [trips, setTrips] = useState<object[]>([])

  async function fetchTrips() {
    try {
      const data = await tripsGetAll()
 
      setTrips(data)
    } catch (error) {
      console.log(error)
    }
  }

  async function handleNewTrip() {
    try {
      await tripEdit(title, origin, destiny, distance, efficiency, fuel, local, toll)
      
      navigation.navigate("trips", {
        title,
      })
    } catch (error) {
      console.log(error)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchTrips()
    }, [])
  ) 

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <Container>
        <Header showBackButton />
        <Title title={title[0]} />
        <Containers>
          <Title title=" Distância" />
          <IconMap />
        </Containers>
        <Label label="Origem" />
        <NativeBaseInput
          style={NativeInput}
          mb={4}
          placeholder="Origem da Viagem"
          onChangeText={setOrigin}
          autoCapitalize="sentences"
          color="white"
          value={origin}
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
          color="white"
          value={destiny}
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
          color="white"
          value={distance?.toString() || ""}
          autoCapitalize="sentences"
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
          value={efficiency?.toString() || ""}
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
          color="white"
          value={fuel?.toString()}
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
          value={local}
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
          color="white"
          value={toll.toString()}
          _focus={{
            bg: "gray.800",
            borderWidth: 1,
            borderColor: "blue.500",
          }}
        />
        <Button
          title="Editar viagem"
          style={{ marginTop: 20 }}
          onPress={handleNewTrip}
        />
      </Container>
    </ScrollView>
  )
}
