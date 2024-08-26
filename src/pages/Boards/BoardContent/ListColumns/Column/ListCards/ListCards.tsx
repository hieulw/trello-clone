import theme from "@/theme";
import { Flex } from "@mantine/core";
import { CardType, MemberType } from "@/types/board";
import ListCard from "./ListCard/ListCard";

function ListCards({ cards, members }: { cards: CardType[]; members: MemberType[] }) {
  return (
    <Flex
      style={{
        maxHeight: theme.other.columnContentHeight,
      }}
      className="overflow-y-auto flex-col px-2 my-2"
    >
      {cards?.map((card) => (
        <ListCard
          key={card.id}
          card={card}
          members={members.filter((member) => card.idMembers.includes(member.id))}
        />
      ))}
    </Flex>
  );
}

export default ListCards;
