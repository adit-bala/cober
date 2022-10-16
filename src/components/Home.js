import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    Box,
    IconProps,
  } from '@chakra-ui/react';
  
  export default function Home() {
    return (
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading size='lg' fontSize='70px'>
              Cober
        </Heading>
          <Heading as='h2' size='2xl'>
              Ride sharing for college students, {' '}
          <Text as={'span'} color={'blue'}>
              made easy
            </Text>
        </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
            Headed to the aiport from your college? Find trustworthy students to rideshare with!
          </Text>
          <Stack spacing={6} direction={'row'}>
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'green'}
              bg={'green.400'}
              _hover={{ bg: 'green.500' }}>
              Sign up Now!
            </Button>
          </Stack>
        </Stack>
      </Container>
    );
  }
  
  