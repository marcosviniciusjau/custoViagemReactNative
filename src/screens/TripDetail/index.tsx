import { useState, useCallback } from "react"
import { useNavigation, useFocusEffect } from "@react-navigation/native"
import { tripsGetAll } from "@storage/trip/tripsGetAll"
import { Container } from "./styles"
import { FlatList } from "react-native"
import { TripDetailCard } from "@components/TripDetailCard"
import { ListEmpty } from "@components/ListEmpty"
import { TripCard } from "@components/TripCard"

export function TripDetails() {
  const [trips, setTrips] = useState<object[]>([])

  async function fetchTrips() {
    try {
      const data = await tripsGetAll()
      setTrips(data)
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
            {Object.entries(item).map(([key, value]) => (
              <TripCard key={key} title={key} />
            ))}
          </>
        )}
        contentContainerStyle={trips.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira viagem?" />
        )}
      />
    </Container>
  )
}
