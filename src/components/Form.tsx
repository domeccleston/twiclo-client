import React from 'react';
import { Flex } from '@chakra-ui/core';

const Form = () => {
  return (
    <Flex w="100%" h="100vh">
      <Flex w="50%" h="100vh" direction="column" bg="blue.100">
        <Flex w="100%" h="10vh" bg="tomato"></Flex>
        <Flex
          w="100%"
          h="90vh"
          direction="column"
          justify="center"
          align="center"
        >
          <Flex bg="red.500" w="50%" h="3rem" m={1} />
          <Flex bg="red.500" w="50%" h="3rem" m={1} />
          <Flex bg="red.500" w="50%" h="3rem" m={1} />
          <Flex bg="red.500" w="50%" h="3rem" m={1} />
        </Flex>
      </Flex>
      <Flex w="50%" h="100vh" bg="blue.300"></Flex>
    </Flex>
  );
};

export default Form;
