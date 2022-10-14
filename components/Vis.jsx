import { useEffect, useState } from 'react';
import { visualise } from '../utils/charts';
import { Box, Center, Spinner } from '@chakra-ui/react';

const Vis = ({ visId, height = '360px' }) => {
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
    <Box id={visId} w="100%" h={{ base: '256px', md: height }}>
      {loading ? (
        <Center h={'inherit'}>
          <Spinner size={'xl'} />
        </Center>
      ) : (
        ''
      )}
    </Box>
  );
};

export default Vis;
