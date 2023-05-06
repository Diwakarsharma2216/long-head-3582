import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Show,
  HStack,
  Text,
  useDisclosure,
  IconButton,
  Hide,
  Container,
} from "@chakra-ui/react";
import {
  MoonIcon,
  SunIcon,
  HamburgerIcon,
  CloseIcon,
  AddIcon,
} from "@chakra-ui/icons";
import Photo from "./Photo";
import Name from "./Name";
import "./Navbar.css";
import {AiFillDashboard} from "react-icons/ai";

export default function Navbar() {
  // const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div id="navFix">
      
      <Box
        bg={useColorModeValue("#3cdc94", "gray.100")}
        px={9}
        width={["100%"]}
        height={["100px"]}
      >
        <Flex h={16} paddingTop="60px" alignItems={"center"} justifyContent={"space-between"}>
          <HStack w="42%">
            <Name/>

            <Show breakpoint="(min-width: 1000px)">
              {" "}
              <Photo />
            </Show>
          </HStack>

          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <HStack spacing={8} alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
                id="myDIV"
              >
                <Button className="btnRes" colorScheme='whiteAlpha'_hover={{ bg: "black.500", color: " white" }} borderRadius="25px">
                  <a href="#Karma">
                    {" "}
                    <b>Karma</b>
                  </a>
                </Button>

                <Button className="btnRes" colorScheme='whiteAlpha' _hover={{ bg: "black.500", color: " white" }} borderRadius="25px">
                  <a href="#Credits">
                    <b>Credits</b>
                  </a>
                </Button>

                <Button className="btnRes" colorScheme='whiteAlpha' _hover={{ bg: "black.500", color: " white" }} borderRadius="25px">
                  <a href="#Money">
                    {" "}
                    <b>Money</b>
                  </a>
                </Button>
              </HStack>
            </HStack>
          </Flex>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              {/* <Button onClick={toggleColorMode} size='md'>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button> */}
              
              <AiFillDashboard size={30} />
              
            </Stack>
          </Flex>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                
                <Button  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}>
                  <a href="#">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>

                <Button  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}>
                  <a href="#">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>
                <Button  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}>
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>
                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="#Karma">
                    {" "}
                    <b>Karma</b>
                  </a>
                </Button>

                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="#Credits">
                    <b>Credits</b>
                  </a>
                </Button>

                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="#Money">
                    {" "}
                    <b>Money</b>
                  </a>
                </Button>
              </Stack>
            </Box>
          ) : null}
        </Flex>
      </Box>
     
    </div>
  );
}
