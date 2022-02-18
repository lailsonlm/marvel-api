import { Box, Flex, Grid, GridItem, Heading, Text, Image, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, Stack, Button, Divider, Spinner } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ItemList } from '../components/ItemList';
import { Pagination } from '../components/Pagination';
import { useCharacters } from '../services/hooks/useCharacters';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1)
  const [offset, setOffset] = useState(0)

  const { data, isLoading, isFetching, error } = useCharacters(offset, currentPage)

  return (
    <Flex 
      w="full"
      h="full"
      minH="100vh"
      flexDir="column"
    >
      
      <Header />
      
      <Flex
        w="full"
        maxW= 'container.xl'
        m="40px auto 0"
        align="center"
      >
        <Heading fontSize='2xl'>Characters Marvel</Heading>
        { !isLoading && isFetching && <Spinner size='sm' color='red.700' ml="4" /> }
      </Flex>
      
      { isLoading ? (
        <Flex justify="center">
          <Spinner color='red.700' size='lg' />
        </Flex>
      ) : error ? (
        <Flex justify="center">
          <Text>Falha ao obter dados dos personagens</Text>
        </Flex>
      ) : 
        <ItemList results={data?.data.results} />
      }

      {!isLoading &&
        <Pagination 
          data={data!.data} 
          currentPage={currentPage}
          offset={offset}
          onPageChange={setCurrentPage}
          onOffsetChange={setOffset}
        />
      }

      {!isLoading && 
        <Footer attributionText={data!.attributionText} />    
      }
    </Flex>
  )
}