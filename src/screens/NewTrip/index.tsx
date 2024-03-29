import { useEffect, useState } from "react"
import { useNavigation, useRoute } from "@react-navigation/native"

import { tripCreate } from "@storage/trip/tripCreate"
import { tripTitleDelete } from "@storage/tripTitle/tripTitleDelete"
import { Container, ContainersToll } from "./styles"
import { Button } from "@components/button"
import { Title } from "@components/title"
import {Input as NativeBaseInput,ScrollView} from "native-base"

import { HeaderNew } from "@components/header_new"
import { Containers, IconGas, IconMap, IconMoney } from "./styles"
import { Label } from "@components/label"
import { Alert, View } from "react-native"
import { ButtonIcon } from "@components/ButtonIcon"
import { AppError } from "@utils/AppError"

type RouteParams= {
  title:string;
}
type NumericValue = string | number

export function NewTrip() {
  const route = useRoute()
  const { title } = route.params as RouteParams
  const parts= title.split('-')
  const Ititle= title.includes('-')
    
  const [origin, setOrigin] = useState("")
  const [destiny, setDestiny] = useState("")
  const [distance, setDistance] = useState<NumericValue>(0.0)
  const [efficiency, setEfficiency] = useState<NumericValue>(0.0)
  const [fuel, setFuel] = useState<NumericValue>(0.0)
  const [local, setLocal] = useState("")
  const [toll, setToll] = useState<NumericValue>(0.0)
  const [tolls, setTolls] = useState([{ local: "", cost: 0.0 }])
  const [lengthValid, setLengthValid] = useState(false)
  
  const [originValid, setOriginValid] = useState(false)
  const [destinyValid, setDestinyValid] = useState(false)
  const [distanceValid, setDistanceValid] = useState(false)
  const [efficiencyValid, setEfficiencyValid] = useState(false)
  const [fuelValid, setFuelValid] = useState(false)
  const [localValid, setLocalValid] = useState(false)
  const [tollValid, setTollValid] = useState(false)
  
  const handleTollChange = (text: string, field: string, index: number) => {
    const updatedTolls = [...tolls]
    updatedTolls[index][field] = text
    setTolls(updatedTolls)
  }

  const addNewToll = () => {
    try{
      setTolls([...tolls, { local: "", cost: 0.0 }])
    }catch(error){
      console.log(error)
    }
  }

  const areAllFieldsValid = () => {
    return (
      originValid &&
      destinyValid &&
      distanceValid &&
      efficiencyValid &&
      fuelValid
    )
  }

  useEffect(() => {
    setLengthValid(false)
      setOriginValid(false)
      setDestinyValid(false)
      setDistanceValid(false)
      setEfficiencyValid(false)
      setFuelValid(false)
  }, [])

  useEffect(() => {
    if (Ititle) {
      setOrigin(parts[0])
      setDestiny(parts[1]) 
      setLengthValid(parts[0].trim().length > 2 && parts[1].trim().length > 2);
      setOriginValid(parts[0].trim() !== "")
      setDestinyValid(parts[1].trim() !== "")
    } else {
      setDestiny(title)
      setDestinyValid(title.trim() !== "")
      setLengthValid(title.trim().length > 2)
    }
    }, [Ititle, parts, title])

    const navigation = useNavigation()

    async function handleNewTrip() {
      try {
      if (!areAllFieldsValid()){
        Alert.alert("Cadastrar viagem", "Preencha todos os campos!")
      }else{
        await tripCreate(
          title,
          origin,
          destiny,
          parseFloat(distance as string),
          parseFloat(efficiency as string),
          parseFloat(fuel as string),
          tolls
        )
        setOrigin('')
        setDestiny('')
        setDistance(0)
        setEfficiency(0)
        setFuel(0)
        setTolls([{ local: "", cost: 0.0 }])
        Alert.alert("Cadastrar viagem", "Sua viagem foi cadastrada com sucesso!")
        navigation.navigate("trips", {
          title,
        })
          
      }
      } catch (error) {
        console.log(error)
      }
    }
    async function tripTitleRemove() {
      try {
        await tripTitleDelete(title)
        navigation.navigate('home')
  
      } catch (error) {
        console.log(error);
        Alert.alert('Remover Titulo', 'Não foi possível remover o titulo!');
      }
    }
const confirmAndDeleteTitle = () => {
    Alert.alert(
      "Confirmar Exclusão",
      "Tem certeza de que deseja excluir o título?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => {
            tripTitleRemove()
          },
        },
      ]
    );
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <Container>
        <HeaderNew showBackButton onPress={confirmAndDeleteTitle}/>

        <Title title={title} />

        <Containers>
          <Title title="Distância" />
          <IconMap />
        </Containers>

        <Label
          label="Origem"
          error={
            originValid && lengthValid ? "" : "Preencha o campo corretamente"
          }
        />

        <NativeBaseInput
          mb={4}
          size={3}
          placeholder="Origem da Viagem"
          color="white"
          autoCapitalize="sentences"
          borderColor={originValid ? "blue.500" : "red.500"}
          _focus={{
            bg: "gray.800",
            borderWidth: 1,
            borderColor: "blue.500",
          }}
          value={origin}
          onChangeText={(text) => {
            setOrigin(text)
            setOriginValid(text.trim() !== "" && text.length > 2)
            setLengthValid(text.length > 2)
          }}
        />

        <Label
          label="Destino"
          error={
            destinyValid && lengthValid ? "" : "Preencha o campo corretamente"
          }
        />

        <NativeBaseInput
          mb={4}
          placeholder="Destino da Viagem"
          color="white"
          autoCapitalize="sentences"
          borderColor={destinyValid ? "blue.500" : "red.500"}
          _focus={{
            bg: "gray.800",
            borderWidth: 1,
            borderColor: "blue.500",
          }}
          value={destiny}
          onChangeText={(text) => {
            setDestiny(text)
            setDestinyValid(text.trim() !== "" && text.length > 2 )
          }}
        />

        <Label
          label="Distância"
          error={
            distanceValid && lengthValid ? "" : "Preencha o campo corretamente"
          }
        />

        <NativeBaseInput
          mb={4}
          placeholder="Distância da Viagem"
          keyboardType="numeric"
          autoCapitalize="sentences"
          color="white"
          borderColor={distanceValid ? "blue.500" : "red.500"}
          _focus={{
            bg: "gray.800",
            borderWidth: 1,
            borderColor: "blue.500",
          }}
          onChangeText={(text) => {
            setDistance(Number(text))
            setDistanceValid(text.trim() !== "")
          }}
        />

        <Containers>
          <Title title="Combustível" />
          <IconGas />
        </Containers>

        <Label
          label="Eficiência por km/l"
          error={efficiencyValid ? "" : "Preencha o campo corretamente"}
        />

        <NativeBaseInput
          mb={4}
          placeholder="Km/l"
          onChangeText={(text) => {
            setEfficiency(text)
            setEfficiencyValid(text.trim() !== "")
          }}
          keyboardType="numeric"
          borderColor={efficiencyValid ? "blue.500" : "red.500"}
          autoCapitalize="sentences"
          color="white"
          _focus={{
            bg: "gray.800",
            borderWidth: 1,
            borderColor: "blue.500",
          }}
        />

        <Label
          label="Preço combustível"
          error={fuelValid ? "" : "Preencha o campo corretamente"}
        />

        <NativeBaseInput
          mb={4}
          onChangeText={(text) => {
            setFuel(text)
            setFuelValid(text.trim() !== "")
          }}
          borderColor={fuelValid ? "blue.500" : "red.500"}
          placeholder="Preço do combustível"
          color="white"
          keyboardType="numeric"
          autoCapitalize="sentences"
          _focus={{
            bg: "gray.800",
            borderWidth: 1,
            borderColor: "blue.500",
          }}
        />

        <ContainersToll>
          <Title title="Pedágios" />
          <IconMoney />
          <ButtonIcon icon="add" onPress={addNewToll} />
        </ContainersToll>
      

        {tolls.map((toll, index) => (
          <View key={index}>
            <Label label={`Localização Pedágio ${index + 1}`} error={""} />
            <NativeBaseInput
              mb={4}
              placeholder={`Localização do Pedágio ${index + 1}`}
              onChangeText={(text) => handleTollChange(text, "local", index)}
              color="white"
              autoCapitalize="sentences"
              _focus={{
                bg: "gray.800",
                borderWidth: 1,
                borderColor: "blue.500",
              }}
            />

            <Label label={`Preço Pedágio ${index + 1}`} error={""} />
            <NativeBaseInput
              mb={4}
              placeholder={`Preço do Pedágio ${index + 1}`}
              onChangeText={(text) => handleTollChange(text, "cost", index)}
              color="white"
              autoCapitalize="sentences"
              keyboardType="numeric"
              _focus={{
                bg: "gray.800",
                borderWidth: 1,
                borderColor: "blue.500",
              }}
            />
          </View>
        ))}

      

        <Button
          title="Criar nova viagem"
          style={{ marginTop: 20 }}
          onPress={handleNewTrip}
        />
      </Container>
    </ScrollView>
  )
}
