import { Header } from "../Components/Header"
import Forms from "../../src/Forms/Forms"
import { TaskList } from "../Components/TaskList"
import Menu from "../Components/Menu"
import { Grid, GridItem, Center } from "@chakra-ui/react"
import bgImage from '../assets/fonds.svg'
import Title from "../Components/Title"

function Tareas (){
    return(
    <Grid
        w='100%'
        // h='100%'
        // justifyItems='center'
        alignItems='flex-start'
        gridTemplateColumns='1fr'
        gridTemplateRows='1fr 1fr 3fr 10fr 2fr '
        height='100vh'
        bgImage={`url(${bgImage})`}
        bgRepeat='no-repeat'
        bgSize='cover' 
        >
        <GridItem>
        <Menu/>
        </GridItem>

        <GridItem>
        <Header/>
        </GridItem>

        <GridItem>
        <Forms/>
        </GridItem>

        <GridItem justifySelf='center'> 
        <TaskList/> 
        </GridItem>

        <Center>
        <Title/>
        </Center>
    </Grid>
    )
}

export default Tareas;