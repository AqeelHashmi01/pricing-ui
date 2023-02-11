"use client"
import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { theme } from '@/theme/theme';
import { Button } from '@chakra-ui/react';
import { PriceHeading, PriceText, Premium_Pro, BILLED_JUST_ONCE, Price, ACCESS_FEATURES, ListData, subscriptions, DevName } from 'Constants/constants';

const Main: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: "center", flexDirection: "column", alignItems: 'center', position: 'relative' }}>
      <Box bg={theme.colors.main.primary} w='100%' p={4} color='white' h={{ base: '45vh', md: '45vh' }} display="flex" flexDirection="column"
        alignItems="center" pt="12" mb="8" justifyContent='flex-start'  >
        <Heading as='h3' size={{ base: "xl", md: "xl", lg: "2xl" }} mb="4">{PriceHeading}</Heading>
        <Text fontSize={{ base: "lg", md: "xl" }}>{PriceText}</Text>

      </Box>
      <Box w={{ base: '90%', md: '75%' }} borderRadius='xl' display="flex" flexDirection={{ base: 'column', md: 'row' }} boxShadow='md' mt="-40">
        <Box flex={2} bg={theme.colors.main.secondary} roundedTopLeft='xl' roundedTopRight={{ base: "xl", md: "none" }} roundedBottomLeft={{ base: 'none', md: "xl" }} display="flex" flexDirection="column" justifyContent="center" alignItems="center" >
          <Heading mt={10} mb={3}>{Premium_Pro}</Heading>
          <Heading as='h3' size='3xl'>{Price}</Heading>
          <Text fontSize='xl' mt={3}>{BILLED_JUST_ONCE}</Text>
          <Button bg={theme.colors.main.primary} color="white" px="24" mt={3} mb={10}>Get Started</Button>
        </Box>
        <Box flex={3} bg="white" roundedRight="lg" px={{ base: '5', md: '14' }} py="6">
          <Text fontSize={{ base: 'md', md: 'xl' }} mb="5">{ACCESS_FEATURES}</Text>
          {
            ListData.map((item, index) => (
              <Box key={index} mb={3} display="flex" alignItems="center">

                {item.icon}
                <Text fontSize={{ base: 'md', md: 'xl' }} ml={{ base: '3', md: "5" }}>{item.name}</Text>

              </Box>
            ))
          }
        </Box>
      </Box>
      <Box w={{ base: '90%', md: '70%' }} display="flex" flexDirection={{ base: 'column', md: 'row' }} mt="12">
        {
          subscriptions.map((property, index) => (
            <Box key={index} display="flex" alignItems="center" justifyContent="flex-start" mb="8" ml={{ base: 'none', md: "22" }}>
              {property.icon}
              <Text as='b' fontSize='lg' ml={{ base: "4", md: "6" }}>{property.name}</Text>
            </Box>
          ))
        }
      </Box>
      <Box as="footer" bg="gray.800" w={{ base: '100%', md: '100%' }} display="flex" p={2} width="100%" alignItems="center" justifyContent="center" position="fixed" bottom={0}>
        <Text color="white">
          {DevName}
        </Text>
      </Box>
    </div>

  )
}

export default Main;