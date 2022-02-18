import { Button, Stack, Box, Text } from "@chakra-ui/react"

interface PaginationProps {
  data?: {
    total: number,
    offset: number,
    limit: number,
  },
  currentPage: number,
  offset: number,
  onPageChange: (page: number) => void;
  onOffsetChange: (offset: number) => void;
}

export function Pagination({ data, currentPage, onPageChange, onOffsetChange, offset }: PaginationProps) {
  const siblingsCount = 1;

  function generatePagesArray(from: number, to: number) {
    return [... new Array(to - from)]
      .map((_, index) => {
        return from + index + 1
      })
      .filter(page => page > 0)
  }

  const lastPage = Math.floor(data?.total / data?.limit);

  const previousPage = currentPage > 1 
  ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
  : []

  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []

  return (
    <Stack 
      direction={["column", "row"]}
      w="full"
      maxW= 'container.xl'
      m="8px auto"
      justify="space-between" 
      align="center" 
      spacing="6"
      >
        <Box>
          <strong>{data?.offset + 1}</strong> - <strong>{data?.limit + data?.offset}</strong> de <strong>{data?.total}</strong> 
        </Box>
        
        <Stack direction="row" spacing="2">
          {currentPage > (1 + siblingsCount) && (
            <>
              <Button 
              size="sm" 
              fontSize="xs" 
              width="4" 
              bg="gray.700" 
              _hover={{ bg: 'gray.500' }}
              onClick={() => {
                onPageChange(1)
                onOffsetChange(0)
              }}
              >1</Button>
              {currentPage > (2 + siblingsCount) && <Text>...</Text>}
            </>
          )}

          {previousPage.length && 
            <Button 
            size="sm" 
            fontSize="xs" 
            width="4" 
            bg="gray.700" 
            _hover={{ bg: 'gray.500' }}
            onClick={() => {
              onPageChange(currentPage - 1)
              onOffsetChange(offset - 30)
            }}
            >
              {previousPage}
            </Button>
          }

          {!isNaN(data?.limit) &&
            <Button 
              size="sm" 
              fontSize="xs" 
              width="4" 
              colorScheme="red.700" 
              disabled 
              _disabled={{ bg: 'red.700', cursor: 'default' }}
              >
                {currentPage}
            </Button>
          }

          {nextPages.length &&
            <Button 
              size="sm" 
              fontSize="xs" 
              width="4" 
              bg="gray.700" 
              _hover={{ bg: 'gray.500' }}
              onClick={() => {
                onPageChange(currentPage + 1)
                onOffsetChange(offset + 30)
              }}
              >
                {nextPages}
            </Button>
          }

          {currentPage + siblingsCount < lastPage && (
            <>
            {currentPage > (2 + siblingsCount) && <Text>...</Text>}
              <Button 
              size="sm" 
              fontSize="xs" 
              width="4" 
              bg="gray.700" 
              _hover={{ bg: 'gray.500' }}
              onClick={() => {
                onPageChange(lastPage)
                onOffsetChange(data?.total - 30)
              }}
              >{lastPage}</Button>
            </>
          )}
      </Stack>
    </Stack>
  )
}