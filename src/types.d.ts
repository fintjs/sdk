// Getting updates

interface Update {
  update_id: number;
  message: Message;
  edited_message: Message;
  channel_post: Message;
  edited_channel_post: Message;
  inline_query: InlineQuery;
  chosen_inline_result: ChosenInlineResult;
  callback_query: CallbackQuery;
  shipping_query: ShippingQuery;
  pre_checkout_query: PreCheckoutQuery;
  poll: Poll;
  poll_answer: PollAnswer;
  my_chat_member: ChatMemberUpdated;
  chat_member: ChatMemberUpdated;
  chat_join_request: ChatJoinRequest;
}

interface getUpdates {
  offset?: number;
  limit?: number;
  timeout?: number;
  allowed_updates?: string[];
}

interface setWebhook {
  url: string;
  certificate?: InputFile;
  ip_address?: string;
  max_connections?: number;
  allowed_updates?: string[];
  drop_pending_updates?: boolean;
}

interface deleteWebhook {
  drop_pending_updates?: boolean;
}

interface WebhookInfo {
  url: string;
  has_custom_certificate: boolean;
  pending_update_count: number;
  ip_address?: string;
  last_error_date?: number;
  last_error_message?: string;
  last_synchronization_error_date?: number;
  max_connections?: number;
  allowed_updates?: string[];
}

// Available types

interface User {
  id: number;
  is_bot: boolean;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  can_join_groups?: boolean;
  supports_inline_queries?: boolean;
}

interface Chat {
  id: number;
  type: string;
  title?: string;
  username?: string;
  first_name?: string;
  last_name?: string;
  photo?: ChatPhoto;
  bio?: string;
  has_private_forwards?: boolean;
  description?: string;
  invite_link?: string;
  pinned_message?: Message;
}

interface Message {
  message_id: number;
  from: User;
  sender_chat: Chat;
  date: number;
  chat: Chat;
  forward_from?: User;
  forward_from_chat?: Chat;
  forward_from_message_id?: number;
  forward_signature?: string;
  forward_sender_name?: string;
  forward_date?: number;
  is_automatic_forward?: boolean;
  reply_to_message?: Message;
  via_bot?: User;
  edit_date?: number;
  has_protected_content?: boolean;
  media_group_id?: string;
  author_signature?: string;
  text?: string;
  entities?: MessageEntity[];
  animation?: Animation;
  audio?: Audio;
  document?: Document;
  photo?: PhotoSize[];
  sticker?: Sticker;
  video?: Video;
  video_note?: VideoNote;
  voice?: Voice;
  caption?: string;
  caption_entities?: MessageEntity[];
  contact?: Contact;
  dice?: Dice;
  game?: Game;
  poll?: Poll;
  venue?: Venue;
  location?: Location;
  new_chat_members?: User[];
  left_chat_member?: User;
  new_chat_title?: string;
  new_chat_photo?: PhotoSize[];
  delete_chat_photo?: boolean;
  group_chat_created?: boolean;
  supergroup_chat_created?: boolean;
  channel_chat_created?: boolean;
  message_auto_delete_timer_changed?: MessageAutoDeleteTimerChanged;
  migrate_to_chat_id?: number;
  migrate_from_chat_id?: number;
  pinned_message?: Message;
  invoice?: Invoice;
  successful_payment?: SuccessfulPayment;
  connected_website?: string;
  passport_data?: PassportData;
  proximity_alert_triggered?: ProximityAlertTriggered;
  video_chat_scheduled?: VideoChatScheduled;
  video_chat_started?: VideoChatStarted;
  video_chat_ended?: VideoChatEnded;
  video_chat_participants_invited?: VideoChatParticipantsInvited;
  web_app_data?: WebAppData;
  reply_markup?: InlineKeyboardMarkup;
}

interface MessageEntity {
  type: string;
  offset: number;
  length: number;
  url?: string;
  user?: User;
  language?: string;
}

interface PhotoSize {
  file_id: string;
  file_unique_id: string;
  width: number;
  height: number;
  file_size?: number;
}

interface Animation {
  file_id: string;
  file_unique_id: string;
  width: number;
  height: number;
  duration: number;
  thumb?: PhotoSize;
  file_name?: string;
  mime_type?: string;
  file_size?: number;
}

interface Audio {
  file_id: string;
  file_unique_id: string;
  width: number;
  height: number;
  duration: number;
  performer?: string;
  title?: string;
  file_name?: string;
  mime_type?: string;
  file_size?: number;
  thumb?: PhotoSize;
}

interface Document {
  file_id: string;
  file_unique_id: string;
  thumb?: PhotoSize;
  file_name?: string;
  mime_type?: string;
  file_size?: number;
}

interface Video {
  file_id: string;
  file_unique_id: string;
  width: number;
  height: number;
  duration: number;
  thumb?: PhotoSize;
  file_name?: string;
  mime_type?: string;
  file_size?: number;
}

interface VideoNote {
  file_id: string;
  file_unique_id: string;
  length: number;
  duration: number;
  thumb?: PhotoSize;
  file_size?: string;
}

interface Voice {
  file_id: string;
  file_unique_id: string;
  duration: number;
  mime_type?: string;
  file_size?: number;
}

interface Contact {
  phone_number: string;
  first_name: string;
  last_name?: string;
  user_id?: number;
  vcard?: string;
}

interface Dice {
  emoji: string;
  value: number;
}

interface PollOption {
  text: string;
  voter_count: number;
}

interface PollAnswer {
  poll_id: string;
  user: User;
  option_ids: number[];
}

interface Poll {
  id: string;
  question: string;
  options: PollOption[];
  total_voter_count: number;
  is_closed: boolean;
  is_anonymous: boolean;
  type: string;
  allows_multiple_answers: boolean;
  correct_option_id?: number;
  explanation?: string;
  explanation_entities?: MessageEntity[];
  open_period?: number;
  close_date?: number;
}

interface Location {
  longitude: number;
  latitude: number;
  horizontal_accuracy?: number;
  live_period?: number;
  heading?: number;
  proximity_alert_radius?: number;
}

interface Venue {
  location: Location;
  title: string;
  address: string;
  foursquare_id?: string;
  foursquare_type?: string;
  google_place_id?: string;
  google_place_type?: string;
}

interface WebAppData {
  data: string;
  button_text: string;
}

interface ProximityAlertTriggered {
  traveler: User;
  watcher: User;
  distance: number;
}

interface MessageAutoDeleteTimerChanged {
  message_auto_delete_time: number;
}

interface VideoChatScheduled {
  start_date: number;
}

interface VideoChatStarted { }

interface VideoChatEnded {
  duration: number;
}

interface VideoChatParticipantsInvited {
  users: User[];
}

interface UserProfilePhotos {
  total_count: number;
  photos: PhotoSize[][];
}

interface File {
  file_id: string;
  file_unique_id: string;
  file_size?: number;
  file_path?: string;
}

interface WebAppInfo {
  url: string;
}

interface ReplyKeyboardMarkup {
  keyboard: KeyboardButton[][];
  resize_keyboard?: boolean;
  one_time_keyboard?: boolean;
  input_field_placeholder?: string;
  selective?: boolean;
}

interface KeyboardButton {
  text: string;
  request_contact?: boolean;
  request_location?: boolean;
  request_poll?: KeyboardButtonPollType;
  web_app?: WebAppInfo;
}

interface KeyboardButtonPollType {
  type: string;
}

interface ReplyKeyboardRemove {
  remove_keyboard: boolean;
  selective?: boolean;
}

interface InlineKeyboardMarkup {
  inline_keyboard: InlineKeyboardButton[][];
}

interface InlineKeyboardButton {
  text: string;
  url?: string;
  callback_data?: string;
  web_app?: WebAppInfo;
  login_url?: LoginUrl;
  switch_inline_query?: string;
  switch_inline_query_current_chat?: string;
  callback_game?: CallbackGame;
  pay?: boolean;
}

interface LoginUrl {
  url: string;
  forward_text?: string;
  bot_username?: string;
  request_write_access?: boolean;
}

interface CallbackQuery {
  id: string;
  from: User;
  message?: Message;
  inline_message_id?: string;
  chat_instance: string;
  data?: string;
  game_short_name?: string;
}

interface ForceReply {
  force_reply: boolean;
  input_field_placeholder?: string;
  selective?: boolean;
}

interface ChatPhoto {
  small_file_id: string;
  small_file_unique_id: string;
  big_file_id: string;
  big_file_unique_id: string;
}

interface ChatInviteLink {
  invite_link: string;
  creator: User;
  creates_join_request: boolean;
  is_primary: boolean;
  is_revoked: boolean;
  name?: string;
  expire_date?: number;
  member_limit?: number;
  pending_join_request_count?: number;
}

interface ChatAdministratorRights {
  is_anonymous: boolean;
  can_manage_chat: boolean;
  can_delete_messages: boolean;
  can_manage_video_chats: boolean;
  can_restrict_members: boolean;
  can_promote_members: boolean;
  can_change_info: boolean;
  can_invite_users: boolean;
  can_post_messages: boolean;
  can_edit_messages: boolean;
  can_pin_messages: boolean;
}

type ChatMember =
  | ChatMemberOwner
  | ChatMemberAdministrator
  | ChatMemberMember
  | ChatMemberRestricted
  | ChatMemberLeft
  | ChatMemberBanned;

interface ChatMemberOwner {
  status: string;
  user: User;
  is_anonymous: boolean;
  custom_title?: string;
}

interface ChatMemberAdministrator {
  status: string;
  user: User;
  can_be_edited: boolean;
  is_anonymous: boolean;
  can_manage_chat: boolean;
  can_delete_messages: boolean;
  can_manage_video_chats: boolean;
  can_restrict_members: boolean;
  can_promote_members: boolean;
  can_change_info: boolean;
  can_invite_users: boolean;
  can_post_messages?: boolean;
  can_edit_messages?: boolean;
  can_pin_messages?: boolean;
  custom_title?: string;
}

interface ChatMemberMember {
  status: string;
  user: User;
}

interface ChatMemberRestricted {
  status: string;
  user: User;
  is_member: boolean;
  can_change_info: boolean;
  can_invite_users: boolean;
  can_pin_messages: boolean;
  can_send_messages: boolean;
  can_send_media_messages: boolean;
  can_send_polls: boolean;
  can_send_other_messages: boolean;
  can_add_web_page_previews: boolean;
  until_date: number;
}

interface ChatMemberLeft {
  status: string;
  user: User;
}

interface ChatMemberBanned {
  status: string;
  user: User;
  until_date: number;
}

interface ChatMemberUpdated {
  chat: Chat;
  from: User;
  date: number;
  old_chat_member: ChatMember;
  new_chat_member: ChatMember;
  invite_link?: ChatInviteLink;
}

interface ChatJoinRequest {
  chat: Chat;
  from: User;
  date: number;
  bio?: string;
  invite_link?: ChatInviteLink;
}

interface ChatPermissions {
  can_send_messages?: boolean;
  can_send_media_messages?: boolean;
  can_send_polls?: boolean;
  can_send_other_messages?: boolean;
  can_add_web_page_previews?: boolean;
  can_change_info?: boolean;
  can_invite_users?: boolean;
  can_pin_messages?: boolean;
}

interface ChatLocation {
  location: Location;
  address: string;
}

interface BotCommand {
  command: string;
  description: string;
}

interface BotCommandScopeDefault {
  type: string;
}

interface BotCommandScopeAllPrivateChats {
  type: string;
}

interface BotCommandScopeAllGroupChats {
  type: string;
}

interface BotCommandScopeAllChatAdministrators {
  type: string;
}

interface BotCommandScopeChat {
  type: string;
  chat_id: number | string;
}

interface BotCommandScopeChatAdministrators {
  type: string;
  chat_id: number | string;
}

interface BotCommandScopeChatMember {
  type: string;
  chat_id: number | string;
  user_id: number;
}

