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
import { useState } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import MyRides from './components/MyRides';
function App() {
  const [page, setPage] = useState(<Home />);
  return (
    <>
      <Nav setPage={setPage} />
      {page}
    </>
  );
}
export default App;