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
import { FiMenu } from 'react-icons/fi'
// import { Logo } from './Logo'

export default function Nav() {
  return (
    <Box>
      <Flex display="flex" ml="30px" mr="30px" justify="flex-end">
        <Box>
          <Image src="logo.png" boxSize='50px' align></Image>
        </Box>
        <Spacer />
        <ButtonGroup variant="ghost" margin="8px" spacing="5">
          <Button _hover={{background: "gray.200"}}>Home</Button>
          <Button _hover={{background: "gray.200"}}>About</Button>
          <Button variant="solid"
            backgroundColor="#204988"
            textColor="white"
            _hover={{
              background: "gray.300",
              color: "#204988",
            }}
            >
              Sign In
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  )
}
