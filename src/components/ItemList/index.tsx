import { Box, Grid, GridItem, Image, Text, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Flex } from "@chakra-ui/react"

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
  return (
    <Box
      w="full"
      maxW= 'container.xl'
      m="20px auto"
      >
        <Grid 
          gridTemplateColumns={['repeat(2, 1fr)','repeat(3, 1fr)', 'repeat(4, 1fr)', 'repeat(5, 1fr)', 'repeat(6, 1fr)']} 
          gap={[2, 2, 4]}
          w="full"
          maxW= 'container.xl'
          m="0 auto"
          alignItems="flex-start"
          p={[4, 4, 6, 0]}
        >
          {results?.map(data => {
            return (
              <GridItem 
                key={data.id}
                display='flex'
                flexDir="column"
                maxW="full"
                h='100%'
                borderRadius={4}
                p={2}
                background="gray.800"
                alignItems="center"                      
              >
      
                <Popover>
                  <PopoverTrigger>
                    <Image
                      boxSize='200px'
                      objectFit='cover'
                      borderRadius={4}
                      src={data.thumbnail.path + '/standard_xlarge.' + data.thumbnail.extension}
                      alt={data.name}    
                      cursor="pointer"
                    />
                  </PopoverTrigger>
                  <PopoverContent bg="gray.200" _focus={{ outline: 'none'}} color="gray.900" borderColor="gray.400">
                    <PopoverArrow bg="gray.200" borderColor="gray.400" />
                    <PopoverCloseButton _focus={{ outline: 'none'}} />
                    <PopoverHeader borderColor="gray.400">Description</PopoverHeader>
                    <PopoverBody>
                      <Text
                        pl={2}
                        pr={2}
                        fontSize='md'
                        textAlign="justify"
                      >
                        {data.description ? data.description : 'Without description'}
                      </Text>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
                
                
                <Flex
                  w="full"
                  h='40px'
                  alignItems='center'
                  justifyContent='center'
                  mt={2}
                  overflow="hidden"
                >
                  <Text
                    p={2}
                    fontSize='md'
                    fontWeight='bold'
                    textAlign="center"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    color="gray.400"
                  >
                    {data.name}
                  </Text> 

                </Flex>               
              </GridItem>
            )
          })}
        </Grid>
      </Box>
  )
}