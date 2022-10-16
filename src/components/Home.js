import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  Box,
  SimpleGrid,
  IconProps,
  Image,
  HStack,
} from '@chakra-ui/react';


export default function Home() {
  return (
    <Container maxW={'5xl'}>
      <Box
        backgroundImage="url('/images/kyuubi.png')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      />
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
        <Text as={'span'} color={'#5657ff'}>
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
            bg={'#52e3b5'}
            _hover={{ bg: '#4cc7a0' }}>
            Sign up Now!
          </Button>
        </Stack>
      </Stack>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={200}>
      <Stack spacing={4}>
        <Text
          textTransform={'uppercase'}
          color={'blue.400'}
          fontWeight={600}
          fontSize={'xl'}
          p={2}
          alignSelf={'flex-start'}
          rounded={'md'}>
          What We Do
        </Text>
        <Heading>Making ride shares cheaper, easier, and safer</Heading>
        <Text color={'gray.500'} fontSize={'lg'}>
        Organizing ride shares between college students that actually helps them
        save on transportation fees. Students can make requests to share rides with
        others from their college and split fees evenly.
        </Text>
      </Stack>
      <Flex>
        <Box>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'coberv1.png'
            }
            objectFit={'cover'}
          />
        </Box>
      </Flex>
      <Box mb={'5'}>
        <Text fontSize='xs'>Copyright © 2022 Cober, Inc. All Rights Reserved.</Text>
      </Box>
    </SimpleGrid>
    </Container>
    
  );
}

