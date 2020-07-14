import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../index.css';
import { Heading, Flex, Image, useToast } from '@chakra-ui/core';

import Login from './Login';
import Signup from './Signup';
import coolGuy from '../images/cool-guy.jpg';

const Form = () => {
  const [signupOrLogin, chooseSignupOrLogin] = useState('login');

  return (
    <Flex w="100%" h="100vh" className="mobile-switch-to-column" align="center">
      <Flex
        w="45%"
        h="100vh"
        direction="column"
        align="center"
        className="mobile-switch-to-full-width"
      >
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
            <Flex
              w="50%"
              justify="center"
              align="center"
              className="mobile-switch-to-full-width"
            >
              <Heading color="#3B3187" textAlign="center">
                {signupOrLogin === 'login' ? 'Welcome back!' : 'Welcome!'}
              </Heading>
            </Flex>
            <Flex
              w="50%"
              direction="column"
              className="mobile-switch-to-full-width"
            >
              <Flex w="100%" m={2} justify="flex-start" align="flex-end">
                <Heading
                  className="link-element"
                  onClick={() => chooseSignupOrLogin('login')}
                  size="md"
                  px={2}
                  color={signupOrLogin === 'login' ? '#3B3187' : '#C8C8C8'}
                >
                  Log In
                </Heading>
                <Heading
                  className="link-element"
                  onClick={() => chooseSignupOrLogin('signup')}
                  size="md"
                  px={2}
                  color={signupOrLogin === 'signup' ? '#3B3187' : '#C8C8C8'}
                >
                  Sign up
                </Heading>
              </Flex>
              {signupOrLogin === 'login' ? <Login /> : <Signup />}
            </Flex>
            {/* <Flex w="50%" direction="column" className='m obile-switch-to-full-width'>
              <Flex w="100%" m={2} justify="flex-start" align="flex-end">
                <Heading size="md" px={2} color="#3B3187">
                  Log In
                </Heading>
                <Heading size="md" px={2} color="#C8C8C8">
                  Sign up
                </Heading>
              </Flex>
              <Flex as='form' justify='space-evenly' direction='column' onSubmit={handleSubmit(onSubmit)}>
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
                    Log in
                  </Button>
                </Flex>
              </Flex>
            </Flex> */}
          </Flex>
        </Flex>
      </Flex>
      <Flex w="55%" h="100vh">
        <Image
          src={coolGuy}
          h="auto"
          maxWidth="100%"
          className="mobile-hidden"
        ></Image>
      </Flex>
    </Flex>
  );
};

export default Form;
