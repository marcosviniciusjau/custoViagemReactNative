import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Input } from '@components/input'
import { tripCreate } from '@storage/trip/tripCreate'
import { Container, NativeInput,Content} from './styles'
import { Button } from '@components/button'
import { Title } from '@components/title'
import { Label } from '@components/label'
import {Input as NativeBaseInput,ScrollView} from "native-base"
import { GasPump,MapPin } from 'phosphor-react-native'
import { Header } from '@components/header'

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
      <Content>
        <Header showBackButton/>
        <MapPin size={32} />
        <Label label="Origem" />
        <NativeBaseInput
          style={NativeInput}
          onChangeText={setTripOrigin}
          autoCapitalize="sentences"
          _focus={{
            bg: "gray.800",
            borderWidth: 1,
            borderColor: "blue.500",
          }}
        />{" "}
        <Label label="Destino" />
        <NativeBaseInput
          style={NativeInput}
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
          onChangeText={setTripDistancy}
          keyboardType='numeric'
          autoCapitalize="sentences"
          _focus={{
            bg: "gray.800",
            borderWidth: 1,
            borderColor: "blue.500",
          }}
        />{" "}
        <Title title="Custo da Viagem: Combustivel" />
        <GasPump size={32} />
        <Label label="Eficiência por km/l" />
        <NativeBaseInput
          style={NativeInput}
          onChangeText={setTripEficiency}
          keyboardType='numeric'
          autoCapitalize="sentences"
          _focus={{
            bg: "gray.800",
            borderWidth: 1,
            borderColor: "blue.500",
          }}
        />{" "}
        <Label label="Preço combustivel" />
        <NativeBaseInput
          style={NativeInput}
          onChangeText={setTripFuel}
          keyboardType='numeric'
          autoCapitalize="sentences"
          _focus={{
            bg: "gray.800",
            borderWidth: 1,
            borderColor: "blue.500",
          }}
        />
        <Title title="Custo da Viagem: Pedágios" />
        <Label label="Localização Pedágio" />
        <NativeBaseInput
          style={NativeInput}
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
          onChangeText={setTripToll}
          autoCapitalize="sentences"
          keyboardType='numeric'
          _focus={{
            bg: "gray.800",
            borderWidth: 1,
            borderColor: "blue.500",
          }}
        />
        <Button title="Criar nova viagem" />
      </Content>
    </ScrollView>
  )
}
