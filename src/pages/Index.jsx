import { Container, Text, VStack, Heading, Box, Button } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" textAlign="center">
          PlataPay
        </Heading>
        <Text fontSize="xl" textAlign="center">
          A payment solution for Filipinos developed by Filipinos
        </Text>
        <Box>
          <Button colorScheme="teal" size="lg">
            Get Started
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;