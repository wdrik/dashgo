import { Stack, Button, Box } from '@chakra-ui/react';

export function Pagination() {
  return (
    <Stack
      direction="row"
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="pink"
          disabled
          _disabled={{ bgColor: 'pink.500', cursor: 'default' }}
        >
          1
        </Button>

        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bgColor="gray.700"
          _hover={{
            bgColor: 'gray.600',
          }}
        >
          2
        </Button>

        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bgColor="gray.700"
          _hover={{
            bgColor: 'gray.600',
          }}
        >
          3
        </Button>

        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bgColor="gray.700"
          _hover={{
            bgColor: 'gray.600',
          }}
        >
          4
        </Button>

        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bgColor="gray.700"
          _hover={{
            bgColor: 'gray.600',
          }}
        >
          5
        </Button>
      </Stack>
    </Stack>
  );
}
