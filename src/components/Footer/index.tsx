import { Divider, Flex, Link, Text } from "@chakra-ui/react";

interface FooterProps {
  attributionText?: string;
}

export function Footer({ attributionText }: FooterProps) {
  
  return (
    <>
        <Flex
          flexDir="column"
          w="full"
          m={["32px auto 0"]}
          justify="flex-end" 
          align="center" 
          minH={36}
          >
          <Flex flexDir="column" w="full" align="center" pt={4} pb={4} >
            <Divider borderColor="gray.700" mb={4}/>
            <Text 
              fontSize="md"
              color="gray.400"
            >
              {`Desenvolvido por `}
              <Link 
                fontWeight="bold"
                href="https://portfolio-lailsonlm.vercel.app/" 
                target="_blank"
                _hover={{textDecoration: "none", color: "red.700" }}
              >
                Lailson Sobral
              </Link>
            </Text>

            <Text fontSize="xs" mt={2}>
              {attributionText}
            </Text>
          </Flex>
        </Flex> 

    </>
    
  )
}