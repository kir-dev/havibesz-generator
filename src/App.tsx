import React, { useState } from "react";
import {
  Box,
  ChakraProvider,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { PremadeSections } from "./utils/PremadeSections";
import { FieldDistributorWrapper } from "./view/elements/FieldDistributor";
import { theme } from "./utils/theme";
import { Result } from "./view/elements/Result";

function App() {
  const [data, setData] = useState(PremadeSections);

  const changeItem = (index: number, value: typeof data[number]) => {
    data[index] = value;
    setData([...data]);
  };

  return (
    <ChakraProvider theme={theme}>
      <VStack color="theme.100" mt={5}>
        <Heading>Havi beszámoló generátor</Heading>
        <Text>BB x Kir-Dev</Text>
      </VStack>
      <HStack align="flex-start" justify="center" wrap="wrap" my={5}>
        <Box>
          {data.map((item, index) => (
            <FieldDistributorWrapper
              section={item}
              key={index}
              onChange={(section) => changeItem(index, section)}
            />
          ))}
        </Box>
        <Result data={data} />
      </HStack>
    </ChakraProvider>
  );
}

export default App;
