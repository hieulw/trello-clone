import { DEFAULT_THEME, createTheme, mergeMantineTheme, rem } from "@mantine/core";

const APP_BAR_HEIGHT = rem(48);
const BOARD_BAR_HEIGHT = rem(48);
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`;
const COLUMN_HEADER_HEIGHT = rem(40);
const COLUMN_FOOTER_HEIGHT = rem(38);
const BOX_SPACING = rem(40);
const COLUMN_CONTENT_HEIGHT = `calc(${BOARD_CONTENT_HEIGHT} - ${COLUMN_HEADER_HEIGHT} - ${COLUMN_FOOTER_HEIGHT} - ${BOX_SPACING})`;

const themeOverride = createTheme({
  focusRing: "never",
  spacing: { xs: rem(4), sm: rem(8), md: rem(12) },
  other: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT,
    columnHeaderHeight: COLUMN_HEADER_HEIGHT,
    columnFooterHeight: COLUMN_FOOTER_HEIGHT,
    columnContentHeight: COLUMN_CONTENT_HEIGHT,
  },
});

const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

export default theme;