interface MenuButtonCommands {
  type: string;
}

interface MenuButtonWebApp {
  type: string;
  text: string;
  web_app: WebAppInfo;
}

interface MenuButtonDefault {
  type: string;
}

interface ResponseParameters {
  migrate_to_chat_id?: number;
  retry_after?: number;
}

interface InputMediaPhoto {
  type: string;
  media: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
}

interface InputMediaVideo {
  type: string;
  media: string;
  thumb?: InputFile | string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  width?: number;
  height?: number;
  duration?: number;
  supports_streaming?: boolean;
}

interface InputMediaAnimation {
  type: string;
  media: string;
  thumb?: InputFile | string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  width?: number;
  height?: number;
  duration?: number;
}

interface InputMediaAudio {
  type: string;
  media: string;
  thumb?: InputFile | string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  duration?: number;
  performer?: string;
  title?: string;
}

interface InputMediaDocument {
  type: string;
  media: string;
  thumb?: InputFile | string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  disable_content_type_detection?: boolean;
}

type InputFile =
  | InputMediaPhoto
  | InputMediaVideo
  | InputMediaAnimation
  | InputMediaAudio
  | InputMediaDocument;

// Sticker

interface Sticker {
  file_id: string;
  file_unique_id: string;
  width: number;
  height: number;
  is_animated: boolean;
  is_video: boolean;
  thumb?: PhotoSize;
  emoji?: string;
  set_name?: string;
  mask_position?: MaskPosition;
  file_size?: number;
}

interface StickerSet {
  name: string;
  title: string;
  is_animated: boolean;
  is_video: boolean;
  contains_masks: boolean;
  stickers: Sticker[];
  thumb?: PhotoSize;
}

interface MaskPosition {
  point: string;
  x_shift: number;
  y_shift: number;
  scale: number;
}

// Inline mode

interface InlineQuery {
  id: string;
  from: User;
  query: string;
  offset: string;
  chat_type?: string;
  location?: Location;
}

type InlineQueryResult =
  | InlineQueryResultCachedAudio
  | InlineQueryResultCachedDocument
  | InlineQueryResultCachedGif
  | InlineQueryResultCachedMpeg4Gif
  | InlineQueryResultCachedPhoto
  | InlineQueryResultCachedSticker
  | InlineQueryResultCachedVideo
  | InlineQueryResultCachedVoice
  | InlineQueryResultArticle
  | InlineQueryResultAudio
  | InlineQueryResultContact
  | InlineQueryResultGame
  | InlineQueryResultDocument
  | InlineQueryResultGif
  | InlineQueryResultLocation
  | InlineQueryResultMpeg4Gif
  | InlineQueryResultPhoto
  | InlineQueryResultVenue
  | InlineQueryResultVideo
  | InlineQueryResultVoice;

interface InlineQueryResultArticle {
  type: string;
  id: string;
  title: string;
  input_message_content: InputMessageContent;
  reply_markup?: InlineKeyboardMarkup;
  url?: string;
  hide_url?: boolean;
  description?: string;
  thumb_url?: string;
  thumb_width?: number;
  thumb_height?: number;
}

