import { useState } from "react";
import { Container, Heading, VStack, Input, Textarea, Button, useToast, useColorModeValue } from "@chakra-ui/react";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const toast = useToast();
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("black", "white");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., send the data to a server
    console.log("New Post Submitted", { title, content });
    toast({
      title: "Post created.",
      description: "Your new blog post has been created.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setTitle("");
    setContent("");
  };

  return (
    <Container centerContent maxW="container.md" py={8} bg={bg} color={color}>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="xl">Create a New Post</Heading>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          isRequired
        />
        <Textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          isRequired
          minHeight="200px"
        />
        <Button type="submit" colorScheme="teal" size="lg">Submit</Button>
      </VStack>
    </Container>
  );
};

export default NewPost;