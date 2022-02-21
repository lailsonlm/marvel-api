import { InfoIcon } from "@chakra-ui/icons"
import { Box, Grid, GridItem, Image, Text, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Flex, useBreakpointValue } from "@chakra-ui/react"

interface ItemListProps {
  results?: Results
}

type Results = {
  id: number,
  name: string,
  description: string,
  thumbnail: {
    path: string,
    extension: string,
  }
}[]

export function ItemList({ results }: ItemListProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: true,
  })

  return (
    <Box
      w="full"
      maxW= 'container.xl'
      m={["8px auto", "8px auto", "8px auto", "20px auto"]}
      h="100%"
      p={[0, 4]}
      overflow="hidden"
      >
        <Grid 
          gridTemplateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)', 'repeat(5, 1fr)', 'repeat(6, 1fr)']} 
          gap={[2, 2, 4]}
          w="full"
          maxW= 'container.xl'
          m="0 auto"
          alignItems="flex-start"
          p={[4, 4, 6, 0]}
          position="relative"
        >
          {results?.map(data => {
            return (
              <GridItem 
                key={data.id}
                display='flex'
                flexDir="column"
                w="full"
                h='100%'
                borderRadius={4}
                p={2}
                background="gray.800"
                alignItems="center"
                boxShadow='md'                      
              >
                <Image
                  boxSize={['150px' ,'200px']}
                  objectFit='cover'
                  borderRadius={4}
                  src={data.thumbnail.path + '/standard_xlarge.' + data.thumbnail.extension}
                  alt={data.name}    
                />
      
                <Flex
                  w="full"
                  h='55px'
                  alignItems='center'
                  justifyContent='center'
                  mt={2}
                  pl={2}
                  pr={2}
                  overflow="hidden"
                >
                  <Text
                    p={2}
                    fontSize={['sm' ,'md']}
                    fontWeight='bold'
                    textAlign="center"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    color="gray.400"
                  >
                    {data.name}
                  </Text> 
                  <Popover trigger="hover">
                  <PopoverTrigger>
                    <InfoIcon color="gray.300" cursor="pointer" _hover={{color: "red.700"}} />
                  </PopoverTrigger>
                  <PopoverContent bg="gray.200" _focus={{ outline: 'none'}} color="gray.900" borderColor="gray.400" w={["3xs", "xs", "sm", 'md']} ml={2} mr={2}>
                    <PopoverArrow bg="gray.200" borderColor="gray.400" />
                    <PopoverCloseButton _focus={{ outline: 'none'}} />
                    <PopoverHeader borderColor="gray.400" fontSize={['xs', 'xs', 'sm', 'md']} overflow="hidden" whiteSpace= "nowrap" textOverflow="ellipsis" w="90%" >{data.name}</PopoverHeader>
                    <PopoverBody>
                      <Text pl={2} pr={2} fontSize={['xs', 'xs', 'sm', 'md']} textAlign="justify">
                        {data.description ? data.description : 'Without description'}
                      </Text>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
                </Flex>               
              </GridItem>
            )
          })}
        </Grid>
      </Box>
  )
}