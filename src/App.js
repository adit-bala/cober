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
import RequestCard from './components/RequestCard';
import Requests from './components/Requests';
import SignUpCard from './components/SignupCard';

function App() {
  const [page, setPage] = useState(<Home />);
  const [login, setLogin] = useState({});
  return (
    <>
      <Nav setPage={setPage} setLogin={setLogin} login={login}/>
      {page}
    </>
  );
}
export default App;