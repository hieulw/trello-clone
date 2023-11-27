import theme from "@/theme";
import { ActionIcon, Avatar, Button, Flex, Group } from "@mantine/core";
import { IconCalendar, IconFilter, IconSettingsAutomation, IconStar } from "@tabler/icons-react";

function BoardBar() {
  return (
    <Flex
      style={{
        height: theme.other.boardBarHeight,
      }}
      className="overflow-x-auto justify-between items-center px-3 w-full bg-transparent border-b"
    >
      <Group className="flex-nowrap">
        <h1>Board Name</h1>
        <ActionIcon variant="subtle">
          <IconStar size={16} />
        </ActionIcon>
      </Group>
      <Group className="flex-nowrap gap-0">
        <Button size="xs" leftSection={<IconCalendar size={16} />} variant="subtle">
          Calendar Power-Up
        </Button>
        <Button size="xs" leftSection={<IconSettingsAutomation size={16} />} variant="subtle">
          Automation
        </Button>
        <Button size="xs" leftSection={<IconFilter size={16} />} variant="subtle">
          Filters
        </Button>
        <Avatar.Group>
          <Avatar />
          <Avatar />
          <Avatar />
        </Avatar.Group>
      </Group>
    </Flex>
  );
}

export default BoardBar;
