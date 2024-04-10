import * as React from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";

function BentoGrid() {
  return (
    <Box>
      <Grid h={"100vh"} templateColumns="repeat(12, 1fr)" gap={"1rem"}>
        <GridItem colSpan={9} rowSpan={2} bg="tomato" borderRadius={"1.5rem"} />
        <GridItem
          colSpan={3}
          rowSpan={1}
          bg="papayawhip"
          borderRadius={"1.5rem"}
        />
        <GridItem
          colSpan={3}
          rowSpan={1}
          bg="papayawhip"
          borderRadius={"1.5rem"}
        />
        <GridItem colSpan={3} bg="tomato" borderRadius={"1.5rem"} />
        <GridItem colSpan={3} bg="papayawhip" borderRadius={"1.5rem"} />
        <GridItem colSpan={6} bg="tomato" borderRadius={"1.5rem"} />
        <GridItem colSpan={6} bg="papayawhip" borderRadius={"1.5rem"} />
        <GridItem colSpan={3} bg="tomato" borderRadius={"1.5rem"} />
        <GridItem colSpan={3} bg="papayawhip" borderRadius={"1.5rem"} />
      </Grid>
    </Box>
  );
}

export default BentoGrid;
