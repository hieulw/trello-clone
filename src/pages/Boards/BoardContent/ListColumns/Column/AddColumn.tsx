import theme from "@/theme";
import { Button, Flex, rem } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

function AddColumn() {
  return (
    <Flex
      style={{
        width: rem(300),
        height: theme.other.columnHeaderHeight,
      }}
      className="flex-col justify-center rounded-lg border shadow-sm"
    >
      <Button className="grow" leftSection={<IconPlus />} variant="subtle">
        Add another list
      </Button>
    </Flex>
  );
}

export default AddColumn;
