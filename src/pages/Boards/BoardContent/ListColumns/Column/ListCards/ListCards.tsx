import { Flex } from "@mantine/core";
import ListCard from "./ListCard/ListCard";
import theme from "@/theme";

function ListCards() {
  return (
    <Flex
      style={{
        maxHeight: theme.other.columnContentHeight,
      }}
      className="overflow-y-auto flex-col px-2 my-2"
    >
      {[...Array(4).keys()].map(() => (
        <ListCard />
      ))}
    </Flex>
  );
}

export default ListCards;
