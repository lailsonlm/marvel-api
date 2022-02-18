import { Flex, Heading } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      w="100%"
      h={["150px", "300px"]}
      bgImage={`linear-gradient(0deg, rgba(21, 21, 21, 0.753), rgba(21, 21, 21, 0.432)), url('/bg_marvel.jpg')`}
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      alignItems="flex-end"
    >
      <Heading
        h={['40px', '65px']}
        color="white"
        fontWeight='black'
        fontSize={['4xl', '6xl']}
        letterSpacing='-0.5px'
        background='red.700'
        pl={1.5}
        pr={2}
        m={[ '0 0 24px 24px','0 0 32px 32px']}
      >
        MARVEL API
      </Heading>
    </Flex>
  )
}