import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Nav from './components/Nav';
import Home from './components/Home';
import Rides from './components/MyRides';
function App() {
  return <Home />;
}


export default App;
