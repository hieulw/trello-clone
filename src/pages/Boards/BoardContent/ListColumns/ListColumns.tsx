import { Flex } from "@mantine/core";
import Column from "./Column/Column";
import AddColumn from "./Column/AddColumn";

function ListColumns() {
  return (
    <Flex gap="xs" align="self-start">
      {[...Array(4).keys()].map(() => (
        <Column />
      ))}
      <AddColumn />
    </Flex>
  );
}

export default ListColumns;
