import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Flex,
  FormControl,
  Input,
  Button,
  Alert,
} from '@chakra-ui/core';

const Signup = () => {
  const { handleSubmit, errors, register, formState } = useForm();

  function onSignup(values) {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 1000);
  }

  return (
    <Flex as='form' justify='space-evenly' direction='column' onSubmit={handleSubmit(onSignup)}>
      <FormControl isRequired isInvalid={errors.name}>
        <Input
          name="email"
          placeholder="Email address"
          ref={register({
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Please enter a valid email address.',
            },
          })}
          my={1}
          bg="#F2F6FD"
        />
      </FormControl>
      {errors.email && <Alert my={1} w="100%" status="error">{errors.email.message}</Alert>}
      <FormControl isRequired>
        <Input
          name="password"
          placeholder="Password"
          ref={register}
          type="password"
          my={1}
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
          Sign Up
        </Button>
      </Flex>
    </Flex>
  );
};

export default Signup;
