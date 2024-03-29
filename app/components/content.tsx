import { Box, Flex, Link, Text, HStack, Button, useColorMode, useMediaQuery, Divider, Spacer, Avatar, VStack } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import AboutSection from './about'
import ContactsSection from './contacts'
import ProjectsSection from './projects'
import HomeSection from './home'
import { TbMenu2 } from "react-icons/tb"
import { useWallet } from '@xircus-web3/react'

function Content() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isSmallerThanMd] = useMediaQuery("(max-width: 768px)");
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const wallet = useWallet()
  const handleDisconnect = () => {
    wallet.reset();
  };

  return (
    <Box pt={5}>
      <Box px={{ base: 4, md: 20 }}>
        <Flex justifyContent="space-between" alignItems="center" mb={3} flexDirection={{ base: 'column', md: 'row' }}>
          <Flex justifyContent="space-between" alignItems="center">
            <Avatar src='/xircus.png' mr={2} />
            <Text fontSize="xl" fontWeight="bold">dev.fled</Text>
            <Spacer/>
            {isSmallerThanMd && (
              <Button onClick={toggleMenu} size="sm" ml={2}><TbMenu2 /></Button>
            )}
          </Flex>
          {!isSmallerThanMd && (
            <HStack mb={{ base: 4, md: 0 }} spacing={{ base: 2, md: 4 }}>
              <Link href="#home">Home</Link>
              <Link href="#about">About</Link>
              <Link href="#contacts">Contacts</Link>
              <Link href="#projects">Projects</Link>
              <Button variant='ghost' onClick={toggleColorMode} size="sm" leftIcon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}>
              </Button>
              <VStack w='100px'  align='center'>
                <Text fontSize="sm">Metamask</Text>
                <Text fontSize="xs" noOfLines={1} isTruncated>
                  {wallet.status === 'connected' && wallet.account}
                </Text>
                {wallet.status === 'connected' && (
                  <Button onClick={handleDisconnect} size="sm">Disconnect</Button>
                )}
                {wallet.status !== 'connected' && (
                  <Button onClick={wallet.connectMetamask} size="sm">Connect</Button>
               )}
              </VStack>
            </HStack>
          )}
        </Flex>
      </Box>
      <Divider />
      {isSmallerThanMd && isOpen && (
        <Flex flexDirection="column" alignItems="center">
          <Link href="#home" mb={2}>Home</Link>
          <Link href="#about" mb={2}>About</Link>
          <Link href="#contacts" mb={2}>Contacts</Link>
          <Link href="#projects" mb={2}>Projects</Link>
          <Button variant='ghost' onClick={toggleColorMode} size="sm" mb={2} leftIcon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}>
          </Button>
          <VStack w='100px' align='center'>
            <Text fontSize="sm">Metamask Account</Text>
            <Text fontSize="xs" noOfLines={1} isTruncated>
              {wallet.status === 'connected' && wallet.account}
            </Text>
            {wallet.status === 'connected' && (
              <Button onClick={handleDisconnect} size="sm">Disconnect</Button>
            )}
            {wallet.status !== 'connected' && (
              <Button onClick={wallet.connectMetamask} size="sm">Connect</Button>
            )}
          </VStack>
        </Flex>
      )}
      <Box gap={5}>
        <Box id="home" mt={{ base: 0, md: 0 }} py={{ base: 'none', md: 10 }} px={{ base: 4 }} _dark={{ bgColor: '#0B0E1D' }} width='full'>
          <HomeSection />
        </Box>
        <Box id="about" mb={50} mt={{ base: -100, md: 100 }}>
          <AboutSection />
        </Box>
        <Box id="contacts" _light={{ bgColor: 'none' }} _dark={{ bgColor: '#0B0E1D' }} width='full' p={{ base: 5, md: 20 }} >
          <ContactsSection />
        </Box>
        <Box id="projects" p={{ base: 5, md: 20 }}>
          <ProjectsSection />
        </Box>
      </Box>
    </Box>
  );
}

export default Content;
