import { Header } from '@components/header'
import {Container} from './styles'
import { Title } from '@components/title'
import { FlatList } from 'native-base'

export function tripDetails(){
  return(
    <Container>
      <Header showBackButton/>
      <Title title="Titulo da Viagem"
      subtitle="Aqui você vê os detalhes da viagem!"/>

      <FlatList
      data={}/>

    </Container>
  )
}