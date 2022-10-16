import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Select,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Radio,
    RadioGroup
  } from '@chakra-ui/react';
  import { useState } from 'react';
  
  export default function SignupCard() {
    const [showPassword, setShowPassword] = useState(false);
    const [value, setValue] = useState('domestic');
  
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Request a Ride
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              save on trips ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="numRiders">
                    <FormLabel># of Riders</FormLabel>
                    <NumberInput>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="timeFrame" isRequired>
                    <FormLabel>Ride Time</FormLabel>
                    <Input type="datetime-local" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="location" isRequired>
                <FormLabel>Pickup Location</FormLabel>
                <Select>
                    <option value='unit1'>Unit 1</option>
                    <option value='unit2'>Unit 2</option>
                    <option value='unit3'>Unit 3</option>
                    <option value='unit4'>Unit 4/Foothill</option>
                    <option value='clarkkerr'>Clark Kerr</option>
                    <option value='blackwell'>Blackwell</option>
                    <option value='downtown'>Downtown</option>
                    <option value='southside'>Southside</option>
                    <option value='northside'>Northside</option>
                </Select>
              </FormControl>
            <FormControl id="pfp" isRequired>
              <FormLabel>Reservation Receipt</FormLabel>
              <Input type="file" />
            </FormControl>
            <FormControl>
                <FormLabel>Departure Type</FormLabel>
                <RadioGroup onChange={setValue} value={value}>
                    <Stack direction='row'>
                        <Radio value='domestic'>Domestic</Radio>
                        <Radio value='international'>International</Radio>
                    </Stack>
                </RadioGroup> 
            </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'orange.300'}
                  color={'white'}
                  _hover={{
                    bg: 'orange.500',
                  }}>
                  Submit
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link color={'orange.300'}>Login</Link>
                </Text>
              </Stack>
  
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }