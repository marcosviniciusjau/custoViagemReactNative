import AsyncStorage from "@react-native-async-storage/async-storage"
import { TRIP_TITLE_COLLECTION } from "@storage/storageConfig"
import { tripsTitleGetAll } from "./tripsTitleGetAll"

export async function tripTitleDelete(TripTitle: string) {
   try {
     const storage = await tripsTitleGetAll()
     console.log(storage)
     const filtered = storage.filter(title => title !== TripTitle)

     const trips = JSON.stringify(filtered)
     await AsyncStorage.setItem(`${TRIP_TITLE_COLLECTION}`, trips)
     console.log(trips)
   } catch (error) {
     throw error
   }
}
