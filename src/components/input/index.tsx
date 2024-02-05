import { TextInputProps } from "react-native";

import { Container } from "./styles";
import { Input as NativeBaseInput, ScrollView } from "native-base"
import { useState } from "react";

export function Input({...rest}:TextInputProps){
  
  const [origin, setOrigin] = useState()

  const [destiny, setDestiny] = useState()

  const [distance, setDistance] = useState(
    parseFloat( "0.0")
  )

  const [efficiency, setEfficiency] = useState(
    parseFloat( "0.0")
  )

  const [fuel, setFuel] = useState( "0.0")

  const [local, setLocal] = useState( "")

  const [toll, setToll] = useState(parseFloat( "0.0"))


  return (
    <Container {...rest}>
      <NativeBaseInput
        mb={4}
        autoCapitalize="sentences"
        color="white"
        _focus={{
          bg: "gray.800",
          borderWidth: 1,
          borderColor: "blue.500",
        }}
       
      />
    </Container>
  )
}