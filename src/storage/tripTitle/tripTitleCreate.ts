import AsyncStorage from "@react-native-async-storage/async-storage"

import { tripsTitlesGetAll } from "./tripsTitlesGetAll"

import { TRIP_TITLE_COLLECTION } from "@storage/storageConfig"

export async function tripTitleCreate(newTrip: string) {
  try {
    const storedTrips = await tripsTitlesGetAll()

    const storage = JSON.stringify([...storedTrips, newTrip])
    console.log(storage)

    await AsyncStorage.setItem(TRIP_TITLE_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}
