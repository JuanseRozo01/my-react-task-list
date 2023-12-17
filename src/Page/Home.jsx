import { Grid, Heading, Text, Center } from "@chakra-ui/react";
import bgImage from '../assets/image.svg'
import Menu from "../Components/Menu";
import { useTranslation } from "react-i18next";
import Title from "../Components/Title";

function Home (){
  const[ t, i18n ]= useTranslation('global')
  
    return(
    <Grid
         gridTemplateColumns='1fr'
         gridTemplateRows='0.5fr 0.5fr 3fr 0.5fr'
         height='100vh'
         bgImage={`url(${bgImage})`}
         bgRepeat='no-repeat'
         bgSize='cover'> 

            <Menu/>

          <Text as='b' fontSize='4xl'   
           textAlign='center'  >{t("Home.Heading")}</Text>
          <Grid
          gridTemplateColumns='1fr 1fr 1fr'
          gridTemplateRows='1fr'
          alignItems='center'
          justifyItems='center'
          h='20%'>
        
          <Text as='b' fontSize='3rm' textAlign='justify' mt='15px' w='100%' marginLeft='70px'>
          {t("Home.Text")}
            </Text> 
          </Grid>
          
          <Center>
          <Title/>
          </Center>
      </Grid>
   
    
    );
};
export default Home;