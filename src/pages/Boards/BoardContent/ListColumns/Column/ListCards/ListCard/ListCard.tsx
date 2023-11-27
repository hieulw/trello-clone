import { Card, Box, Group, Tooltip, Badge, Avatar, Image, Text } from "@mantine/core";
import {
  IconClock,
  IconEye,
  IconAlignJustified,
  IconMessageCircle,
  IconPaperclip,
} from "@tabler/icons-react";

function ListCard() {
  return (
    <Box className="cursor-pointer">
      <Card className="my-1 rounded-lg shadow">
        <Card.Section>
          <Image
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            alt="Norway"
          />
        </Card.Section>
        <Text className="mt-1">Norway Fjord Adventures</Text>
        <Group className="justify-between mt-2">
          <Tooltip label="This card is complete">
            <Badge variant="filled" color="green" leftSection={<IconClock size={16} />}>
              Dec 1, 2023
            </Badge>
          </Tooltip>
          <Tooltip label="You are watching this card">
            <IconEye size={16} />
          </Tooltip>
          <Tooltip label="This card has a description">
            <IconAlignJustified size={16} />
          </Tooltip>
          <Tooltip label="Comments">
            <Badge color="dark" variant="transparent" leftSection={<IconMessageCircle size={16} />}>
              2
            </Badge>
          </Tooltip>
          <Tooltip label="Attachments">
            <Badge color="dark" variant="transparent" leftSection={<IconPaperclip size={16} />}>
              1
            </Badge>
          </Tooltip>
          <Avatar.Group>
            <Avatar />
            <Avatar />
            <Avatar />
          </Avatar.Group>
        </Group>
      </Card>
    </Box>
  );
}

export default ListCard;
