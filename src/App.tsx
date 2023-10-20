/** @format */

import { KeyboardEvent, useEffect, useState } from "react";
import "./App.css";
import { HStack, Text, VStack } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

function App() {
  const [test, setTest] = useState<boolean>(false);
  const [dataKeyCode, setDataKeyCode] =
    useState<KeyboardEvent<HTMLDivElement>>();

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    setTest(true);
    setDataKeyCode(event);
  };

  useEffect(() => {
    setTimeout(() => setTest(false), 100);
  }, [dataKeyCode]);
  return (
    <div onKeyDown={handleKeyDown} tabIndex={0}>
      <VStack w={"100vw"} h={"100vh"} spacing={0}>
        <HStack w={"100%"} h={"8%"} px={5} bg={"#0000FF"}>
          <Text fontSize={"2xl"} fontWeight={"bold"} color={"#FFF"}>
            Project <ChevronRightIcon boxSize={10} pb={1} />
            Key Codes
          </Text>
        </HStack>
        <Text fontSize={"2rem"}> Key Code :</Text>
        <Text fontSize={"8rem"} transform={test ? "scale(1.1)" : ""}>
          {dataKeyCode?.keyCode}
        </Text>
      </VStack>
    </div>
  );
}

export default App;
