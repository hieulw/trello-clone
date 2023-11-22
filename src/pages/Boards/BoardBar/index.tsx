import theme from "@/theme";
import { ActionIcon, Avatar, Button, Flex, Group, TextInput } from "@mantine/core";
import { IconCalendar, IconFilter, IconSettingsAutomation, IconStar } from "@tabler/icons-react";

function BoardBar() {
  return (
    <Flex
      style={{
        height: theme.other.boardBarHeight,
      }}
      className="justify-between items-center px-3 w-full bg-transparent border-b"
    >
      <Group>
        <TextInput variant="filled" value={"Board Name"} />
        <ActionIcon variant="subtle">
          <IconStar size={16} />
        </ActionIcon>
      </Group>
      <Group className="gap-0">
        <Button leftSection={<IconCalendar size={16} />} variant="subtle">
          Calendar Power-Up
        </Button>
        <Button leftSection={<IconSettingsAutomation size={16} />} variant="subtle">
          Automation
        </Button>
        <Button leftSection={<IconFilter size={16} />} variant="subtle">
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
