import { useCallback, useState } from "react"
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native"

import { Container, NativeInput } from "./styles"
import { Button } from "@components/button"
import { Title } from "@components/title"

import { Input as NativeBaseInput, ScrollView } from "native-base"
import { Input } from "@components/input"
import { Header } from "@components/header"
import { Containers, IconGas, IconMap, IconMoney } from "./styles"
import { Label } from "@components/label"
import { tripsGetAll } from "@storage/trip/tripsGetAll"
import { FlatList } from "react-native"
import { tripCreate } from "@storage/trip/tripCreate"
import { tripEdit } from "@storage/trip/tripEdit"
import { TripDetailCard } from "@components/TripDetailCard"
import { TripCard } from "@components/TripCard"

type RouteParams = {
  title: string
}

export function EditTrip() {
  const route = useRoute()

  const { title } = route.params as RouteParams

  const navigation = useNavigation()
  const [editedValues, setEditedValues] = useState([])
  const [trips, setTrips] = useState<object[]>([])

  async function setUpdatedFields() {
     try {
        await tripEdit({ title, ...editedValues });

        navigation.navigate('trips', {
          title,
        });
      } catch (error) {
          console.log(error);
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

  function capitalizeFirstLetter(string) {
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
        <Title title={title} />
        <Containers>
          <Title title=" Distância" />
          <IconMap />
        </Containers>
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
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <>
              {title === item.title &&
                Object.entries(item).map(([key, value]) => (
                  <>
                    {key === "efficiency" && (
                      <Containers>
                        <Title title=" Combustivel" />
                        <IconGas />
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
                        editedValues[key] !== undefined
                          ? editedValues[key]
                          : value.toString()
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
