import { Box, Show, Image } from "@chakra-ui/react";
import logo from "../assets/ck.png"

const Name = () => {
  return (
    <Image
    borderRadius='full'
    boxSize='50px'
    src={logo}
    />
    

    // <Show breakpoint='(max-width: 1000px)'>
    // <Text as="b" fontSize='3xl' style={{ textShadow:"#FC0 1px 0 10px"}}>
    //   Shubham_Verma</Text>

    // </Show>
  );
};

export default Name;
