import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useColorMode, useColorModeValue, Heading, Input, Flex, UnorderedList, ListItem, Button, Box, Text, Link } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useCombobox } from 'downshift';


function Search() {
  const history = useHistory()
  const { colorMode, toggleColorMode } = useColorMode()

  const secondary = useColorModeValue("gray.500", "blue.200");

  const [inputItems, setInputItems] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/Gabriel-J3sus/following')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, [])

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        users.filter(item =>
          item.login.toLowerCase().startsWith(inputValue.toLowerCase())
        )
      )
    }
  })

  function handleNavigate(user) {
    history.push(`/${user}`)
  }

  return (
    <Flex
      width="100vw"
      height="100vh"
      justify="center"
    >
      <Flex
        {...getComboboxProps()}
        direction="column"
        align="center"
        marginTop="50px"
      >
        <Heading
          fontSize="25px"
          color={secondary}
          textAlign="center"
          marginBottom="15px"
        >
          Search for a user:
        </Heading>

        <Box
          display="flex"
          align="center"
          width="100%"
        >
          <Button
            display={{sm: "none", md: "flex"}}
            size="lg"
            marginRight="12px"
            onClick={toggleColorMode}
          >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>

          <Input
            {...getInputProps()}
            size="lg"
            fontSize="20px"
            fontWeight="medium"
            marginBottom="10px"
            placeholder="Search"
            flexShrink="0"
          />
        </Box>

        {/*
          UnorderedList = ul
          ListItem = li
        */}

        <UnorderedList
          {...getMenuProps()}
          listStyleType="none"
        >
          {isOpen &&
            inputItems.map((item, index) => {
              return (
                <ListItem
                  key={item.id}
                  {...getItemProps({item, index})}
                  onClick={() => handleNavigate(item.login)}
                  marginBottom="3px"
                  padding="8px 6px"
                  borderRadius="4px"
                  _hover={highlightedIndex === index ? { backgroundColor: "#F5F8FA" } : {}}
                >
                  <Heading
                    fontSize="20px"
                    fontWeight="normal"
                  >
                    {item.login}
                  </Heading>
                </ListItem>
              )
            })
          }
        </UnorderedList>
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

export default Search;
