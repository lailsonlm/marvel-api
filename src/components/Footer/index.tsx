import { Divider, Flex, Text } from "@chakra-ui/react";

interface FooterProps {
  attributionText?: string;
}

export function Footer({ attributionText }: FooterProps) {
  return (
    <Flex
      flexDir="column"
      w="full"
      h={56}
      m="32px auto 0"
      justify="flex-end" 
      align="center" 
      bg="#0A0A0A"
    >
      <Flex flexDir="column" w="full" align="center" h={16} >
        <Divider borderColor="gray.800" mb={6}/>
        <Text fontSize="xs">
          {attributionText}
        </Text>
      </Flex>
    </Flex> 
  )
}