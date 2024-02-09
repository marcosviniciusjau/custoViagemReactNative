import { useCallback, useState } from "react"
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native"

import { Container } from "./styles"
import { Button } from "@components/button"
import { Title } from "@components/title"

import { Input as NativeBaseInput, ScrollView } from "native-base"

import { Header } from "@components/header"
import { Containers, IconGas, IconMap, IconMoney } from "./styles"
import { Label } from "@components/label"
import { tripsGetAll } from "@storage/trip/tripsGetAll"
import { Alert, FlatList } from "react-native"

import { tripEdit } from "@storage/trip/tripEdit"
import { TripCalculateCard } from "@components/TripCalculateCard"

type RouteParams = {
  title: string
}

export function EditTrip() {
  const route = useRoute()

  const { title } = route.params as RouteParams

  const navigation = useNavigation()
  const [editedValues, setEditedValues] = useState([])
  const [trips, setTrips] = useState<object[]>([])
  const [calculatedCardsRendered] = useState(false)

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
      const data = await tripsGetAll()

      setTrips(data)
    } catch (error) {
      console.log(error)
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
              local: string
              toll: string
            }>
          }
          keyExtractor={(index) => index.toString()}
          renderItem={({ item }) => (
            <>
              {title === item.title &&
                Object.entries(item).map(([key, value]) => (
                  <>
                    {key === "title" && !calculatedCardsRendered && (
                      <>
                        <Containers>
                          <TripCalculateCard
                            title=""
                            value={`Combustível: ${
                              (item.distance / item.efficiency) * item.fuel
                            }`}
                          />
                          <TripCalculateCard
                            title={"Gastos com Pedágio"}
                            value={`Pedágio: ${item.toll}`}
                          />
                        </Containers>
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
                    {key === "local" && (
                      <Containers>
                        <Title title=" Pedágio" />
                        <IconMoney />
                      </Containers>
                    )}
                    <Label label={capitalizeFirstLetter(`${key}`)} />

                    <NativeBaseInput
                      mb={4}
                      placeholder={`${key} da Viagem`}
                      onChangeText={(text) => {
                        setEditedValues((prev) => ({ ...prev, [key]: text }))
                      }}
                      autoCapitalize="sentences"
                      color="white"
                      _focus={{
                        bg: "gray.800",
                        borderWidth: 1,
                        borderColor: "blue.500",
                      }}
                      key={key}
                      value={
                       value.toString()
                      }
                    />
                  </>
                ))}
            </>
          )}
        />

        <Button
          title="Salvar Edições"
          onPress={() => {
            setUpdatedFields()
          }}
        />
      </Container>
    </ScrollView>
  )
}
