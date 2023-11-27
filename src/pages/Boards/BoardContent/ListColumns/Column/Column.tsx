import { Flex, rem } from "@mantine/core";
import ColumnFooter from "./ColumnFooter";
import ColumnHeader from "./ColumnHeader";
import ListCards from "./ListCards/ListCards";

function Column() {
  return (
    <Flex
      style={{
        width: rem(300),
      }}
      className="flex-col py-2 rounded-lg border shadow-sm"
    >
      <ColumnHeader />
      <ListCards />
      <ColumnFooter />
    </Flex>
  );
}

export default Column;
