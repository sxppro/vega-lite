import { Grid, GridItem } from '@chakra-ui/react';

const GridView = () => {
  return (
    <Grid
      templateColumns={'repeat(2, 1fr)'}
      templateRows={'repeat(4, 1fr)'}
      gap={4}
      h="960px"
      mb={8}
    >
      <GridItem colSpan={2} rowSpan={1} bg="cyan.200"></GridItem>
      <GridItem colSpan={1} rowSpan={1} bg="lightsalmon"></GridItem>
      <GridItem colSpan={1} rowSpan={1} bg="blanchedalmond"></GridItem>
      <GridItem colSpan={2} rowSpan={1} bg="cyan.200"></GridItem>
      <GridItem colSpan={2} rowSpan={1} bg="blue.200"></GridItem>
    </Grid>
  );
};

export default GridView;
