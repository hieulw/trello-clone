import { BlockquoteStylesNames } from "@mantine/core";

export type LabelType = {
  id: string;
  color: string;
  idBoard: string;
  name: string;
};

type SwitcherViewType = {
  viewType: string;
  enabled: boolean;
};

export type PreferenceType = {
  permissionLevel: string;
  hideVotes: boolean;
  voting: string;
  comments: string;
  invitations: string;
  selfJoin: boolean;
  cardCovers: boolean;
  isTemplate: boolean;
  cardAging: string;
  calendarFeedEnabled: boolean;
  hiddenPluginBoardButtons: [];
  switcherViews: SwitcherViewType[];
  background: string;
  backgroundColor: string | null;
  backgroundImage: string | null;
  backgroundTile: boolean;
  backgroundBrightness: string;
  backgroundBottomColor: string | null;
  backgroundTopColor: string | null;
  canBePublic: boolean;
  canBeEnterprise: boolean;
  canBeOrg: boolean;
  canBePrivate: boolean;
  canInvite: boolean;
};

export type ColumnType = {
  id: string;
  idBoard: string;
  name: string;
  pos: number;
};

export type CardType = {
  id: string;
  badges: {
    attachmentsByType: { trello: { board: number; card: number } };
    location: boolean;
    votes: number;
    viewingMemberVoted: boolean;
    subscribed: boolean;
    fogbugz: string;
    checkItems: number;
    checkItemsChecked: number;
    checkItemsEarliestDue: null;
    comments: number;
    attachments: number;
    description: boolean;
    due: string | null;
    dueComplete: boolean;
    start: null;
  };
  cover: {
    idAttachment: string | null;
    // color: null;
    // idUploadedBackground: null;
    // size: string;
    // brightness: string;
    // scaled?: {
    //   _id: string;
    //   id: string;
    //   scaled: boolean;
    //   url: string;
    //   bytes: number;
    //   height: number;
    //   width: number;
    // }[];
    // edgeColor: string;
    // idPlugin: null;
  };
  dateLastActivity: string;
  desc: string;
  due: string | null;
  dueComplete: boolean | null;
  dueReminder: number | null;
  idAttachmentCover: string | null;
  idBoard: string;
  idLabels: never[];
  idList: string;
  idMembers: string[];
  labels: never[];
  name: string;
  pos: number;
  start: null;
  url: string;
  stickers: never[];
  attachments: {
    id: string;
    bytes: number | null;
    date: string;
    edgeColor: string | null;
    fileName: string;
    idMember: string;
    isUpload: boolean;
    mimeType: string;
    name: string;
    pos: number;
    url: string;
  }[];
  checklists: never[];
  pluginData: never[];
  customFieldItems: never[];
};

export type MemberType = {
  id: string;
  avatarUrl: string | null;
  fullName: string;
  initials: string;
  memberType: string;
  url: string;
  username: string;
};

export type MembershipType = {
  idMember: string;
  memberType: string;
  unconfirmed: boolean;
  deactivated: boolean;
  id: string;
  orgMemberType: string;
};

export type BoardType = {
  id: string;
  closed: boolean;
  creationMethod: null;
  dateLastView: string;
  dateLastActivity: string;
  datePluginDisable: null;
  desc: string;
  descData: null;
  enterpriseOwned: boolean;
  idMemberCreator: null;
  idOrganization: string;
  name: string;
  nodeId: string;
  prefs: PreferenceType;
  shortLink: string;
  shortUrl: string;
  subscribed: boolean;
  templateGallery: null;
  url: string;
  cards: CardType[];
  labels: LabelType[];
  lists: ColumnType[];
  members: MemberType[];
  customFields: never[];
  membership: MembershipType[];
  organization: OrganizationType;
};

export type OrganizationType = {
  id: string;
  desc: string;
  displayName: string;
  idEnterprise: string;
  logoHash: null;
  memberships: MembershipType[];
  name: string;
  prefs: PreferenceType;
  premiumFeatures: string[];
  url: string;
};
