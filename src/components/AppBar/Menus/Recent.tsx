import { Popover, Button } from "@mantine/core";
import { IconCaretDownFilled } from "@tabler/icons-react";

function Recent() {
  return (
    <Popover>
      <Popover.Target>
        <Button
          size="compact-sm"
          rightSection={<IconCaretDownFilled size={14} />}
          variant="transparent"
        >
          Recent
        </Button>
      </Popover.Target>
      <Popover.Dropdown>Test Workspaces</Popover.Dropdown>
    </Popover>
  );
}

export default Recent;
