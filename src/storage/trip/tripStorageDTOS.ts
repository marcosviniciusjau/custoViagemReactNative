
export type TripStorageDTO = {
  title:string
  origin: string
  destiny:string
  distance:number
  efficiency:number
  fuel:number
  tolls:{
    local:string
    cost:number
  }
}
