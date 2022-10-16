import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
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
import { Formik, Field, Form } from 'formik';
import Home from "./Home"

export default function SignUpCard({ setPage, setLogin }) {
  return (
    <>
      <Flex minH={'100vh'} align={'center'} justify={'center'} bg={'gray.50'}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to ride with fellow students :v:
            </Text>
          </Stack>
          <Box rounded={'lg'} bg={'white'} boxShadow={'lg'} p={8}>
            <Stack spacing={4}>
              <Formik
                initialValues={{
                  firstName: 'Adit',
                  lastName: 'Bala',
                  username: 'aditbala',
                  email: 'cober@berkeley.edu',
                  password: 'ilovecoding<3',
                  Gender: 'Male',
                }}
                onSubmit={(values, actions) => {
                  setTimeout(() => {
                    setPage(Home);
                    alert(JSON.stringify(values, null, 2));
                    setLogin(values.username);
                    
                    actions.setSubmitting(false);
                  }, 1000);
                }}
              >
                {props => (
                  <Form>
                    <HStack>
                      <Box>
                        <Field name="firstName">
                          {({ field, form }) => (
                            <FormControl>
                              <FormLabel>First name</FormLabel>
                              <Input {...field} placeholder="name" />
                              <FormErrorMessage>
                                {form.errors.name}
                              </FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                        <Field name="lastName">
                          {({ field, form }) => (
                            <FormControl>
                              <FormLabel>Last name</FormLabel>
                              <Input {...field} placeholder="name" />
                              <FormErrorMessage>
                                {form.errors.name}
                              </FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                      </Box>
                    </HStack>
                    <Field name="email">
                      {({ field, form }) => (
                        <FormControl>
                          <FormLabel>Email (must end in .edu) </FormLabel>
                          <Input {...field} placeholder="name" />
                          <FormErrorMessage>
                            {form.errors.name}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="username">
                      {({ field, form }) => (
                        <FormControl>
                          <FormLabel>Username </FormLabel>
                          <Input {...field} placeholder="name" />
                          <FormErrorMessage>
                            {form.errors.name}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="password">
                      {({ field, form }) => (
                        <FormControl>
                          <FormLabel>Password </FormLabel>
                          <Input {...field} placeholder="name" />
                          <FormErrorMessage>
                            {form.errors.name}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="Gender">
                      {({ field, form }) => (
                        <FormControl>
                          <FormLabel>Gender </FormLabel>
                          <Select {...field} placeholder="Select your gender">
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
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
