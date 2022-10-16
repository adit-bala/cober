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
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useColorModeValue,
  FormErrorMessage,
  Link,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';
import { Formik, Field, Form } from 'formik';
import Requests from './Requests';
import MyRides from './MyRides';

export default function FindRides({ setPage, showReq }) {
  return (
    <>
      {showReq && (
        <HStack spacing="24px">
          <Box>
            <Flex align={'center'} justify={'center'} bg={'gray.50'}>
              <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                  <Heading fontSize={'4xl'} textAlign={'center'}>
                    Find a Ride!
                  </Heading>
                  <Text fontSize={'lg'} color={'gray.600'}>
                    Group up with some college buddies!
                  </Text>
                </Stack>
                <Box rounded={'lg'} bg={'white'} boxShadow={'lg'} p={8}>
                  <Stack spacing={4}>
                    <Formik
                      initialValues={{
                        day: '25',
                        time: '6:00 AM',
                        destination: 'SFO',
                        pickup: 'Unit 1',
                        domestic: 'yes',
                      }}
                      onSubmit={(values, actions) => {
                        setTimeout(() => {
                          setPage(
                            <FindRides setPage={setPage} showReq={true} />
                          );
                          actions.setSubmitting(false);
                        }, 1000);
                      }}
                    >
                      {props => (
                        <Form>
                          <HStack>
                            <Box>
                              <Field name="day">
                                {({ field, form }) => (
                                  <FormControl>
                                    <FormLabel>
                                      Choose the day of your flight.
                                    </FormLabel>
                                    <Input
                                      {...field}
                                      type="date"
                                      placeholder="25"
                                    />
                                    <FormErrorMessage>
                                      {form.errors.name}
                                    </FormErrorMessage>
                                  </FormControl>
                                )}
                              </Field>
                              <Field name="time">
                                {({ field, form }) => (
                                  <FormControl>
                                    <FormLabel>
                                      Choose what time your flight is.
                                    </FormLabel>
                                    <Input
                                      {...field}
                                      type="time"
                                      placeholder=""
                                    />
                                    <FormErrorMessage>
                                      {form.errors.name}
                                    </FormErrorMessage>
                                  </FormControl>
                                )}
                              </Field>
                              <Field name="destination">
                                {({ field, form }) => (
                                  <FormControl>
                                    <FormLabel>
                                      Select your destination
                                    </FormLabel>
                                    <Select {...field} placeholder="SFO">
                                      <option>OAK</option>
                                      <option>SJC</option>
                                    </Select>
                                    <FormErrorMessage>
                                      {form.errors.name}
                                    </FormErrorMessage>
                                  </FormControl>
                                )}
                              </Field>
                            </Box>
                          </HStack>
                          <Field name="pickup">
                            {({ field, form }) => (
                              <FormControl>
                                <FormLabel>
                                  Select your pick up location
                                </FormLabel>
                                <Select {...field} placeholder="Unit 1">
                                  <option>Unit 2</option>
                                  <option>Unit 3</option>
                                  <option>Unit 4/Foothill</option>
                                  <option>Clark Kerr</option>
                                  <option>Blackwell</option>
                                  <option>Downtown</option>
                                  <option>Southside</option>
                                  <option>Northside</option>
                                </Select>
                                <FormErrorMessage>
                                  {form.errors.name}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>
                          <Field name="preferences">
                            {({ field, form }) => (
                              <FormControl>
                                <FormLabel>
                                  List your preferences for fellow riders
                                </FormLabel>
                                <Select {...field} placeholder="No Preference">
                                  <option>Male Only</option>
                                  <option>Femaly Only</option>
                                </Select>
                                <FormErrorMessage>
                                  {form.errors.name}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>
                          <Stack spacing={10} pt={2}>
                            <Button
                              mt={4}
                              colorScheme="teal"
                              isLoading={props.isSubmitting}
                              type="submit"
                            >
                              Submit
                            </Button>
                          </Stack>
                        </Form>
                      )}
                    </Formik>
                  </Stack>
                </Box>
              </Stack>
            </Flex>
          </Box>
          <Box>
            <Center py={6}>
              <Box
                maxW={'1000px'}
                w={'900px'}
                bg={'white'}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={3}
                textAlign={'left'}
              >
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                  October 25
                </Heading>
                <HStack spacing="250px">
                  <Text fontWeight={600} color={'gray.500'}>
                    Unit 3
                    <Text fontWeight={600} color={'green.500'}>
                      5:00 AM
                    </Text>
                  </Text>
                  <Text fontWeight={600} color={'blue.500'}>
                    32 minutes ↠{' '}
                  </Text>
                  <Text fontWeight={600} color={'black.500'}>
                    SFO{' '}
                    <Text fontWeight={600} color={'green.500'}>
                      5:32 AM
                    </Text>
                  </Text>
                </HStack>
                <Button
                  flex={1}
                  fontSize={'sm'}
                  rounded={'full'}
                  _focus={{
                    bg: 'green.400',
                  }}
                >
                  Join This Ride
                </Button>
              </Box>
            </Center>
            <Center py={6}>
              <Box
                maxW={'1000px'}
                w={'900px'}
                bg={'white'}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={3}
                textAlign={'left'}
              >
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                  October 25
                </Heading>
                <HStack spacing="250px">
                  <Text fontWeight={600} color={'gray.500'}>
                    Clark kerr
                    <Text fontWeight={600} color={'green.500'}>
                      8:04 AM
                    </Text>
                  </Text>
                  <Text fontWeight={600} color={'blue.500'}>
                    32 minutes ↠{' '}
                  </Text>
                  <Text fontWeight={600} color={'black.500'}>
                    SFO{' '}
                    <Text fontWeight={600} color={'green.500'}>
                      8:36 AM
                    </Text>
                  </Text>
                </HStack>
                <Button
                  flex={1}
                  fontSize={'sm'}
                  rounded={'full'}
                  _focus={{
                    bg: 'green.400',
                  }}
                >
                  Join This Ride
                </Button>
              </Box>
            </Center>
            <Center py={6}>
              <Box
                maxW={'1000px'}
                w={'900px'}
                bg={'white'}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={3}
                textAlign={'left'}
              >
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                  October 25
                </Heading>
                <HStack spacing="250px">
                  <Text fontWeight={600} color={'gray.500'}>
                    Downtown
                    <Text fontWeight={600} color={'green.500'}>
                      9:00 PM
                    </Text>
                  </Text>
                  <Text fontWeight={600} color={'blue.500'}>
                    32 minutes ↠{' '}
                  </Text>
                  <Text fontWeight={600} color={'black.500'}>
                    SFO{' '}
                    <Text fontWeight={600} color={'green.500'}>
                      9:32 AM
                    </Text>
                  </Text>
                </HStack>
                <Button
                  flex={1}
                  fontSize={'sm'}
                  rounded={'full'}
                  _focus={{
                    bg: 'green.400',
                  }}
                >
                  Join This Ride
                </Button>
              </Box>
            </Center>
          </Box>
        </HStack>
      )}
      {!showReq && (
        <Flex align={'center'} justify={'center'} bg={'gray.50'}>
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'} textAlign={'center'}>
                Find a Ride!
              </Heading>
              <Text fontSize={'lg'} color={'gray.600'}>
                Group up with some college buddies!
              </Text>
            </Stack>
            <Box rounded={'lg'} bg={'white'} boxShadow={'lg'} p={8}>
              <Stack spacing={4}>
                <Formik
                  initialValues={{
                    day: '25',
                    time: '6:00 AM',
                    destination: 'SFO',
                    pickup: 'Unit 1',
                    domestic: 'yes',
                  }}
                  onSubmit={(values, actions) => {
                    setTimeout(() => {
                      setPage(<FindRides setPage={setPage} showReq={true} />);
                      actions.setSubmitting(false);
                    }, 1000);
                  }}
                >
                  {props => (
                    <Form>
                      <HStack>
                        <Box>
                          <Field name="day">
                            {({ field, form }) => (
                              <FormControl>
                                <FormLabel>
                                  Choose the day of your flight.
                                </FormLabel>
                                <Input
                                  {...field}
                                  type="date"
                                  placeholder="25"
                                />
                                <FormErrorMessage>
                                  {form.errors.name}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>
                          <Field name="time">
                            {({ field, form }) => (
                              <FormControl>
                                <FormLabel>
                                  Choose what time your flight is.
                                </FormLabel>
                                <Input {...field} type="time" placeholder="" />
                                <FormErrorMessage>
                                  {form.errors.name}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>
                          <Field name="destination">
                            {({ field, form }) => (
                              <FormControl>
                                <FormLabel>Select your destination</FormLabel>
                                <Select {...field} placeholder="SFO">
                                  <option>OAK</option>
                                  <option>SJC</option>
                                </Select>
                                <FormErrorMessage>
                                  {form.errors.name}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>
                        </Box>
                      </HStack>
                      <Field name="pickup">
                        {({ field, form }) => (
                          <FormControl>
                            <FormLabel>Select your pick up location</FormLabel>
                            <Select {...field} placeholder="Unit 1">
                              <option>Unit 2</option>
                              <option>Unit 3</option>
                              <option>Unit 4/Foothill</option>
                              <option>Clark Kerr</option>
                              <option>Blackwell</option>
                              <option>Downtown</option>
                              <option>Southside</option>
                              <option>Northside</option>
                            </Select>
                            <FormErrorMessage>
                              {form.errors.name}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                      <Field name="preferences">
                        {({ field, form }) => (
                          <FormControl>
                            <FormLabel>
                              List your preferences for fellow riders
                            </FormLabel>
                            <Select {...field} placeholder="No Preference">
                              <option>Male Only</option>
                              <option>Femaly Only</option>
                            </Select>
                            <FormErrorMessage>
                              {form.errors.name}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                      <Stack spacing={10} pt={2}>
                        <Button
                          mt={4}
                          colorScheme="teal"
                          isLoading={props.isSubmitting}
                          type="submit"
                        >
                          Submit
                        </Button>
                      </Stack>
                    </Form>
                  )}
                </Formik>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      )}
    </>
  );
}
