import { Flex, rem } from "@mantine/core";
import ColumnFooter from "./ColumnFooter";
import ColumnHeader from "./ColumnHeader";
import ListCards from "./ListCards/ListCards";
import { CardType, ColumnType, MemberType } from "@/types/board";

function Column({
  column,
  cards,
  members,
}: {
  column: ColumnType;
  cards: CardType[];
  members: MemberType[];
}) {
  return (
    <Flex
      style={{
        width: rem(300),
      }}
      className="flex-col py-2 rounded-lg border shadow-sm"
    >
      <ColumnHeader column={column} />
      <ListCards
        cards={cards.filter((card) => card.idList === column.id).sort((a, b) => a.pos - b.pos)}
        members={members}
      />
      <ColumnFooter />
    </Flex>
  );
}

export default Column;
