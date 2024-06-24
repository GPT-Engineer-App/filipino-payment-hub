import { Box, Flex, Text, VStack, Heading, Button, useBreakpointValue } from "@chakra-ui/react";

const Dashboard = () => {
  const buttonSize = useBreakpointValue({ base: "sm", md: "md" });
  const headingSize = useBreakpointValue({ base: "lg", md: "xl" });
  const textSize = useBreakpointValue({ base: "sm", md: "md" });

  return (
    <Box p={4}>
      <Flex direction="column" align="center" justify="center" p={10}>
        <Heading mb={4} size={headingSize}>Dashboard</Heading>
        <Text fontSize={textSize} mb={6}>Welcome to your Dashboard page!</Text>
      </Flex>
      <Box bg="gray.100" p={10}>
        <Heading size="lg" textAlign="center" mb={4}>Features</Heading>
        <VStack spacing={5}>
          <Flex align="center">
            <Button size={buttonSize} colorScheme="teal">Feature 1</Button>
          </Flex>
          <Flex align="center">
            <Button size={buttonSize} colorScheme="teal">Feature 2</Button>
          </Flex>
          <Flex align="center">
            <Button size={buttonSize} colorScheme="teal">Feature 3</Button>
          </Flex>
        </VStack>
      </Box>
    </Box>
  );
};

export default Dashboard;