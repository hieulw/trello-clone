import theme from "@/theme";
import { ActionIcon, Flex, Menu } from "@mantine/core";
import { IconDots } from "@tabler/icons-react";
import { ColumnType } from "@/types/board";

function ColumnHeader({ column }: { column: ColumnType }) {
  return (
    <Flex
      style={{
        height: theme.other.columnHeaderHeight,
      }}
      className="justify-between items-center px-2 basis-0"
    >
      <h2 className="flex flex-wrap flex-grow flex-shrink font-semibold">{column.name}</h2>
      <Menu>
        <Menu.Target>
          <ActionIcon variant="subtle">
            <IconDots size={16} />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown className="shadow">
          <Menu.Label>List actions</Menu.Label>
          <Menu.Item>Add card</Menu.Item>
          <Menu.Item>Copy list</Menu.Item>
          <Menu.Item>Move list</Menu.Item>
          <Menu.Item>Watch</Menu.Item>
          <Menu.Divider />
          <Menu.Item>Sort by</Menu.Item>
          <Menu.Divider />
          <Menu.Label>Automation</Menu.Label>
          <Menu.Item>When a card is added to the list</Menu.Item>
          <Menu.Item>Every day, sort list by</Menu.Item>
          <Menu.Item>Every Monday, sort list by</Menu.Item>
          <Menu.Item>Create a rule</Menu.Item>
          <Menu.Divider />
          <Menu.Item>Move all cards in this list</Menu.Item>
          <Menu.Item>Archive all cards in this list</Menu.Item>
          <Menu.Divider />
          <Menu.Item>Archive this list</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Flex>
  );
}

export default ColumnHeader;
