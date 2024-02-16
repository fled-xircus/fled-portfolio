import { Box, Flex, Heading, Text, VStack, HStack } from '@chakra-ui/react';

const ContactsSection = () => (
  <Box>
    <Heading as="h2" size="xl" mb={4}>Contacts</Heading>
    <Flex>
      <VStack alignItems='flex-start'>
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
    </Flex>
  </Box>
);

export default ContactsSection;