interface InlineQueryResultPhoto {
  type: string;
  id: string;
  photo_url: string;
  thumb_url: string;
  photo_width?: number;
  photo_height?: number;
  title?: string;
  description?: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

interface InlineQueryResultGif {
  type: string;
  id: string;
  gif_url: string;
  gif_width?: number;
  gif_height?: number;
  gif_duration?: number;
  thumb_url: string;
  thumb_mime_type?: string;
  title?: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

interface InlineQueryResultMpeg4Gif {
  type: string;
  id: string;
  mpeg4_url: string;
  mpeg4_width?: number;
  mpeg4_height?: number;
  mpeg4_duration?: number;
  thumb_url: string;
  thumb_mime_type?: string;
  title?: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

interface InlineQueryResultVideo {
  type: string;
  id: string;
  video_url: string;
  mime_type: string;
  thumb_url: string;
  title: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  video_width?: number;
  video_height?: number;
  video_duration?: number;
  description?: string;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

interface InlineQueryResultAudio {
  type: string;
  id: string;
  audio_url: string;
  title: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  performer?: string;
  audio_duration?: number;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

interface InlineQueryResultVoice {
  type: string;
  id: string;
  voice_url: string;
  title: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  voice_duration?: number;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

interface InlineQueryResultDocument {
  type: string;
  id: string;
  title: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  document_url: string;
  mime_type: string;
  description?: string;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
  thumb_url?: string;
  thumb_width?: number;
  thumb_height?: number;
}

interface InlineQueryResultLocation {
  type: string;
  id: string;
  latitude: number;
  longitude: number;
  title: string;
  horizontal_accuracy?: number;
  live_period?: number;
  heading?: number;
  proximity_alert_radius?: number;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
  thumb_url?: string;
  thumb_width?: number;
  thumb_height?: number;
}

interface InlineQueryResultVenue {
  type: string;
  id: string;
  latitude: number;
  longitude: number;
  title: string;
  address: string;
  foursquare_id?: string;
  foursquare_type?: string;
  google_place_id?: string;
  google_place_type?: string;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
  thumb_url?: string;
  thumb_width?: number;
  thumb_height?: number;
}

interface InlineQueryResultContact {
  type: string;
  id: string;
  phone_number: string;
  first_name: string;
  last_name?: string;
  vcard?: string;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
  thumb_url?: string;
  thumb_width?: number;
  thumb_height?: number;
}

interface InlineQueryResultGame {
  type: string;
  id: string;
  game_short_name: string;
  reply_markup?: InlineKeyboardMarkup;
}

interface InlineQueryResultCachedPhoto {
  type: string;
  id: string;
  photo_file_id: string;
  title?: string;
  description?: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

interface InlineQueryResultCachedGif {
  type: string;
  id: string;
  gif_file_id: string;
  title?: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

interface InlineQueryResultCachedMpeg4Gif {
  type: string;
  id: string;
  mpeg4_file_id: string;
  title?: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

interface InlineQueryResultCachedSticker {
  type: string;
  id: string;
  sticker_file_id: string;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

interface InlineQueryResultCachedDocument {
  type: string;
  id: string;
  title: string;
  document_file_id: string;
  description?: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

interface InlineQueryResultCachedVideo {
  type: string;
  id: string;
  video_file_id: string;
  title?: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

interface InlineQueryResultCachedVoice {
  type: string;
  id: string;
  voice_file_id: string;
  title?: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

interface InlineQueryResultCachedAudio {
  type: string;
  id: string;
  voice_file_id: string;
  title?: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

type InputMessageContent =
  | InputTextMessageContent
  | InputLocationMessageContent
  | InputVenueMessageContent
  | InputContactMessageContent
  | InputInvoiceMessageContent;

interface InputTextMessageContent {
  message_text: string;
  parse_mode?: string;
  entities?: MessageEntity[];
  disable_web_page_preview?: boolean;
}

interface InputLocationMessageContent {
  latitude: number;
  longitude: number;
  horizontal_accuracy?: number;
  live_period?: number;
  heading?: number;
  proximity_alert_radius?: number;
}

interface InputVenueMessageContent {
  latitude: number;
  longitude: number;
  title: string;
  address: string;
  foursquare_id?: string;
  foursquare_type?: string;
  google_place_id?: string;
  google_place_type?: string;
}

interface InputContactMessageContent {
  phone_number: string;
  first_name: string;
  last_name?: string;
  vcard?: string;
}

interface InputInvoiceMessageContent {
  title: string;
  description: string;
  payload: string;
  provider_token: string;
  currency: string;
  prices: LabeledPrice[];
  max_tip_amount?: number;
  suggested_tip_amounts?: number[];
  provider_data?: string;
  photo_url?: string;
  photo_size?: number;
  photo_width?: number;
  photo_height?: number;
  need_name?: boolean;
  need_phone_number?: boolean;
  need_email?: boolean;
  need_shipping_address?: boolean;
  send_phone_number_to_provider?: boolean;
  send_email_to_provider?: boolean;
  is_flexible?: boolean;
}

interface ChosenInlineResult {
  result_id: string;
  from: User;
  location?: Location;
  inline_message_id?: string;
  query: string;
}

interface SentWebAppMessage {
  inline_message_id?: string;
}

// Payments

interface LabeledPrice {
  label: string;
  amount: number;
}

interface Invoice {
  title: string;
  description: string;
  start_parameter: string;
  currency: string;
  total_amount: number;
}

interface ShippingAddress {
  country_code: string;
  state: string;
  city: string;
  street_line1: string;
  street_line2: string;
  post_code: string;
}

interface OrderInfo {
  name?: string;
  phone_number?: string;
  email?: string;
  shipping_address?: ShippingAddress;
}

interface ShippingOption {
  id: string;
  title: string;
  prices: LabeledPrice[];
}

interface SuccessfulPayment {
  currency: string;
  total_amount: number;
  invoice_payload: string;
  shipping_option_id?: string;
  order_info?: OrderInfo;
  telegram_payment_charge_id: string;
  provider_payment_charge_id: string;
}

interface ShippingQuery {
  id: string;
  from: User;
  invoice_payload: string;
  shipping_address: ShippingAddress;
}

interface PreCheckoutQuery {
  id: string;
  from: User;
  currency: string;
  total_amount: number;
  invoice_payload: string;
  shipping_option_id?: string;
  order_info?: OrderInfo;
}

// Telegram Passport

interface PassportData {
  data: EncryptedPassportElement[];
  credentials: EncryptedCredentials;
}

interface PassportFile {
  file_id: string;
  file_unique_id: string;
  file_size: number;
  file_date: number;
}

interface EncryptedPassportElement {
  type: string;
  data: string;
  phone_number?: string;
  email?: string;
  files?: PassportFile[];
  front_side?: PassportFile;
  reverse_side?: PassportFile;
  selfie?: PassportFile;
  translation?: PassportFile[];
  hash: string;
}

interface EncryptedCredentials {
  data: string;
  hash: string;
  secret: string;
}

type PassportElementError =
  | PassportElementErrorDataField
  | PassportElementErrorFrontSide
  | PassportElementErrorReverseSide
  | PassportElementErrorSelfie
  | PassportElementErrorFile
  | PassportElementErrorFiles
  | PassportElementErrorTranslationFile
  | PassportElementErrorTranslationFiles
  | PassportElementErrorUnspecified;

interface PassportElementErrorDataField {
  source: string;
  type: string;
  field_name: string;
  data_hash: string;
  message: string;
}

interface PassportElementErrorFrontSide {
  source: string;
  type: string;
  field_name: string;
  data_hash: string;
  message: string;
}

interface PassportElementErrorReverseSide {
  source: string;
  type: string;
  field_name: string;
  data_hash: string;
  message: string;
}

interface PassportElementErrorSelfie {
  source: string;
  type: string;
  field_name: string;
  data_hash: string;
  message: string;
}

interface PassportElementErrorFile {
  source: string;
  type: string;
  field_name: string;
  data_hash: string;
  message: string;
}

interface PassportElementErrorFiles {
  source: string;
  type: string;
  field_name: string;
  data_hash: string;
  message: string;
}

interface PassportElementErrorTranslationFile {
  source: string;
  type: string;
  field_name: string;
  data_hash: string;
  message: string;
}

interface PassportElementErrorTranslationFiles {
  source: string;
  type: string;
  field_name: string;
  data_hash: string;
  message: string;
}

interface PassportElementErrorUnspecified {
  source: string;
  type: string;
  field_name: string;
  data_hash: string;
  message: string;
}

// Games

interface Game {
  title: string;
  description: string;
  photo: PhotoSize[];
  text?: string;
  text_entities?: MessageEntity[];
  animation?: Animation;
}

interface CallbackGame { }

interface GameHighScore {
  position: number;
  user: User;
  score: number;
}
