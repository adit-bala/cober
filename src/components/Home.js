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
          <Heading size='lg' fontSize='70px' color={'#204988'}>
              Co
          <Text as={'span'} color={'black'}>
              ber
              </Text>
        </Heading>
          <Heading as='h2' size='2xl'>
              Ride sharing for college students, {' '}
          <Text as={'span'} color={'#f7e4aa'}>
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
              bg={'#204988'}
              _hover={{ background: "gray.200", color: "#204988" }}>
              Sign up Now!
            </Button>
          </Stack>
        </Stack>
      </Container>
    );
  }
  
  