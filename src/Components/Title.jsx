import { Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

function Title(){
     
     const[ t, i18n ]= useTranslation('global')

     return(
          <Text as='b' fontSize='3xl' >{t('Title.Text')}</Text>
     )
}
export default Title;