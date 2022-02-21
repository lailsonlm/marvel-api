import { Flex, Heading, Text, Spinner, calc } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import { dehydrate } from 'react-query';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ItemList } from '../components/ItemList';
import { Pagination } from '../components/Pagination';

import { getCharacters, useCharacters } from '../services/hooks/useCharacters';
import { queryClient } from '../services/queryClient';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1)
  const [offset, setOffset] = useState(0)

  const { data, isLoading, isFetching, error } = useCharacters(offset)

  return (
    <Flex 
      w="full"
      minH="100vh"
      flexDir="column"
    >
      
      <Header />
      
      <Flex
        w="full"
        maxW= 'container.xl'
        m={["24px auto 0 0px", "40px auto 0"]}
        align="center"
        pl={[4, 8, 10, 4]}
        
      >
        <Heading fontSize='2xl'>Characters Marvel</Heading>
        { !isLoading && isFetching && <Spinner size='sm' color='red.700' ml="4" /> }
      </Flex>
      <Flex
        flexDir="column"
        minH={"50vh"}
      >
      { isLoading ? (
        <Flex justify="center">
          <Spinner color='red.700' size='lg' />
        </Flex>
      ) : error ? (
        <Flex justify="center">
          <Text>Falha ao obter dados dos personagens</Text>
        </Flex>
      ) : 
        <ItemList results={data!.data.results} />
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

      </Flex>
      

      {!isLoading && 
        <Footer attributionText={data!.attributionText} />    
      }
    </Flex>
  )
}


export const getStaticProps: GetStaticProps = async (context) => {

  await queryClient.prefetchQuery(['characters', 0], () => getCharacters(0))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}