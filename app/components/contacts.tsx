import { Box, Flex, Heading, Text, VStack, HStack, Button, SimpleGrid, Textarea } from '@chakra-ui/react';

const ContactsSection = () => (
  <Box>
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
      <VStack alignItems='flex-start'>
        <Heading as="h2" size="xl" mb={4}>Contacts</Heading>
        <HStack alignItems='flex-start'>
          <Text fontWeight='bold'>Address: </Text>
          <Text>Purok 3b Reclusado, Apokon, Tagum City 8100</Text>
        </HStack>
        <HStack alignItems='flex-start'>
          <Text fontWeight='bold'>Contact Number: </Text>
          <Text>09635705503</Text>
        </HStack>
        <HStack alignItems='flex-start'>
          <Text fontWeight='bold'>Email: </Text>
          <Text>aguelofledandree@gmail.com</Text>
        </HStack>
      </VStack>
      <VStack justifyContent='center' gap={5}>
        <Heading>Message Me!</Heading>
        <Textarea></Textarea>
        <Button>Send Message</Button>
      </VStack>
    </SimpleGrid>
  </Box>
);

export default ContactsSection;
