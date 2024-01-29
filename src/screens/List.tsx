import { useState, useCallback } from "react"
import { useNavigation,useFocusEffect } from "@react-navigation/native"
import { tripsTitlesGetAll } from "@storage/tripTitle/tripsTitlesGetAll"
import {  Container } from "./styles"
import { FlatList } from "react-native"
import {TripCard} from "@components/TripCard"
import { ListEmpty } from "@components/ListEmpty"

export function List() {
  const [trips, setTrips] = useState<string[]>([])


  async function fetchTrips() {
    try {
      const data = await tripsTitlesGetAll()
      setTrips(data)
    } catch (error) {
      console.log(error)
    }
  }

  useFocusEffect(useCallback(()=>{
    fetchTrips();
  },[]));

  return (
    <Container>
        <FlatList
          data={trips}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TripCard
             title={item} />
          )}
          contentContainerStyle={trips.length===0 && {flex:1}}
          ListEmptyComponent={()=>
             <ListEmpty message="Que tal cadastrar a primeira viagem?"/>}
        />
    </Container>
  )
}
