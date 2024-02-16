'use client'
import { ChakraProvider } from '@chakra-ui/react';
import  Content  from '../app/components/content'


export default function Home() {
  return (
    <ChakraProvider>
      <Content />
    </ChakraProvider>
  );
}


