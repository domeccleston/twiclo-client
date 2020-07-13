import React from 'react';
import { useForm } from 'react-hook-form';
import '../index.css';
import {
  Heading,
  Flex,
  Image,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from '@chakra-ui/core';
import coolGuy from '../images/cool-guy.jpg';

const Form = () => {
  const { handleSubmit, errors, register, formState } = useForm();

  function onSubmit(values) {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 1000);
  }

  function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Please enter email!';
    }
    return error || true;
  }

  return (
    <Flex w="100%" h="100vh">
      <Flex w="45%" h="100vh" direction="column">
        <Flex w="100%" h="10vh" align="center">
          <Heading p={5} color="#3B3187" fontFamily="Rubik">
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isRequired>
                  <Input
                    name="email"
                    placeholder="Email address"
                    ref={register({ validate: validateEmail })}
                    m={2}
                    bg="#F2F6FD"
                  />
                </FormControl>
                <FormControl>
                  <Input
                    name="password"
                    placeholder="Password"
                    ref={register}
                    type="password"
                    m={2}
                    bg="#F2F6FD"
                  />
                </FormControl>
                <Flex w="100%" justify="center">
                  <Button
                    type="submit"
                    isLoading={formState.isSubmitting}
                    size="lg"
                    m={2}
                    width="50%"
                    bg="#FB5463"
                    color="#fff"
                  >
                    Log in
                  </Button>
                </Flex>
              </form>
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
