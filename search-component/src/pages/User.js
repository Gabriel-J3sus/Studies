import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Heading, Text, Spinner, Flex, Wrap, WrapItem, Avatar, Link } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

function User() {
  const userName = useParams();
  const history = useHistory();

  const [user, setUser] = useState();

  useEffect(() => {
    fetch(`https://api.github.com/users/${userName.name}`)
      .then(response => response.json())
      .then(data => setUser(data))
  }, [userName.name])

  if (!user) {
    return (
      <Flex
        width="100vw"
        height="100vh"
        align="center"
        justify="center"
      >
        <Spinner
          size="xl"
          thickness="4px"
          speed="0.80s"
          emptyColor="gray.200"
          color="blue.500"
        />
      </Flex>
    );
  }

  return (
    <Flex
      width="100vw"
      height="100vh"
      justify="center"
      padding={{base: "40px 15px 0", md: "50px 20px 0"}}
      >
      <Flex
        maxW="1200px"
        direction="column"
        align="center"
      >

        <Wrap
          align="center"
          marginBottom="15px"
        >
          <WrapItem
            padding="5px"
            borderRadius="100%"
            border="2px solid"
            borderColor="blue.500"
            boxShadow="xl"
            cursor="pointer"
            display="inline-block"
            width={{base: "150px", md: "200px"}}
            height={{base: "150px", md: "200px"}}
          >
            <Link
              href={`https://github.com/${user.login}`}
              isExternal
              _focus={{ boxShadow: 0 }}
            >
              <Avatar
                name={user.login}
                src={user.avatar_url}
                width="100%"
                height="100%"
                transform= "scale(0.9)"
                transition="all ease 0.3s"
                _hover={{ transform: "scale(1)" }}
              />
            </Link>
          </WrapItem>
        </Wrap>

        <Flex
          direction="column"
          align={{base: "left", md: "center"}}
          marginBottom="25px"
        >
          <Heading
            fontSize={{base: "30px", md: "45px"}}

            color="gray.600"
          >
            {user.name}
          </Heading>

          <Text
            marginBottom="25px"
            fontSize={{sm: "20px", md: "25px"}}
            color="gray.500"
          >
            {user.login}
          </Text>

          <Text
            fontSize={{sm: "20px", lg: "25px"}}
            textAlign={{sm: "left", md: "center"}}
            color="gray.700"
          >{user.bio}</Text>

        </Flex>


        <ArrowBackIcon
          onClick={history.goBack}
          w={8}
          h={8}
          align="center"
          cursor="pointer"
          transition="0.3s"
          _hover={{ opacity:"0.7" }}
        />
        <Text
          position="fixed"
          bottom="10"
          padding="10px 20px 0"
          fontSize="14px"
          fontWeight="medium"
          textAlign="center"
          borderTop="2px solid"
          borderColor="gray.200"
        >
          Created with ❤ by{" "}
          <Link
            href="https://github.com/Gabriel-J3sus"
            isExternal
            textDecoration="none"
            cursor="pointer"
            _focus={{ boxShadow: 0 }}
          >
            Gabriel Araújo de Jesus
          </Link>
        </Text>
      </Flex>
    </Flex>
  );
}

export default User;
