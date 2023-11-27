import IconTrello from "@/assets/IconTrello";
import { ActionIcon, Autocomplete, Avatar, Button, Flex, Group, Popover, rem } from "@mantine/core";
import { IconBellRinging2Filled, IconSearch } from "@tabler/icons-react";
import Workspaces from "./Menus/Workspaces";
import Recent from "./Menus/Recent";
import Starred from "./Menus/Starred";
import Templates from "./Menus/Templates";
import theme from "@/theme";

function AppBar() {
  return (
    <Flex
      style={{
        height: theme.other.appBarHeight,
      }}
      className="overflow-x-auto overflow-y-hidden justify-between items-center px-4 border-b"
    >
      <Group className="flex-nowrap gap-1">
        <Button leftSection={<IconTrello />} variant="transparent" size="md" px={0}>
          Trello
        </Button>
        <Workspaces />
        <Recent />
        <Starred />
        <Templates />
        <Button variant="transparent">Create</Button>
      </Group>
      <Group className="flex-nowrap">
        <Autocomplete
          className="min-w-max"
          placeholder="Search"
          variant="filled"
          leftSection={<IconSearch size={16} />}
        />
        <Popover>
          <Popover.Target>
            <ActionIcon p="xs" radius="100%">
              <IconBellRinging2Filled />
            </ActionIcon>
          </Popover.Target>
        </Popover>
        <Avatar />
      </Group>
    </Flex>
  );
}

export default AppBar;
