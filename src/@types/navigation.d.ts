
export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      new:{
        title:string
      }
      trips: {
        origin: string
        destiny: string
        distance: number
        efficiency: number
        fuel: number
        local: string
        toll: number
      }
    }
  }
}