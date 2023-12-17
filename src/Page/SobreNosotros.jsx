import { Center, Grid, Text } from "@chakra-ui/react";
import Menu from "../Components/Menu";
import { useTranslation } from "react-i18next";
import bgImage from '../assets/probando.svg'
import Title from "../Components/Title";

function SobreNosotros (){
    const[ t, i18n ]= useTranslation('global')
    return (
        <Grid
        gridTemplateColumns='1fr'
        gridTemplateRows='0.3fr 6fr 1fr'
        height='100vh'
        bgImage={`url(${bgImage})`}
        bgRepeat='no-repeat'
        bgSize='cover'>

        <Menu/>
        
        <Center>
        <Text as='b' fontSize='3rm' textAlign='justify' mt='15px' w='50%' marginLeft='10px'>{t("SobreNosotros.Text")}</Text>
        </Center>
        
        <Center>
        <Title/>
        </Center>
        
    </Grid>
    )
    
}

export default SobreNosotros;