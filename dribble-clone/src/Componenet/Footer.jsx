import { ReactNode } from 'react';

import {
  Box,
  Container,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const Logo = ({prop}) => {
  const img = new Image();
  img.src = `${prop}`;

  return (
    <div>
    <img src={img.src} alt="Example Image" />
    </div>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={"container.2xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6} >
            <Box boxSize={{base:"",md:320}} >
              <Text textAlign={"center"}>
              <Logo prop={"https://cdn.dribbble.com/users/1555712/screenshots/5359537/untitled-1.gif"}  />
              </Text>
            </Box>
            {/* <Text fontSize={'sm'} mt="-10px">
            Dribbble is the world’s leading  <br />
             community for creatives to share, grow, <br/>
               and get hired.
            </Text> */}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Product</ListHeader>
            <Link href={'#'}>Overview</Link>
            <Link href={'#'}>Features</Link>
            <Link href={'#'}>Tutorials</Link>
            <Link href={'#'}>Pricing</Link>
            <Link href={'#'}>Releases</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>About</Link>
            <Link href={'#'}>Press</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Contact</Link>
            <Link href={'#'}>Partners</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Legal</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Status</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Follow Us</ListHeader>
            <Link href={'#'}>Facebook</Link>
            <Link href={'#'}>Twitter</Link>
            <Link href={'#'}>Dribbble</Link>
            <Link href={'#'}>Instagram</Link>
            <Link href={'#'}>LinkedIn</Link>
          </Stack>
        </SimpleGrid>
        <hr />
        <Box>
          <SimpleGrid  columns={{base:"1",md:"2"}}>
            <Box><Text textAlign={"start"}>© 2023 Dribbble. All rights reserved.</Text></Box>
            <Box>
              <HStack ml={120}>
              <Box ><Text ><span>21,353,479</span> shots dribbbled</Text></Box>
                <Box boxSize={"30px"}><Logo prop="https://e7.pngegg.com/pngimages/365/131/png-clipart-dribbble-logo-graphic-design-design-purple-logo.png"   /> </Box>
              </HStack>
            </Box>
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}