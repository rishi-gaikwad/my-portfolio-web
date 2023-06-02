import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Social";

function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading
          ml="8" size="md" fontWeight='bold' color="cyan.400">imtheRG</Heading>

        <Spacer></Spacer>
        <IconButton icon={<FaLinkedin />} isRound='true' onClick={() =>
          window.open("https://linkedin.com/in/rushikesh gaikwad")
        } ></IconButton>

        <IconButton ml={2} icon={<FaInstagram />} isRound='true' onClick={() =>
          window.open("https://instagram.com/rushi_gaikwad_92")
        } ></IconButton>
        <IconButton ml={2} icon={<FaGithub />} isRound='true' onClick={() =>
          window.open("https://github.com/rishi-gaikwad/rishi-gaikwad")
        }  ></IconButton>
        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header/>
      <Social/>
      <Profile/>
    </VStack>
  );
}

export default App;





