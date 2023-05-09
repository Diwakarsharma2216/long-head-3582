import { Container, SimpleGrid,Box, HStack, VStack,Text, Image, Heading, Button } from '@chakra-ui/react'
import React from 'react'
import { BsBoxArrowUpRight } from "react-icons/bs";
import craditmeter from "../assets/meter.png"
import { BsFillCreditCard2BackFill, BsThreeDots } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
const MidSection = () => {
  const data=[{text:"credit card use",value:9},{text:"Payment History",value:100},{text:"credit Age",value:4},{text:"Total Accounts",value:9}]
  return (
    <div>
     <Container maxW={"container.2xl"}  minH={"3xl"}  bg={"#3cdc94"}  mt="0" >
      <Box>
        <SimpleGrid columns={{base:1,md:2}}>
            <Box mt={"10"}>
              <Box  >
              <HStack spacing={"auto"}>
                <Box width={"aut0"}>
                  <Heading>Health Karma</Heading>
                </Box>
                <Box>
                 <Button borderRadius={"3xl"}  ml={"1.5"} colorScheme='teal' variant='outline'>Explore</Button>
                 <Button borderRadius={"3xl"}  ml={"1.5"} colorScheme='teal' variant='outline' >Transunion</Button>
                </Box>
              </HStack>
              </Box>
              <Box mt={"2.5"}   >
              <HStack>
                <Box>
                  -1pts
                  <Text fontSize={{base:"2xl",md:"8xl"}}>832</Text>
                  Excellent Checked daily
                </Box>
                <Box>
                  <Image src={craditmeter} height={{md:"md"}}></Image>
                </Box>
              </HStack>
              </Box>


              <Box  mt={"12.5"}   >
              <HStack>
                <Box bg={"whiteAlpha.900"} h={"36"} w="60"  borderRadius={"2xl"}>
                  <VStack>
                  <Box >
                    <HStack spacing={"8"} >
                    
                      $<Text fontSize={"2xl"}>net Worth</Text>
                      <Box> <BsBoxArrowUpRight /></Box>
                    </HStack>
                  <Text fontSize={"4xl"} ><span style={{fontSize:"20px",color:"grey"}} >$</span>137,036</Text>
                  </Box>

                  </VStack>
                  
                </Box>
                <Box bg={"whiteAlpha.900"} h={"36"} w="60"  borderRadius={"2xl"}>
                  <VStack>
                  <Box >
                    <HStack spacing={"8"} >
                    
                      $<Text fontSize={"2xl"}>Total Dept</Text>
                      <Box fontsize="3xl"> <BsBoxArrowUpRight /></Box>
                    </HStack>
                  <Text fontSize={"4xl"} ><span style={{fontSize:"20px",color:"grey"}} >$</span>64,100</Text>
                  </Box>

                  </VStack>
                  
                </Box>
              </HStack>
              </Box>


            </Box>
            <Box  ml={{md:"16"}}> 
              <SimpleGrid columns={{base:1,md:2}} gap={{base:"1",md:"2"}} >
               {data.map((el)=><Box bg={"whiteAlpha.900"} w={{base:"auto",md:"64"}} h={{base:"185",md:"185"}} borderRadius={"2xl"}>
                <VStack>
                <HStack  spacing={"40"} mt={"5"} ml="5">
               <Box borderRadius={"3xl"} bg={"green.300"} fontSize={"3xl"} ><BsFillCreditCard2BackFill /></Box>
               <Box borderRadius={"3xl"} mt={"5"} mr="10" border={"1px solid grey"} bg={"white.300"} fontSize={"3xl"}><BsThreeDotsVertical /></Box>
                
                </HStack>
                <Text textAlign={"left"} fontSize={"xl"} fontStyle={"bold"}>{el.text}</Text>
                <HStack  spacing={"40"} mt={"5"} ml="5">
                 <Text   fontSize={"3xl"}>{el.value}<span>%</span></Text>
                 <Box fontSize={"3xl"}> <BsThreeDots />  </Box>
                
                </HStack>
                </VStack>
               
               </Box>)}
               </SimpleGrid>
            </Box>
        </SimpleGrid>
      </Box>

     </Container>
    </div>
  )
}

export default MidSection
