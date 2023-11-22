import { DEFAULT_THEME, createTheme, mergeMantineTheme, rem } from "@mantine/core";

const APP_BAR_HEIGHT = rem(48);
const BOARD_BAR_HEIGHT = rem(48);
const COLUMN_HEADER_HEIGHT = rem(40);
const COLUMN_FOOTER_HEIGHT = rem(38);

const themeOverride = createTheme({
  focusRing: "never",
  other: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`,
    columnHeaderHeight: COLUMN_HEADER_HEIGHT,
    columnFooterHeight: COLUMN_FOOTER_HEIGHT,
  },
});

const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

export default theme;
