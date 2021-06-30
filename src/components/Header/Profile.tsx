import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Iorgen Wildrik</Text>
        <Text color="gray.300" fontSize="small">
          w.drik@email.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Iorgen Wildrik"
        src="https://github.com/wdrik.png"
      />
    </Flex>
  );
}
