import AsyncStorage from "@react-native-async-storage/async-storage"

import { tripsGetAll } from "./tripsGetAll"

import { TRIP_COLLECTION } from "@storage/storageConfig"
export async function tripCreate(origin: string,
  destiny: string,
  distance: number,
  efficiency: number,
  fuel: number,
  local: string,
  toll: number,) {
  try {
    const storedTrips = await tripsGetAll()

    const storage = JSON.stringify([
      ...storedTrips,
      origin,
      destiny,
      distance,
      efficiency,
      fuel,
      local,
      toll,
    ])

    await AsyncStorage.setItem(TRIP_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}
