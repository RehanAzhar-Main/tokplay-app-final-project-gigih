import {
  Box,
  Center,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'

export default function CommentBox({username,comment}) {
  return (
    <Center py={2}>
      <Box
        maxW={'445px'}
        w={'full'}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>

        <Stack mb={3} direction={'row'} spacing={3} align={'center'}>
          <Avatar src={'https://avatars0.githubusercontent.com/u/1164541?v=4'} />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>{username}</Text>
            <Text color={'gray.500'}>August 12, 2023 · 6min ago</Text>
          </Stack>
        </Stack>
        <Stack>
          <Text color={'gray.500'} fontWeight={400}>
            {comment}
          </Text>
        </Stack>
      </Box>
    </Center>
  )
}