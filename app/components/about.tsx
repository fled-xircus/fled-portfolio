import { Box, Center, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';

const AboutSection = () => (
  <Box px={{base: 5, md: 20}}>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Box height='auto'>
        <Image borderRadius={20} src='/fled-avatar.jpg' alt="fled-avatar" width={{base: 'sm', md: 'md'}} height={{base: 'sm', md: 'md'}} />
      </Box>
      <Box>
        <Heading as="h2" fontSize={{ base: '2xl', md: '4xl' }} mb={4}>About Me</Heading>
        <Text fontSize={{ base: 'xl', md: '2xl' }} mb={5}>Hi! I am Fled Andree Aguelo</Text>
        <Text fontSize={{ base: 'md', md: 'xl' }}>
          I am a skilled computer engineer with a passion for web design. With expertise in front-end development,
          I create visually appealing, user-friendly websites that meet client needs and industry standards. I am committed to continuous
          learning and innovation, staying updated with the latest web technologies to deliver exceptional digital experiences with
          precision and professionalism.
        </Text>
      </Box>
    </SimpleGrid>
  </Box>
);

export default AboutSection;
