import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    HStack,
    VStack,
    Button,
    Flex,
    Spacer,
    Link,
    Badge,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function Rides() {
    return (
      <VStack spacing = '5px'>
        <Heading fontSize={'4xl'} fontFamily={'heading'}>
            Active
        </Heading>
        <Center py={6}>
            <Box
            maxW={'1000px'}
            w={'900px'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'lg'}
            p={3}
            textAlign={'left'}>
            <Heading fontSize={'2xl'} fontFamily={'body'}>
                October 25
            </Heading>
            <HStack spacing='250px'>
                <Text fontWeight={600} color={'gray.500'}>
                Unit 1, Christian Hall 
                <Text fontWeight={600} color={'green.500'}>
                6:00 AM
                </Text>
                </Text>
                <Text fontWeight={600} color={'blue.500'}>
                32 minutes ↠ {" "}
                </Text>
                <Text fontWeight={600} color={'black.500'}>
                SFO Terminal 3 {" "}
                <Text fontWeight={600} color={'green.500'}>
                6:32 AM
                </Text>
                </Text>
            </HStack>
            <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                _focus={{
                bg: 'red.400',
                }}>
                Leave This Ride
                </Button>
            </Box>
        </Center>
        <Heading fontSize={'4xl'} fontFamily={'heading'}>
            Past
        </Heading>
        <Box pt={'400'} pb={'5'}>
          <Text fontSize='xs'>Copyright © 2022 Cober, Inc. All Rights Reserved.</Text>
        </Box>
      </VStack>
    );
  }