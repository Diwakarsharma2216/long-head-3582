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
            <Box boxSize={{base:"",md:320}} bg="grey.500">
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
            <ListHeader>For designers</ListHeader>
            <Link href={'#'}>Go Pro!</Link>
            <Link href={'#'}>Explore design work</Link>
            <Link href={'#'}>Design blog</Link>
            <Link href={'#'}>Overtime podcast</Link>
            <Link href={'#'}>playoffs</Link>
            <Link href={'#'}>Code of conduct</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Hire designers</ListHeader>
            <Link href={'#'}>Post a job opening</Link>
            <Link href={'#'}>Post a freelance project</Link>
            <Link href={'#'}>Search for designers</Link>
            <Link href={'#'}><Text fontWeight={"extrabold"}>Brands</Text></Link>
            <Link href={'#'}>Advertise with us</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>About</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Support</Link>
            <Link href={'#'}>Media kit</Link>
            <Link href={'#'}>Testimonials</Link>
            <Link href={'#'}>API</Link>
            <Link href={'#'}>Terms of service</Link>
            <Link href={'#'}>Privacy policy</Link>
            <Link href={'#'}>Cookie policy</Link>
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
        <Box mt="30%">
          <SimpleGrid  columns={{base:"1",md:"2"}}>
            <Box ml={"8%"}><Text textAlign={{base:"center",md:"start"}}>© 2023 Dribbble. All rights reserved.</Text></Box>
            <Box>
              <HStack w={{base:"40%",md:"auto"}}  ml={{base:"30%",md:"40%"}} >
              <Box  ><Text ><span style={{color:"black",fontWeight:"bold"}}>21,353,479</span> shots dribbbled</Text></Box>
                <Box  boxSize={"30px"} ><Logo prop="https://e7.pngegg.com/pngimages/365/131/png-clipart-dribbble-logo-graphic-design-design-purple-logo.png"   /> </Box>
              </HStack>
            </Box>
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}