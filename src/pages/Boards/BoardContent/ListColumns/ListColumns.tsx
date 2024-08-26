import { Flex } from "@mantine/core";
import Column from "./Column/Column";
import AddColumn from "./Column/AddColumn";
import { CardType, ColumnType, MemberType } from "@/types/board";

function ListColumns({
  columns,
  cards,
  members,
}: {
  columns: ColumnType[];
  cards: CardType[];
  members: MemberType[];
}) {
  return (
    <Flex gap="xs" align="self-start">
      {columns.map((column) => (
        <Column key={column.id} column={column} cards={cards} members={members} />
      ))}
      <AddColumn />
    </Flex>
  );
}

export default ListColumns;
