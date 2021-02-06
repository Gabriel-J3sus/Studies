import React, { useEffect, useState } from 'react';
import { Heading, Input, Flex, UnorderedList, ListItem } from '@chakra-ui/react';
import { useCombobox } from 'downshift';


function App() {
  const [inputItems, setInputItems] = useState([]);
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
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
          item.name.toLowerCase().startsWith(inputValue.toLowerCase())
        )
      )
    }
  })

  return (
    <Flex
      width="100vw"
      height="100vh"
      justify="center"
    >
      <Flex
        {...getComboboxProps()}
        direction="column"
        justify="center"
        top="60px"
        position="fixed"
        overflow="hidden"
      >
        <Heading marginBottom="10px" fontSize="20px" fontWeight="bold">Current user: {singleUser}</Heading>

        <Input
          {...getInputProps()}
          size="lg"
          fontSize="20px"
          fontWeight="medium"
          marginBottom="10px"
          placeholder="Search"
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
                  onClick={() => setSingleUser(item.name)}
                  marginBottom="3px"
                  padding="8px 6px"
                  borderRadius="4px"
                  _hover={highlightedIndex === index ? { backgroundColor: "#F5F8FA" } : {}}
                >
                  <Heading
                    fontSize="20px"
                    fontWeight="normal"
                  >
                    {item.name}
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

export default App;
