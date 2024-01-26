import { Header } from "@components/header"

import { Container } from "./styles"


export function List() {
 function handleHome(props) {
   props.navigation.navigate("home")
 }

  return (
    <Container>
      <Header showBackButton/>
    </Container>
  )
}
