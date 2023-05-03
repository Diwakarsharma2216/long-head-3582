import { Box, Container, HStack, Heading, Image, VStack,Text, Button,Flex } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Componenet/Navbar'
import Footer from '../Componenet/Footer'
import dribbble from "../asset/dribbble.webp"
const HomePage = () => {
  return (
    <div>
        <Navbar />
      <Container maxW={"container.lg"} mt={"10"}>
        {/* heading 1st here   */}
        <Flex justify={"space-between"}>
          <Box>
            <HStack>
              <Box ><Image src={dribbble} height={"12"} /></Box>
              <Box>
                <VStack>
                  <Box ml={"10"}><Text textAlign={"start"}>Credit Karma - Finance Insights Platform</Text></Box>
                  <Box ><Text textAlign={"start"}>RonDesignLab ⭐️•Follow•Hire Us</Text></Box>
                </VStack>
              </Box>
            </HStack>
           
          </Box>
          <Box>
            <HStack>
              <Box><Button>Save</Button></Box>
              <Box><Button>Like</Button></Box>
            </HStack>
          </Box>
        </Flex>
      </Container>
      <Footer />
    </div>
  )
}

export default HomePage
