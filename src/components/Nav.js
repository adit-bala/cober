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
      <Flex display="flex" margin="20px" justify="flex-end">
        <ButtonGroup variant="ghost">
          <Button>Home</Button>
          <Button>About</Button>
          <Button variant="solid"
            backgroundColor="#204988"
            textColor="white"
            >
              Sign In
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  )
}
