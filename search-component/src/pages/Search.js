import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Heading, Input, Flex, UnorderedList, ListItem } from '@chakra-ui/react';
import { useCombobox } from 'downshift';


function Search() {
  const history = useHistory()

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
      height="100vh"
      justify="center"
    >
      <Flex
        {...getComboboxProps()}
        direction="column"
        marginTop="50px"
      >
        <Heading
          fontSize="25px"
          color="gray.500"
          textAlign="center"
          marginBottom="15px"
        >
          Search for a user:
        </Heading>

        <Input
          {...getInputProps()}
          size="lg"
          fontSize="20px"
          fontWeight="medium"
          marginBottom="10px"
          placeholder="Search"
          flexShrink="0"
        />

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
      </Flex>
    </Flex>
  );
}

export default Search;
