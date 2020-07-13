import React from 'react';
import {
  Heading,
  Flex,
  Image,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/core';
import coolGuy from '../images/cool-guy.jpg';

const Form = () => {
  return (
    <Flex w="100%" h="100vh">
      <Flex w="45%" h="100vh" direction="column">
        <Flex w="100%" h="10vh" align="center">
          <Heading p={5} color="#3B3187">
            Twiclo
          </Heading>
        </Flex>
        <Flex
          w="100%"
          h="80vh"
          direction="column"
          justify="space-evenly"
          align="center"
        >
          <Flex
            w="100%"
            h="60%"
            direction="column"
            justify="space-evenly"
            align="center"
          >
            <Flex w="50%" justify="center" align="center">
              <Heading color="#3B3187" textAlign="center">
                Welcome back!
              </Heading>
            </Flex>
            <Flex w="50%" direction="column">
              <Flex w="60%" m={2} justify="space-between" align="flex-end">
                <Heading size="lg" color="#3B3187">
                  Log In
                </Heading>
                <Heading size="md" color="#C8C8C8">
                  Sign up
                </Heading>
              </Flex>
              <FormControl>
                <Input m={2} bg="#F2F6FD" />
                <Input m={2} bg="#F2F6FD" />
                <Flex w="100%" justify="center">
                  <Button size="lg" m={2} width="50%" bg="#FB5463" color="#fff">
                    Log in
                  </Button>
                </Flex>
              </FormControl>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex w="55%" h="100vh" bg="blue.300">
        <Image src={coolGuy} h="auto" maxWidth="100%"></Image>
      </Flex>
    </Flex>
  );
};

export default Form;
