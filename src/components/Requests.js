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
  
  export default function Requests() {
    return (
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
      
          <HStack spacing={4}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              Join This Ride
            </Button>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              More Details {'>'}
            </Button>
          </HStack>
        </Box>
      </Center>
    );
  }