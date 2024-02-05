import AsyncStorage from "@react-native-async-storage/async-storage"
import { TRIP_COLLECTION } from "@storage/storageConfig"
import { tripsGetAll } from "./tripsGetAll"

export async function tripDelete(title: string) {
   try {
     const storage = await tripsGetAll()
     const filtered = storage.filter((trip) => trip.title !== title)

     const trips = JSON.stringify(filtered)
     await AsyncStorage.setItem(`${TRIP_COLLECTION}`, trips)
   } catch (error) {
     throw error
   }
}
