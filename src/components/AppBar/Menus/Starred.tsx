import { Popover, Button } from "@mantine/core";
import { IconCaretDownFilled } from "@tabler/icons-react";

function Starred() {
  return (
    <Popover>
      <Popover.Target>
        <Button
          size="compact-sm"
          rightSection={<IconCaretDownFilled size={14} />}
          variant="transparent"
        >
          Starred
        </Button>
      </Popover.Target>
      <Popover.Dropdown>Test Workspaces</Popover.Dropdown>
    </Popover>
  );
}

export default Starred;
