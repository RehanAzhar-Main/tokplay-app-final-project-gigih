import {
    Avatar,
    AvatarGroup,
    Badge,
    Flex,
    Image,
    Text,
    DarkMode,
    useColorModeValue,
    HStack,
  } from "@chakra-ui/react";

  import { Link } from "react-router-dom";
  
  function Video({ thumbnail_url, title, desc, id }) {
    let boxBg = useColorModeValue("white !important", "#111c44 !important");
    let mainText = useColorModeValue("gray.800", "white");
    let iconColor = useColorModeValue("brand.200", "white");
    return (
        <Link to={`/${id}`}>
            <HStack spacing='24px'>
            <Flex
            borderRadius='20px'
            bg={boxBg}
            p='20px'
            h='300px'
            w= '300px'
            alignItems='center'
            direction='column'>
                <Image
                    src= {
                        `${thumbnail_url}`
                      }
                    w='500px'
                    h='300px'
                    borderRadius='20px'
                    mb='10px'
                />
                <Text
                    fontWeight='600'
                    color={mainText}
                    textAlign='start'
                    fontSize='xl'
                    w='100%'>
                    {title}
                </Text>
                <Text
                    fontWeight='200'
                    color={mainText}
                    textAlign='start'
                    fontSize='sm'
                    w='100%'>
                    {desc}
                </Text>
                <Flex mt='auto' justify='space-between' w='100%' align='center'>
                    <DarkMode>
                    <Badge
                        borderRadius='9px'
                        size='md'
                        colorScheme='green'
                        color='green.400'
                        textAlign='center'
                        display='flex'
                        justifyContent='center'
                        alignItems='center'>
                        Views
                    </Badge>
                    </DarkMode>
                    <AvatarGroup
                    size='sm'
                    max={4}
                    color={iconColor}
                    fontSize='9px'
                    fontWeight='700'>
                    <Avatar src='https://i.ibb.co/CmxNdhQ/avatar1.png' />
                    <Avatar src='https://i.ibb.co/cFWc59B/avatar2.png' />
                    <Avatar src='https://i.ibb.co/vLQJVFy/avatar3.png' />
                    <Avatar src='https://i.ibb.co/8mcrvQk/avatar4.png' />
                    <Avatar src='https://i.ibb.co/CmxNdhQ/avatar1.png' />
                    <Avatar src='https://i.ibb.co/cFWc59B/avatar2.png' />
                    <Avatar src='https://i.ibb.co/vLQJVFy/avatar3.png' />
                    <Avatar src='https://i.ibb.co/8mcrvQk/avatar4.png' />
                    </AvatarGroup>
                </Flex>
            </Flex>
            </HStack>
        </Link>
  
      // <Flex color='white'>
      //     <Center w='100px' bg='green.500'>
      //         <Text>Box 1</Text>
      //     </Center>
      //     <Square bg='blue.500' size='150px'>
      //         <Text>Box 2</Text>
      //     </Square>
      //     <Box flex='1' bg='tomato'>
      //         <Text>Box 3</Text>
      //     </Box>
      // </Flex>
  
      
    );
  }
  
  export default Video;