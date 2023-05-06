import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
import { AiOutlinePercentage } from "react-icons/ai";
import { FaCarSide } from "react-icons/fa";
import { HiCircleStack } from "react-icons/hi2";

export default function CreditOffers() {
    return (
        <Container maxW={"container.2xl"} mt={"-16"}>
        <Box fontFamily={'Product Sans'} letterSpacing={1} bg={'black'} color={'white'} p={10} borderRadius={30}>
            <Flex justifyContent={'space-between'} alignItems={'center'} >
                <Flex w={'40%'} justifyContent={'space-between'} alignItems={'center'}>
                    <Text fontFamily={'Product Sans'} fontSize={'4xl'}>Credit Offers</Text>
                    <Flex alignItems={'center'}>
                        <Text fontSize={'5xl'}>24</Text>
                        <Text mt={4} ml={2}>offers for you</Text>
                    </Flex>
                </Flex>
                <BsArrowUpRightCircle fontSize={50} />
            </Flex>
            <Flex mt={5} gap={1}>
                <Box p={5} bg={'#FE5858'} borderRadius={40} color={'black'}>
                    <Flex alignItems={'center'}>
                        <Box p={5} bg={"white"} borderRadius={'50%'}>
                            <IoHome fontSize={20} />
                        </Box>
                        <Box ml={5} mr={10} w={'50%'}>
                            <Text fontSize={'xl'}>Goldman Sachs</Text>
                        </Box>
                    </Flex>
                    <Flex mt={10} justifyContent={'space-between'}>
                        <Flex direction={'column'}>
                            <Text>Rate</Text>
                            <Flex alignItems={'center'}>
                                <Text fontSize={'6xl'}>14</Text>
                                <AiOutlinePercentage />
                            </Flex>
                        </Flex>
                        <Flex direction={'column'}>
                            <Text>Period</Text>
                            <Flex alignItems={'center'}>
                                <Text fontSize={'6xl'}>18</Text>
                                <Text>month</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
                <Box p={5} bg={"#299CFF"} borderRadius={40} color={'black'}>
                    <Flex alignItems={'center'}>
                        <Box p={5} bg={"white"} borderRadius={'50%'}>
                            <FaCarSide fontSize={20} />
                        </Box>
                        <Box ml={5} mr={10} w={'50%'}>
                            <Text fontSize={'xl'}>Bank of America</Text>
                        </Box>
                    </Flex>
                    <Flex mt={10} justifyContent={'space-between'}>
                        <Flex direction={'column'}>
                            <Text>Rate</Text>
                            <Flex alignItems={'center'}>
                                <Text fontSize={'6xl'}>8</Text>
                                <AiOutlinePercentage />
                            </Flex>
                        </Flex>
                        <Flex direction={'column'}>
                            <Text>Period</Text>
                            <Flex alignItems={'center'}>
                                <Text fontSize={'6xl'}>36</Text>
                                <Text>month</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
                <Box p={5} bg={"#92E50A"} borderRadius={40} color={'black'}>
                    <Flex alignItems={'center'}>
                        <Box p={5} bg={"white"} borderRadius={'50%'}>
                            <HiCircleStack fontSize={20} />
                        </Box>
                        <Box ml={5} mr={10} w={'50%'}>
                            <Text fontSize={'xl'}>JP Morgan Chase</Text>
                        </Box>
                    </Flex>
                    <Flex mt={10} justifyContent={'space-between'}>
                        <Flex direction={'column'}>
                            <Text>Rate</Text>
                            <Flex alignItems={'center'}>
                                <Text fontSize={'6xl'}>12</Text>
                                <AiOutlinePercentage />
                            </Flex>
                        </Flex>
                        <Flex direction={'column'}>
                            <Text>Period</Text>
                            <Flex alignItems={'center'}>
                                <Text fontSize={'6xl'}>12</Text>
                                <Text>month</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>
        </Box>
        </Container>
    )
}