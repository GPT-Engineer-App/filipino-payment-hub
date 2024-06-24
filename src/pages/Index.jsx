import { Container, Text, VStack, Heading, Box, Button, useBreakpointValue, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const Index = () => {
  const buttonSize = useBreakpointValue({ base: "md", md: "lg" });
  const headingSize = useBreakpointValue({ base: "xl", md: "2xl" });
  const textSize = useBreakpointValue({ base: "md", md: "xl" });

  return (
    <Container centerContent maxW="container.xl" p={4}>
      <VStack spacing={4} align="center" mb={10}>
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
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={10}>
        <Box>
          <Image src="/images/feature1.png" alt="Feature 1" borderRadius="md" />
          <Heading size="md" mt={4}>Feature 1</Heading>
          <Text mt={2}>Description of feature 1.</Text>
        </Box>
        <Box>
          <Image src="/images/feature2.png" alt="Feature 2" borderRadius="md" />
          <Heading size="md" mt={4}>Feature 2</Heading>
          <Text mt={2}>Description of feature 2.</Text>
        </Box>
        <Box>
          <Image src="/images/feature3.png" alt="Feature 3" borderRadius="md" />
          <Heading size="md" mt={4}>Feature 3</Heading>
          <Text mt={2}>Description of feature 3.</Text>
        </Box>
        <Box>
          <Image src="/images/feature4.png" alt="Feature 4" borderRadius="md" />
          <Heading size="md" mt={4}>Feature 4</Heading>
          <Text mt={2}>Description of feature 4.</Text>
        </Box>
      </SimpleGrid>
      <Box bg="gray.100" p={10} borderRadius="md">
        <Heading size="lg" textAlign="center" mb={4}>Why Choose PlataPay?</Heading>
        <VStack spacing={5}>
          <Flex align="center">
            <FaCheckCircle size="24px" />
            <Text ml={2}>Benefit 1: Secure and reliable</Text>
          </Flex>
          <Flex align="center">
            <FaCheckCircle size="24px" />
            <Text ml={2}>Benefit 2: Easy to use</Text>
          </Flex>
          <Flex align="center">
            <FaCheckCircle size="24px" />
            <Text ml={2}>Benefit 3: Fast transactions</Text>
          </Flex>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;