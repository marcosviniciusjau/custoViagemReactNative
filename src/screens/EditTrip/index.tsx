import { useCallback, useState } from "react"
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native"

import { Container, ContainersCalculate, ContainersToll } from "./styles"
import { Button } from "@components/button"
import { Title } from "@components/title"

import { Input as NativeBaseInput, ScrollView } from "native-base"

import { Header } from "@components/header"
import { Containers, IconGas, IconMap, IconMoney } from "./styles"
import { Label } from "@components/label"
import { tripsGetAll } from "@storage/trip/tripsGetAll"
import { Alert, FlatList, View } from "react-native"

import { tripEdit } from "@storage/trip/tripEdit"
import { TripCalculateCard } from "@components/TripCalculateCard"
import { ButtonIcon } from "@components/ButtonIcon"

type RouteParams = {
  title: string
}

export function EditTrip() {
  const route = useRoute()

  const { title } = route.params as RouteParams

  const navigation = useNavigation()
  const [editedValues, setEditedValues] = useState([]);
  const [trips, setTrips] = useState<object[]>([])
  const [calculatedCardsRendered] = useState(false)
  const [tolls, setTolls] = useState([{ local: "", cost: 0.0 }]);

  const [totalTollCost, setTotalTollCost] = useState(0);

  const handleTollChange = (text: string, field: string, index: number) => {
    const updatedTolls = [...tolls];
    updatedTolls[index][field] = field === "cost" ? parseFloat(text) : text;
    setTolls(updatedTolls);
  };
  
  const addNewToll = () => {
    try{
      setTolls([...tolls, { local: "", cost: 0.0 }])
    }catch(error){
      console.error(error)
    }
  }
  
  async function setUpdatedFields() {
    try {
      await tripEdit({
        title, ...editedValues
      })
      Alert.alert("Editar viagem", "Sua viagem foi editada com sucesso!")

      navigation.navigate("trips", {
        title,
      })
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchTrips() {
    try {
      const data = await tripsGetAll();
      setTrips(data);
    
      let newTotalTollCost = 0;
  
      data.forEach((viagem) => {
        viagem.tolls.forEach((pedagio) => {
          const pedagioCost = parseFloat(pedagio.cost);
          newTotalTollCost += pedagioCost * 2
        });
      });
  
      setTotalTollCost(newTotalTollCost);
    } catch (error) {
      console.log(error);
    }
  }
  

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
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

        <Label label="Cálculo de Gastos:" />
        <FlatList
          data={
            trips as Array<{
              title: string
              origin: string
              destiny: string
              distance: number
              efficiency: number
              fuel: number
              tolls:{
                local:string
                cost:string
              }
            }>
          }
          keyExtractor={(index) => index.toString()}
          renderItem={({ item }) => (
            <><>
              {title === item.title &&
                Object.entries(item).slice(0, 6).map(([key, value]) => (
                  <>
                    {key === "title" && !calculatedCardsRendered && (
                      <>
                        <ContainersCalculate>
                          <TripCalculateCard
                            title=""
                            value={`Combustível: ${(item.distance / item.efficiency) * item.fuel}`} />
                          <TripCalculateCard
                            title={"Gastos com Pedágio"}
                            value={`Pedágio: ${totalTollCost}`} />
                        </ContainersCalculate>
                      </>
                    )}
                    {key === "efficiency" && (
                      <Containers>
                        <Title title=" Combustivel" />
                        <IconGas />
                      </Containers>
                    )}
                    {key === "origin" && (
                      <Containers>
                        <Title title=" Distância" />
                        <IconMap />
                      </Containers>
                    )}
               
                    <Label label={capitalizeFirstLetter(`${key}`)} />

                    <NativeBaseInput
                      mb={4}
                      placeholder={`${key} da Viagem`}
                      onChangeText={(text) => {
                        setEditedValues((prev) => ({ ...prev, [key]: text }))
                      } }
                      autoCapitalize="sentences"
                      color="white"
                      _focus={{
                        bg: "gray.800",
                        borderWidth: 1,
                        borderColor: "blue.500",
                      }}
                      key={key}
                      value={value.toString()} />
                  </>
                ))}
                
               {title === item.title && item.tolls.map((toll, index) => (
                <View key={index}>
                   <ContainersToll>
                    <Title title="Pedágios" />
                    <IconMoney />
                    <ButtonIcon icon="add" onPress={addNewToll} />
                </ContainersToll>

                  <Label label={`Localização Pedágio ${index + 1}`} />
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
                    value={toll.local}
                  />

                  <Label label={`Preço Pedágio ${index + 1}`} />
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
                    value={toll.cost.toString()}
                  />
                </View>
              ))}

           
            </><>
            
              </>
              </>
          )}
        />

        <Button
          title="Salvar Edições"
          style={{marginTop:20}}
          onPress={() => {
            setUpdatedFields()
          }}
        />
      </Container>
    </ScrollView>
  )
}
