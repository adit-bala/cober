import {
  Box,
  Button,
  ButtonGroup,
  color,
  Container,
  Flex,
  HStack,
  IconButton,
  Image,
  Spacer,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import Home from "./Home"
import MyRides from "./MyRides"
import SignUpCard from './SignUpCard'
import { FiMenu } from 'react-icons/fi'
// import { Logo } from './Logo'
export default function Nav({setPage}) {
  return (
    <Box>
      <Flex display="flex" margin="20px" justify="flex-end">
        <Box>
          <Image src="logo.png" boxSize='50px' align></Image>
        </Box>
        <Spacer />
        <ButtonGroup variant="ghost">
          <Button onClick={() => setPage(Home)} _hover={{background: "gray.200"} }>Home</Button>
          <Button onClick={() => setPage(MyRides)} _hover={{background: "gray.200"}}>About</Button>
          <Button onClick={() => setPage(SignUpCard)} variant="solid"
            backgroundColor="#204988"
            textColor="white"
            _hover={{
              background: "gray.300",
              color: "#204988",
            }}
            >
              Sign Up
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  )
}