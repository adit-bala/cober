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

export default function SignupCard({ setPage }) {
  return (
    <>
      <Flex minH={'100vh'} align={'center'} justify={'center'} bg={'gray.50'}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Request a Ride
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              save on trips ✌️
            </Text>
          </Stack>
          <Box rounded={'lg'} bg={'white'} boxShadow={'lg'} p={8}>
            <Stack spacing={4}>
              <Formik
                initialValues={{
                  date: 'date',
                  destination: 'SFO',
                  pickup: 'Unit 1',
                  domestic: 'yes',
                }}
                onSubmit={(values, actions) => {
                  setTimeout(() => {
                    setPage(
                      <MyRides Requests={JSON.stringify(values, null, 2)} />
                    );
                    actions.setSubmitting(false);
                  }, 1000);
                }}
              >
                {props => (
                  <Form>
                    <HStack>
                      <Box>
                        <Field name="date">
                          {({ field, form }) => (
                            <FormControl>
                              <FormLabel>
                                Choose what date and time you want to leave.
                              </FormLabel>
                              <Input
                                {...field}
                                type="datetime-local"
                                placeholder="name"
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
    </>
  );
}
