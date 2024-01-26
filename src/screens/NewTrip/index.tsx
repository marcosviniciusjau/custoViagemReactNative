import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Input } from '@components/input'
import { tripCreate } from '@storage/trip/tripCreate'
import { Container,Containers, NativeInput,Content, IconGas, IconMap, IconMoney} from './styles'
import { Button } from '@components/button'
import { Label } from '@components/label'
import {Input as NativeBaseInput,ScrollView} from "native-base"
import { GasPump,MapPin } from 'phosphor-react-native'
import { Header } from '@components/header'
import { Highlights } from '@components/highlights'
export function NewTrip() {
  const [tripOrigin, setTripOrigin] = useState("")

  const [tripDestiny, setTripDestiny] = useState("")

  const [tripDistancy, setTripDistancy] = useState("")

  const [tripEficiency, setTripEficiency] = useState("")

  const [tripFuel, setTripFuel] = useState("")

  const [tripLocal, setTripLocal] = useState("")

  const [tripToll, setTripToll] = useState("")

  const navigation = useNavigation()

  /*async function handleTrip() {
    try{
      await tripCreate();
      navigation.navigate('trips');
    }catch(error){
      console.log(error)
    }
  }
  /** */

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
          onChangeText={setTripOrigin}
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
          onChangeText={setTripDestiny}
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
          onChangeText={setTripDistancy}
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
          onChangeText={setTripEficiency}
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
          onChangeText={setTripFuel}
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
          <IconMoney/>
        </Containers>
        <Label label="Localização Pedágio" />
        <NativeBaseInput
          style={NativeInput}
          mb={4}
          placeholder="Localização do Pedágio"
          onChangeText={setTripLocal}
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
          onChangeText={setTripToll}
          autoCapitalize="sentences"
          keyboardType="numeric"
          _focus={{
            bg: "gray.800",
            borderWidth: 1,
            borderColor: "blue.500",
          }}
        />
        <Button title="Criar nova viagem" style={{ marginTop: 20 }} />
      </Container>
    </ScrollView>
  )
}
