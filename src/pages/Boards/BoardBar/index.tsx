import theme from "@/theme";
import { MemberType } from "@/types/board";
import { ActionIcon, Avatar, Button, Flex, Group, Tooltip } from "@mantine/core";
import { IconCalendar, IconFilter, IconSettingsAutomation, IconStar } from "@tabler/icons-react";

function BoardBar({
  members,
  boardName,
}: {
  members: MemberType[];
  boardName: string;
}) {
  return (
    <Flex
      style={{
        height: theme.other.boardBarHeight,
      }}
      className="overflow-x-auto justify-between items-center px-3 w-full bg-transparent border-b"
    >
      <Group className="flex-nowrap">
        <h1>{boardName}</h1>
        <ActionIcon variant="subtle">
          <IconStar size={16} />
        </ActionIcon>
      </Group>
      <Group className="flex-nowrap gap-0">
        <Button size="xs" leftSection={<IconCalendar size={16} />} variant="subtle">
          Calendar Power-Up
        </Button>
        <Button size="xs" leftSection={<IconSettingsAutomation size={16} />} variant="subtle">
          Automation
        </Button>
        <Button size="xs" leftSection={<IconFilter size={16} />} variant="subtle">
          Filters
        </Button>
        <Avatar.Group>
          {members.map((member) => (
            <Tooltip key={member.id} label={`${member.fullName} (${member.username})`}>
              <Avatar
                size="sm"
                src={member.avatarUrl ? `${member.avatarUrl}/30.png` : null}
                children={member.avatarUrl ? null : member.initials}
              />
            </Tooltip>
          ))}
        </Avatar.Group>
      </Group>
    </Flex>
  );
}

export default BoardBar;
