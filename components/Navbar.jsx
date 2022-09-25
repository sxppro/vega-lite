import NextLink from 'next/link';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';

const Links = [
  { text: 'Home', link: '/' },
  { text: 'Week 9', link: '/week-9' },
];

const NavLink = ({ link, children }) => (
  <NextLink href={link} passHref>
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
    >
      {children}
    </Link>
  </NextLink>
);

const Navbar = ({ displayAction }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} boxShadow="base">
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Box>
            <NextLink href={'/'} passHref>
              <Link
                _hover={{ textDecoration: 'none' }}
                fontWeight="bold"
                fontSize="2xl"
                px={2}
                py={2}
                bgGradient={useColorModeValue(
                  'linear(to-r, #C471ED, #F64F59)',
                  'linear(to-r, #CF8BF3, #FDB99B)'
                )}
                bgClip="text"
              >
                Data Vis 2
              </Link>
            </NextLink>
          </Box>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            {Links.map(({ text, link }) => (
              <NavLink key={text} link={link}>
                {text}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={'center'}>
          <IconButton
            onClick={toggleColorMode}
            icon={isDark ? <SunIcon /> : <MoonIcon />}
            size="sm"
          />
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map(({ text, link }) => (
              <NavLink key={text} link={link}>
                {text}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
