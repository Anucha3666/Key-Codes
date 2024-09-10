/** @format */

import React, { KeyboardEvent, useEffect, useState } from "react";
import "./App.css";
import { Grid, GridItem, HStack, Text, VStack } from "@chakra-ui/react";

function App() {
  const [scale, setScale] = useState<boolean>(false);

  const [dataKeyCode, setDataKeyCode] =
    useState<KeyboardEvent<HTMLDivElement>>();

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    setScale(true);
    setDataKeyCode(event);
  };

  useEffect(() => {
    setTimeout(() => setScale(false), 100);
  }, [dataKeyCode]);

  const DataKeyboard = [
    [
      { label: "ESC", colSpan: 6, keyCode: 27 },
      { label: "F1", keyCode: 112 },
      { label: "F2", keyCode: 113 },
      { label: "F3", keyCode: 114 },
      { label: "F4", keyCode: 115 },
      { label: "F5", keyCode: 116 },
      { label: "F6", keyCode: 117 },
      { label: "F7", keyCode: 118 },
      { label: "F8", keyCode: 119 },
      { label: "F9", keyCode: 120 },
      { label: "F10", keyCode: 121 },
      { label: "F11", keyCode: 122 },
      { label: "F12", keyCode: 123 },
      { label: "◯" },
    ],
    [
      { label: "`", keyCode: 192 },
      { label: "1", keyCode: 49 },
      { label: "2", keyCode: 50 },
      { label: "3", keyCode: 51 },
      { label: "4", keyCode: 52 },
      { label: "5", keyCode: 53 },
      { label: "6", keyCode: 54 },
      { label: "7", keyCode: 55 },
      { label: "8", keyCode: 56 },
      { label: "9", keyCode: 57 },
      { label: "0", keyCode: 48 },
      { label: "-", keyCode: 189 },
      { label: "=", keyCode: 187 },
      { label: "Del", colSpan: 6, keyCode: 8 },
    ],
    [
      { label: "⇥", colSpan: 6, keyCode: 9 }, // Assuming "->|" represents the arrow key for left
      { label: "Q", keyCode: 81 },
      { label: "W", keyCode: 87 },
      { label: "E", keyCode: 69 },
      { label: "R", keyCode: 82 },
      { label: "T", keyCode: 84 },
      { label: "Y", keyCode: 89 },
      { label: "U", keyCode: 85 },
      { label: "I", keyCode: 73 },
      { label: "O", keyCode: 79 },
      { label: "P", keyCode: 80 },
      { label: "[", keyCode: 219 },
      { label: "]", keyCode: 221 },
      { label: "\\", keyCode: 220 },
    ],
    [
      { label: "ก/A", colSpan: 7, keyCode: 20 },
      { label: "A", keyCode: 65 },
      { label: "S", keyCode: 83 },
      { label: "D", keyCode: 68 },
      { label: "F", keyCode: 70 },
      { label: "G", keyCode: 71 },
      { label: "H", keyCode: 72 },
      { label: "J", keyCode: 74 },
      { label: "K", keyCode: 75 },
      { label: "L", keyCode: 76 },
      { label: ";", keyCode: 186 },
      { label: "'", keyCode: 222 },
      { label: "↲", colSpan: 7, keyCode: 13 },
    ],
    [
      { label: "⇧", colSpan: 9, keyCode: 16 },
      { label: "Z", keyCode: 90 },
      { label: "X", keyCode: 88 },
      { label: "C", keyCode: 67 },
      { label: "V", keyCode: 86 },
      { label: "B", keyCode: 66 },
      { label: "N", keyCode: 78 },
      { label: "M", keyCode: 77 },
      { label: ",", keyCode: 188 },
      { label: ".", keyCode: 190 },
      { label: "/", keyCode: 191 },
      { label: "⇧", colSpan: 9, keyCode: 16 },
    ],
    [
      { label: "fn" }, // Assuming "fn" doesn't have a specific keyCode
      { label: "control", keyCode: 17 },
      { label: "option", keyCode: 18 },
      { label: "command", colSpan: 5, keyCode: 91 }, // Left Command
      { label: "", colSpan: 20, keyCode: 32 },
      { label: "command", colSpan: 5, keyCode: 93 }, // Right Command
      { label: "option", keyCode: 18 },
      { rowSpan: 1 },
      { label: "^", rowSpan: 1, keyCode: 38 },
      { rowSpan: 1 },
      { label: "<", rowSpan: 1, keyCode: 37 },
      { label: "v", rowSpan: 1, keyCode: 40 },
      { label: ">", rowSpan: 1, keyCode: 39 },
    ],
  ];

  return (
    <VStack
      w={"100vw"}
      h={"100vh"}
      spacing={0}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      pb={10}>
      <HStack w={"100%"} h={"8%"} p={5} bg={"#03045e"}>
        <Text fontSize={"2xl"} fontWeight={"bold"} color={"#FFF"}>
          Key Codes
        </Text>
      </HStack>
      <Text fontSize={"2rem"}>Key Code :</Text>
      <VStack h={"100%"} justifyContent={"center"}>
        <Text fontSize={"8rem"} transform={scale ? "scale(1.1)" : ""}>
          {dataKeyCode?.keyCode}
        </Text>
      </VStack>
      <Grid
        w={"60rem"}
        h={"20rem"}
        templateColumns='repeat(58, 1fr)'
        templateRows={"repeat(12, 1fr)"}
        p={2}
        gap={1}>
        {DataKeyboard?.map((item, i) => (
          <React.Fragment key={i}>
            {item?.map(({ label, colSpan, rowSpan, keyCode }, j) => (
              <GridItem
                key={j}
                colSpan={colSpan ?? 4}
                rowSpan={rowSpan ?? 2}
                rounded={8}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                border={label === undefined ? "" : "1px solid #00000006"}
                shadow={label === undefined ? "" : "lg"}
                bg={label === undefined ? "" : "#FFF"}
                transform={
                  scale && keyCode === dataKeyCode?.keyCode ? "scale(0.9)" : ""
                }>
                <Text>{label}</Text>
              </GridItem>
            ))}
          </React.Fragment>
        ))}
      </Grid>
    </VStack>
  );
}

export default App;
