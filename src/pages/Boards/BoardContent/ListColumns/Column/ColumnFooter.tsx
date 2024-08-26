import theme from "@/theme";
import { Button, Tooltip, ActionIcon, Flex } from "@mantine/core";
import { IconPlus, IconTemplate } from "@tabler/icons-react";

function ColumnFooter() {
  return (
    <Flex
      style={{
        height: theme.other.columnFooterHeight,
      }}
      className="flex items-center px-2"
    >
      <Button className="grow" leftSection={<IconPlus />} variant="subtle">
        Add a card
      </Button>
      <Tooltip label="Create from template">
        <ActionIcon size="lg" variant="subtle">
          <IconTemplate size={16} />
        </ActionIcon>
      </Tooltip>
    </Flex>
  );
}

export default ColumnFooter;
