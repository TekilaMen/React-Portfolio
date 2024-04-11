import * as React from "react";
import { Box, Grid, GridItem, Image } from "@chakra-ui/react";

function BentoGrid() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      color={"black"}
    >
      <Grid
        h={"80vh"}
        w={"80vh"}
        templateColumns="repeat(12, 1fr)"
        gap={"1rem"}
      >
        <GridItem
          colSpan={9}
          rowSpan={2}
          bg="tomato"
          borderRadius={"1.5rem"}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          About Me
        </GridItem>
        <GridItem
          colSpan={3}
          rowSpan={1}
          bg="rgba(30, 90, 40, 0.83)"
          color={"white"}
          borderRadius={"1.5rem"}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          CV
        </GridItem>
        <GridItem
          colSpan={3}
          rowSpan={1}
          bg="papayawhip"
          borderRadius={"1.5rem"}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          Picture
        </GridItem>
        <GridItem
          colSpan={6}
          bg="papayawhip"
          borderRadius={"1.5rem"}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          Projects
        </GridItem>
        <GridItem
          colSpan={6}
          bg="tomato"
          borderRadius={"1.5rem"}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          Github
        </GridItem>
        <GridItem
          colSpan={3}
          bg="rgba(191, 0, 24, 0.68)"
          color={"white"}
          borderRadius={"1.5rem"}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          Mail
        </GridItem>
        <GridItem
          colSpan={3}
          bg="rgba(0, 86, 183, 0.34)"
          color={"white"}
          borderRadius={"1.5rem"}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          LinkedIn
        </GridItem>
        <GridItem
          colSpan={3}
          color={"white"}
          bg="#101010"
          borderRadius={"1.5rem"}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          Discord
        </GridItem>
        <GridItem
          colSpan={3}
          color={"white"}
          bg="linear-gradient(45deg, rgb(196, 99, 0) 0%, rgb(186, 53, 7) 25%, rgb(200, 16, 45) 50%, rgb(187, 16, 85) 75%, rgb(171, 5, 119) 100%)"
          borderRadius={"1.5rem"}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image src="" alt="Instagram Icon" />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default BentoGrid;
