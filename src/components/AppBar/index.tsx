import IconTrello from "@/assets/IconTrello";
import { ActionIcon, Autocomplete, Avatar, Button, Flex, Group, Popover } from "@mantine/core";
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
      className="overflow-x-auto justify-between items-center px-4 w-full border-b"
    >
      <Group className="gap-1 space-x-0">
        <Button leftSection={<IconTrello />} variant="transparent" size="md" className="px-0">
          Trello
        </Button>
        <Workspaces />
        <Recent />
        <Starred />
        <Templates />
        <Button variant="transparent">Create</Button>
      </Group>
      <Group>
        <Autocomplete
          placeholder="Search"
          variant="filled"
          leftSection={<IconSearch size={16} />}
        />
        <Popover>
          <Popover.Target>
            <ActionIcon className="p-1 rounded-full">
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
