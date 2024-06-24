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
          <Heading size="md" mt={4}>Secure Transactions</Heading>
          <Text mt={2}>Experience peace of mind with our top-notch security measures.</Text>
        </Box>
        <Box>
          <Image src="/images/feature2.png" alt="Feature 2" borderRadius="md" />
          <Heading size="md" mt={4}>Ease of Use</Heading>
          <Text mt={2}>Our platform is designed to be user-friendly and intuitive.</Text>
        </Box>
        <Box>
          <Image src="/images/feature3.png" alt="Feature 3" borderRadius="md" />
          <Heading size="md" mt={4}>Fast Processing</Heading>
          <Text mt={2}>Enjoy quick and efficient payment processing.</Text>
        </Box>
        <Box>
          <Image src="/images/feature4.png" alt="Feature 4" borderRadius="md" />
          <Heading size="md" mt={4}>Comprehensive Support</Heading>
          <Text mt={2}>We offer 24/7 support to assist you with any issues.</Text>
        </Box>
      </SimpleGrid>
      <Box bg="gray.100" p={10} borderRadius="md">
        <Heading size="lg" textAlign="center" mb={4}>Why Choose PlataPay?</Heading>
        <VStack spacing={5}>
          <Flex align="center">
            <FaCheckCircle size="24px" />
            <Text ml={2}>Secure and reliable</Text>
          </Flex>
          <Flex align="center">
            <FaCheckCircle size="24px" />
            <Text ml={2}>Easy to use</Text>
          </Flex>
          <Flex align="center">
            <FaCheckCircle size="24px" />
            <Text ml={2}>Fast transactions</Text>
          </Flex>
          <Flex align="center">
            <FaCheckCircle size="24px" />
            <Text ml={2}>Comprehensive support</Text>
          </Flex>
        </VStack>
      </Box>
      <Box bg="gray.100" p={10} borderRadius="md" mt={10}>
        <Heading size="lg" textAlign="center" mb={4}>Our Features</Heading>
        <VStack spacing={5}>
          <Flex align="center">
            <FaCheckCircle size="24px" />
            <Text ml={2}>Online Payments</Text>
          </Flex>
          <Flex align="center">
            <FaCheckCircle size="24px" />
            <Text ml={2}>In-Person Payments</Text>
          </Flex>
          <Flex align="center">
            <FaCheckCircle size="24px" />
            <Text ml={2}>Integrations</Text>
          </Flex>
          <Flex align="center">
            <FaCheckCircle size="24px" />
            <Text ml={2}>No Code Tools</Text>
          </Flex>
          <Flex align="center">
            <FaCheckCircle size="24px" />
            <Text ml={2}>APIs</Text>
          </Flex>
        </VStack>
      </Box>
      <Box bg="gray.100" p={10} borderRadius="md" mt={10}>
        <Heading size="lg" textAlign="center" mb={4}>Not just a payment platform</Heading>
        <Text textAlign="center" mb={4}>PlataPay offers a range of services to help your business grow.</Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box>
            <Heading size="md" mt={4}>PlataPay POS</Heading>
            <Text mt={2}>Description of PlataPay POS.</Text>
            <Button colorScheme="teal" mt={4}>Learn More</Button>
          </Box>
          <Box>
            <Heading size="md" mt={4}>PlataPay Billing</Heading>
            <Text mt={2}>Description of PlataPay Billing.</Text>
            <Button colorScheme="teal" mt={4}>Learn More</Button>
          </Box>
        </SimpleGrid>
      </Box>
      <Box bg="gray.100" p={10} borderRadius="md" mt={10}>
        <Heading size="lg" textAlign="center" mb={4}>Testimonials</Heading>
        <Text textAlign="center" mb={4}>"PlataPay has transformed the way we handle payments. It's fast, secure, and easy to use!"</Text>
        <Text textAlign="center" fontStyle="italic">- Satisfied Customer</Text>
      </Box>
    </Container>
  );
};

export default Index;