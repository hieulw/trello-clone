import theme from "@/theme";
import { Flex } from "@mantine/core";
import ListColumns from "./ListColumns/ListColumns";

function BoardContent() {
  return (
    <Flex
      style={{
        height: theme.other.boardContentHeight,
      }}
      className="overflow-x-auto overflow-y-hidden p-2"
    >
      <ListColumns />
    </Flex>
  );
}

export default BoardContent;
