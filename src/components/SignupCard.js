import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Select,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { Formik } from 'formik';

export default function SignUpCard() {
  return (
    <Formik
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {props => (
        <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg={'gray.50'}
        >
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'} textAlign={'center'}>
                Sign up
              </Heading>
              <Text fontSize={'lg'} color={'gray.600'}>
                to ride with fellow students ✌️
              </Text>
            </Stack>
            <Box
              rounded={'lg'}
              bg={'white'}
              boxShadow={'lg'}
              p={8}
            >
              <Stack spacing={4}>
                <FormControl id="pfp" isRequired>
                  <FormLabel>Profile Picture</FormLabel>
                  <Input type="file" />
                </FormControl>
                <HStack>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName">
                      <FormLabel>Last Name</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address (must end in .edu) </FormLabel>
                  <Input type="email" />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input type={'text'} />
                    <InputRightElement h={'full'}>
                      <Button variant={'ghost'}></Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <FormLabel>Gender</FormLabel>
                  <Select placeholder="Select your gender">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </Select>
                </FormControl>

                <Stack spacing={10} pt={2}>
                  <Button
                    loadingText="Submitting"
                    size="lg"
                    bg={'orange.300'}
                    color={'white'}
                    _hover={{
                      bg: 'orange.500',
                    }}
                  >
                    Sign up
                    {/* <Button
                  isLoading
                  loadingText='Submitting'
                  colorScheme='teal'
                  variant='outline'
                >
                  Submit
                </Button> */}
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
      )}
    </Formik>
  );
}
