import { Container, Text, VStack, Heading, Box, Image, Link, useColorModeValue } from "@chakra-ui/react";

const Index = () => {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("black", "white");
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg={bg} color={color}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>Welcome to My Personal Blog</Heading>
        <Box boxSize="sm">
          <Image src="/images/blog-banner.jpg" alt="Blog Banner" borderRadius="md" />
        </Box>
        <Text fontSize="xl" textAlign="center">
          Hi there! I'm excited to share my thoughts, experiences, and stories with you. Stay tuned for updates!
        </Text>
        <Link href="/about" color="teal.500" fontSize="lg">Learn more about me</Link>
        <Link href="/new-post" color="teal.500" fontSize="lg">Create a new post</Link>
      </VStack>
    </Container>
  );
};

export default Index;