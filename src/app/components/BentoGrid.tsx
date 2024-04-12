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
        h={"90vh"}
        w={"95vh"}
        templateColumns="repeat(12, 1fr)"
        gap={"1rem"}
      >
        <GridItem
          colSpan={9}
          rowSpan={2}
          bg="rgba(56, 0, 153, 0.34)"
          color={"white"}
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
          <Image
            src="/images/essay.png"
            alt="CV Icon"
            boxSize="50px"
            objectFit="cover"
            borderRadius="full"
          />
        </GridItem>
        <GridItem
          colSpan={3}
          rowSpan={1}
          bgImage={"url('/images/me.jpg')"}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          borderRadius={"1.5rem"}
          display="flex"
          justifyContent="center"
          alignItems="center"
        ></GridItem>
        <GridItem
          colSpan={6}
          bgImage={"url('/images/project.gif')"}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          borderRadius={"1.5rem"}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          Projects
        </GridItem>
        <GridItem
          colSpan={6}
          bgImage={"url('/images/cat-work.gif')"}
          color={"white"}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
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
          <Image
            src="/images/mail_icon.svg"
            alt="Instagram Icon"
            boxSize="50px"
            objectFit="cover"
            borderRadius="full"
          />
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
          <Image
            src="/images/linkedin_icon.svg"
            alt="Instagram Icon"
            boxSize="50px"
            objectFit="cover"
            borderRadius="full"
          />
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
          <Image
            src="/images/discord_icon.svg"
            alt="Instagram Icon"
            boxSize="50px"
            objectFit="cover"
            borderRadius="full"
          />
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
          <Image
            src="/images/instagram_icon.svg"
            alt="Instagram Icon"
            boxSize="50px"
            objectFit="cover"
            borderRadius="full"
          />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default BentoGrid;
