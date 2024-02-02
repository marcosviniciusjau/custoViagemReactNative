import AsyncStorage from "@react-native-async-storage/async-storage"

import { tripsGetAll } from "./tripsGetAll"

import { TRIP_COLLECTION } from "@storage/storageConfig"

type Trip = {
  title: string
  origin?: string
  destiny?: string
  distance?: number
  efficiency?: number
  fuel?: number
  local?: string
  toll?: number
}
export async function tripEdit(updatedTrip:Trip)
 {

  try {
    const storedTrips = await tripsGetAll()
      const tripIndex = storedTrips.findIndex(
        (storedTrip) => storedTrip.title === updatedTrip.title
      )

    if (tripIndex !== -1) {
       storedTrips[tripIndex] = {
         ...storedTrips[tripIndex],
         ...updatedTrip,
       }
  
    const storage = JSON.stringify([...storedTrips])

    await AsyncStorage.setItem(TRIP_COLLECTION, storage)
    } else {
      throw new Error("Viagem não encontrada para atualização");
    }

  } catch (error) {
    throw error
  }
}
