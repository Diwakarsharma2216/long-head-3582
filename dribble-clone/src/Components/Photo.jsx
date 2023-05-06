import { Avatar, Box, Flex, keyframes,Text } from '@chakra-ui/react';

export default function Photo() {
  const size = '40px';
  const color = 'black';

  const pulseRing = keyframes`
	0% {
    transform: scale(0.33);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`;

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="216px"
      w="full"
      overflow="hidden">
      {/* Ideally, only the box should be used. The <Flex /> is used to style the preview. */}
      <Box
        as="div"
        position="relative"
        w={size}
        h={size}
        _before={{
          content: "''",
          position: 'relative',
          display: 'block',
          width: '300%',
          height: '300%',
          boxSizing: 'border-box',
          marginLeft: '-100%',
          marginTop: '-100%',
          borderRadius: '50%',
          bgColor: color,
          animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
        }}>
        <Avatar
          src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
          size="full"
          position="absolute"

          top={0}
        />
      </Box>
      <Text
          display="flex"
          position="absolute"
          top={0}
          as="b"
          marginRight="-11%"
          marginTop="50px"
          >
          Jhon_Doe</Text>
      {/* <p align="center">
  <a href="https://github.com/DenverCoder1/readme-typing-svg">
    <img src="https://readme-typing-svg.demolab.com/?lines=🙏🙏 नमस्ते! ; I am a Full-stack%20web%20developer 👨🏻‍💻;  Curious%20to%20learn%20new%20things !&font=Fira%20Code&center=true&width=440&height=45&color=#37bcf7&vCenter=true&size=22&pause=1000"/></a>
</p> */}
    </Flex>
  );
}