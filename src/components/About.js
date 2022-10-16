import {
    Box,
    Stack,
    Text,
    Flex,
    SimpleGrid,
    chakra,
    Icon,
    Heading,
    Grid,
    GridItem,
    Container,
    VStack,
  } from '@chakra-ui/react';
  import { FcOvertime, FcCurrencyExchange, FcBadDecision} from 'react-icons/fc';
  import {} from '@chakra-ui/react';

  const Feature = ({ title, text, icon }: FeatureProps) => {
    return (
      <Stack>
        <Flex
          w={20}
          h={20}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={'gray.100'}
          mb={1}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{title}</Text>
        <Text noOfLines ={5} color={'gray.600'}>{text}</Text>
      </Stack>
    );
  };

  export default function About() {
    return (
        <VStack spacing = '100px'>
            <Box w='70%' p={5} color='white' ml={'200px'} mr={'200px'}>
                <Text fontWeight = {'bold'} fontSize = {'40px'} color = {'#204988'}>
                    OUR MISSION STATEMENT
                </Text>
                <Text fontWeight = {"medium"} fontSize = {'20px'} color = {'gray'}>
                We strive to get students to where they need to be at affordable prices and 
                to connect college students together to make transportation safe and easy.
                </Text>

            </Box>
            <Box w='70%' p={4}>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={15}>
                    <Feature
                    icon={<Icon as={FcCurrencyExchange} w={10} h={10} />}
                    title={'Payment'}
                    text={
                        'Ride sharers have up until 24 hours after the end of the ride to send their payment to the host'
                    }
                    />
                    <Feature
                    icon={<Icon as={FcOvertime} w={10} h={10} />}
                    title={'Timeliness'}
                    text={
                        "Please respect other's time and show up on time—Riders are allowed to leave 10 minutes after the agreed ride time. No-shows are treated as full rides, users will be flagged, and payment is to be paid in full."
                    }
                    />
                    <Feature
                    icon={<Icon as={FcBadDecision} w={10} h={10} />}
                    title={'Flagging System'}
                    text={
                        'Users are expected to uphold basic etiqutte during car shares. Riders can be flagged for inappropriate behavior, lack of timeliness, failure to submit payment on time, and unresponsiveness.'
                    }
                    />
            </SimpleGrid>
            <Box mt={'40'} mb={'1'} align={'center'}>
              <Text fontSize='xs'>Copyright © 2022 Cober, Inc. All Rights Reserved.</Text>
            </Box>
        </Box>
    </VStack>
    );
    }