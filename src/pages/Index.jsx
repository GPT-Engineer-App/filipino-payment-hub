import { Container, Text, VStack, Heading, Box, Button, useBreakpointValue } from "@chakra-ui/react";

const Index = () => {
  const buttonSize = useBreakpointValue({ base: "md", md: "lg" });
  const headingSize = useBreakpointValue({ base: "xl", md: "2xl" });
  const textSize = useBreakpointValue({ base: "md", md: "xl" });

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={4}>
        <Heading as="h1" size={headingSize} textAlign="center">
          PlataPay
        </Heading>
        <Text fontSize={textSize} textAlign="center">
          A payment solution for Filipinos developed by Filipinos
        </Text>
        <Box>
          <Button colorScheme="teal" size={buttonSize}>
            Get Started
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;