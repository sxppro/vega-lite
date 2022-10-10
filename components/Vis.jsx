import { useEffect, useState } from 'react';
import { visualise } from '../utils/charts';
import { Box, Center, Spinner } from '@chakra-ui/react';

const Vis = ({ visId }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const doAsync = async () => {
      try {
        setLoading(false);
        await visualise(`#${visId}`, `/api/schemas/${visId}`, false);
      } catch (err) {
        console.error(err);
      }
    };
    doAsync();
  }, [visId]);

  return (
    <Box id={visId} w="100%" minH={{ base: '256px', md: '360px' }}>
      {loading ? (
        <Center h="100%">
          <Spinner size={'xl'} />
        </Center>
      ) : (
        ''
      )}
    </Box>
  );
};

export default Vis;
