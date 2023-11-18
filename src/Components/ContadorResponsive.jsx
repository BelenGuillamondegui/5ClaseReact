import React, { useState } from "react";
import { Flex, Heading, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

const ContadorResponsive = () => {
  const [contador, setContador] = useState(0);
  const [mensaje, setMensaje] = useState("");

  const incrementarContador = () => {
    setContador(contador + 1);
    setMensaje("Estás incrementando");
  };

  const decrementarContador = () => {
    setContador(contador - 1);
    setMensaje("Estás decrementando.");
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minH="100vh"
      p={4}
      bgGradient="linear(to-l, #D9C4E8, #A09BD7)"
      color="white"
      borderRadius="md"
      boxShadow="md"
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <Heading mb={4} fontSize="3xl" color="teal">
          Mi contador
        </Heading>
      </motion.div>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 8 }}
        transition={{ duration: 1 }}
      >
        <Heading size="3xl" mb={4}>
          {contador}
        </Heading>
      </motion.div>

      <Heading size="lg" mb={4} color="teal">
        {mensaje}
      </Heading>
      <Flex mt={4}>
        <Button
          onClick={incrementarContador}
          mr={2}
          colorScheme="teal"
          variant="solid"
        >
          Incrementar
        </Button>
        <Button
          onClick={decrementarContador}
          colorScheme="pink"
          variant="solid"
        >
          Decrementar
        </Button>
      </Flex>
    </Flex>
  );
};

export default ContadorResponsive;
