import { useNavigation, useRoute } from "@react-navigation/native"
import { BackButton, BackIcon, Container, Logo } from "./styles"

import LogoImg from "@assets/logo.png"
import { Alert } from "react-native"
import { tripTitleDelete } from "@storage/tripTitle/tripTitleDelete"
import { tripsTitleGetAll } from "@storage/tripTitle/tripsTitleGetAll"

type Props = {
  showBackButton?: boolean
  onPress?:()=>void;
}
type RouteParams= {
  title:string;
}
export function HeaderNew({ showBackButton = false }: Props) {
  const navigation = useNavigation()
  const route = useRoute()
  const { title } = route.params as RouteParams

  const confirmAndGoBack = (title: string) => {
    Alert.alert(
      "Confirmar Saída",
      "Tem certeza de que deseja sair? As alterações não salvas serão perdidas.",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => {
            try{
              tripTitleDelete(title)
              const list= tripsTitleGetAll()
              console.log(list)
              navigation.navigate("home");
            }
            catch{
                Alert.alert("Remover viagem", "Não foi possível remover essa viagem.")
            }
         
           },
        },
      ]
    );
  };
  return (
    <Container>
      {
      showBackButton && 
        <BackButton onPress={() => confirmAndGoBack(title)}>
        <BackIcon />
        </BackButton>
      }

      <Logo source={LogoImg} />
    </Container>
  )
}
