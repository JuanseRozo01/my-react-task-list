import { Button, Center, Grid, GridItem, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Menu (){

  const[ t, i18n ]= useTranslation('global')
  const { colorMode, toggleColorMode } = useColorMode()
  
  const butonChangeLenguage = () => {
    if(i18n.language == 'ES'){
      i18n.changeLanguage('EN')
    }else{
      i18n.changeLanguage('ES')
    }
  }

    return(
  <nav>
    <Grid  gridTemplateColumns='1fr 1fr 1fr' gridTemplateRows='1fr'>
    <GridItem></GridItem>
    <GridItem p='1%'>
      <Center>
          <Button colorScheme='teal' variant='ghost' m='2'><Link to="/">{t("Menu.Button1")}</Link></Button>
          <Button colorScheme='teal' variant='ghost' m='2'><Link to="/sobre-nosotros">{t("Menu.Button2")}</Link></Button>
          <Button colorScheme='teal' variant='ghost' m='2'><Link to="/tareas">{t("Menu.Button3")}</Link></Button>
      </Center>
    </GridItem>
    <GridItem paddingLeft='50%'>
          <Center>
          <Button onClick={()=>butonChangeLenguage()} colorScheme='teal' variant='ghost'  m='2'>{i18n.language}</Button>
          <Button colorScheme='teal' variant='ghost' m='3' onClick={toggleColorMode}> {colorMode === 'light' ? '☾' : '☼'}</Button>
          </Center>
    </GridItem>
      </Grid>          
  </nav>
    );
};

export default Menu;