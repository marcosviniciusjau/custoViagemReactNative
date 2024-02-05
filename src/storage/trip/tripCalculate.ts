import AsyncStorage from "@react-native-async-storage/async-storage"

import { tripsGetAll } from "./tripsGetAll"

import { TRIP_COLLECTION } from "@storage/storageConfig"

export async function tripCalculate(
 
  distance: number,
  efficiency: number,
  fuel: number,
  toll: number
) {
  try {
    const storedTrips = await tripsGetAll()
    const fuelCalculate= efficiency / distance * fuel
    const tollCalculate= toll

  } catch (error) {
    console.log("Deu ruim")
    throw error
  }
}
