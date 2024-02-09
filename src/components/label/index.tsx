import { TouchableOpacityProps } from "react-native"
import { Error, Labels } from "./styles"
import { Errors } from "@components/errors"

type Props = TouchableOpacityProps & {
  label: string
  error:string
}

export function Label({ label,error}: Props) {
  return (
    <>
      <Labels>{label}</Labels>
      <Errors error={error} style={Error}></Errors>
    </>
  )
}
