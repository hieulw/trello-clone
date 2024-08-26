import theme from "@/theme";
import { CardType, ColumnType, MemberType } from "@/types/board";
import { Flex } from "@mantine/core";
import ListColumns from "./ListColumns/ListColumns";

function BoardContent({
  columns,
  cards,
  members,
}: {
  columns: ColumnType[];
  cards: CardType[];
  members: MemberType[];
}) {
  return (
    <Flex
      style={{
        height: theme.other.boardContentHeight,
      }}
      className="overflow-x-auto overflow-y-hidden p-2"
    >
      <ListColumns
        columns={columns.sort((a, b) => a.pos - b.pos)}
        cards={cards}
        members={members}
      />
    </Flex>
  );
}

export default BoardContent;
