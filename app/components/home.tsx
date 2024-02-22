import { Box, Center, Heading, Image, SimpleGrid, Text, VStack, Hide } from '@chakra-ui/react';

const HomeSection = () => (
  <Box  height='md'>
    <Center>
      <SimpleGrid  columns={{ base: 1, md: 2 }} spacing={10}>
        <Box mt={100}>
        <VStack>
          <Heading _light={{color: 'black'}}>FLED ANDREE AGUELO
          </Heading>
          <Text _light={{color: 'black'}}>
            Xircus TON Developer
          </Text>
          <Text>Development • UI/UX Design</Text>  
        </VStack>
        </Box> 
        <Hide below='md'>
          <Box>
            <Image boxSize={{base: 1, md: 'md'}} src='/web-dev.png' alt='web-dev' />
          </Box>
        </Hide>
      </SimpleGrid>
    </Center>
  </Box>
);

export default HomeSection;
