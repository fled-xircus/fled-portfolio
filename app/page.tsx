'use client'
import { ChakraProvider } from '@chakra-ui/react';
import Content from '../app/components/content'
import { XircusProvider, setupSDK } from '@xircus-web3/react'

export default function Home() {
  const sdk = setupSDK('bsc')

  return (
    <XircusProvider sdk={sdk}>
      <ChakraProvider>
        <Content />
     </ChakraProvider>
    </XircusProvider>
  );
}


