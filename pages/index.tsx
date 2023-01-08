'use client'

import { motion } from 'framer-motion'
import { Heading, Center, VStack } from '@chakra-ui/react'
import Image from 'next/image'

export default function Home() {
  return (
    <VStack justify={'center'} height={'100vh'}>
      <Center>
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Image
            src="https://i.imgur.com/93g8jTN.png"
            alt="cot-paintball"
            width={100}
            height={100}
          />
        </motion.div>
      </Center>
      <Heading textAlign={'center'}>Página en construcción</Heading>
    </VStack>
  )
}
