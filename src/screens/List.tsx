import { useState, useCallback } from "react"
import { useNavigation, useFocusEffect } from "@react-navigation/native"

import { Container } from "./styles"

import { Alert, FlatList } from "react-native"

import { TripCard } from "@components/TripCard"
import { ListEmpty } from "@components/ListEmpty"
import { tripsGetAll } from "@storage/trip/tripsGetAll"
import { tripDelete } from "@storage/trip/tripDelete"
import { Button } from "@components/button"

export function List() {
  const [trips, setTrips] = useState<object[]>([])

  const navigation = useNavigation()
   function handleNewTrip() {
    try {
      navigation.navigate("home")
    } catch (error) {
      console.log(error)
    }
}
  async function handleRemoveTrip(title: string) {
    try {
      Alert.alert("Confirmação", "Deseja realmente excluir?", [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: async () => {
        
          await tripDelete(title)

          fetchTrips()

          Alert.alert("Remover viagem", "Sua viagem foi removida com sucesso!")
          },
        },
      ])
    } catch (error) {
      console.log(error)

      Alert.alert("Remover viagem", "Não foi possível remover essa viagem.")
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

  function handleOpenTrip(title: string) {
    try {
      navigation.navigate("edit", { title })
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
    <Container>
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
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <TripCard
            title={item.title}
            onPress={() => handleOpenTrip(item.title)}
            onRemove={() => handleRemoveTrip(item.title)}
          />
        )}
        contentContainerStyle={trips.length === 0 && { marginTop: 250 }}
        ListEmptyComponent={() => (
          <>
            <ListEmpty message="Que tal cadastrar a primeira viagem?" />
            <Button title="Criar" onPress={handleNewTrip} />
          </>
        )}
      />
    </Container>
  )
}
