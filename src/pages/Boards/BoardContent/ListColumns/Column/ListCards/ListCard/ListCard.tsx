import { CardType, MemberType } from "@/types/board";
import { localeDate } from "@/utils/formatting";
import { Avatar, Badge, Card, Flex, Group, Image, Text, Tooltip } from "@mantine/core";
import {
  IconAlignJustified,
  IconClock,
  IconEye,
  IconMessageCircle,
  IconPaperclip,
} from "@tabler/icons-react";

function ListCard({ card, members }: { card: CardType; members: MemberType[] }) {
  return (
    <Flex className="flex-col">
      <Card className="my-1 rounded-lg shadow cursor-pointer">
        {card.cover.idAttachment && (
          <Card.Section>
            <Image
              src={`https://picsum.photos/seed/${card.cover.idAttachment}/300/169`}
              alt={card.name}
            />
          </Card.Section>
        )}
        <Text className="mt-1">{card.name}</Text>
        <Group className="mt-2">
          {card.badges.due && (
            <Tooltip label="This card is complete">
              <Badge
                variant="filled"
                color={card.badges.dueComplete ? "green" : "red"}
                leftSection={<IconClock size={16} />}
              >
                {localeDate(card.badges.due)}
              </Badge>
            </Tooltip>
          )}
          {card.badges.subscribed && (
            <Tooltip label="You are watching this card">
              <Badge p={0} color="dark" variant="transparent" leftSection={<IconEye size={16} />} />
            </Tooltip>
          )}
          {card.badges.description && (
            <Tooltip label="This card has a description">
              <IconAlignJustified size={16} />
            </Tooltip>
          )}
          {card.badges.comments && (
            <Tooltip label="Comments">
              <Badge
                p={0}
                color="dark"
                variant="transparent"
                leftSection={<IconMessageCircle size={16} />}
                children={card.badges.comments}
              />
            </Tooltip>
          )}
          {card.badges.attachments && (
            <Tooltip label="Attachments">
              <Badge
                p={0}
                color="dark"
                variant="transparent"
                leftSection={<IconPaperclip size={16} />}
                children={card.badges.attachments}
              />
            </Tooltip>
          )}
          {members?.length > 0 && (
            <Avatar.Group className="justify-end grow">
              {members?.map((member) => (
                <Tooltip key={member.id} label={`${member.fullName} (${member.username})`}>
                  <Avatar size="sm" src={member.avatarUrl ? `${member.avatarUrl}/30.png` : null} />
                </Tooltip>
              ))}
            </Avatar.Group>
          )}
        </Group>
      </Card>
    </Flex>
  );
}

export default ListCard;
