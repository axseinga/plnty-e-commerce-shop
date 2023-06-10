import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Hex: any;
  Json: any;
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  RichTextAST: any;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

export type AssetCreateInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height: InputMaybe<Scalars['Float']>;
  iconCare: InputMaybe<CareCreateManyInlineInput>;
  imagesProduct: InputMaybe<ProductCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType: InputMaybe<Scalars['String']>;
  size: InputMaybe<Scalars['Float']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  width: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height: InputMaybe<Scalars['Float']>;
  mimeType: InputMaybe<Scalars['String']>;
  size: InputMaybe<Scalars['Float']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  width: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create: InputMaybe<AssetCreateInput>;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  documentInStages_every: InputMaybe<AssetWhereStageInput>;
  documentInStages_none: InputMaybe<AssetWhereStageInput>;
  documentInStages_some: InputMaybe<AssetWhereStageInput>;
  iconCare_every: InputMaybe<CareWhereInput>;
  iconCare_none: InputMaybe<CareWhereInput>;
  iconCare_some: InputMaybe<CareWhereInput>;
  id: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>;
  imagesProduct_every: InputMaybe<ProductWhereInput>;
  imagesProduct_none: InputMaybe<ProductWhereInput>;
  imagesProduct_some: InputMaybe<ProductWhereInput>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document: InputMaybe<DocumentTransformationInput>;
  image: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions: InputMaybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  fileName: InputMaybe<Scalars['String']>;
  handle: InputMaybe<Scalars['String']>;
  height: InputMaybe<Scalars['Float']>;
  iconCare: InputMaybe<CareUpdateManyInlineInput>;
  imagesProduct: InputMaybe<ProductUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType: InputMaybe<Scalars['String']>;
  size: InputMaybe<Scalars['Float']>;
  width: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName: InputMaybe<Scalars['String']>;
  handle: InputMaybe<Scalars['String']>;
  height: InputMaybe<Scalars['Float']>;
  mimeType: InputMaybe<Scalars['String']>;
  size: InputMaybe<Scalars['Float']>;
  width: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName: InputMaybe<Scalars['String']>;
  height: InputMaybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType: InputMaybe<Scalars['String']>;
  size: InputMaybe<Scalars['Float']>;
  width: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName: InputMaybe<Scalars['String']>;
  height: InputMaybe<Scalars['Float']>;
  mimeType: InputMaybe<Scalars['String']>;
  size: InputMaybe<Scalars['Float']>;
  width: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect: InputMaybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  documentInStages_every: InputMaybe<AssetWhereStageInput>;
  documentInStages_none: InputMaybe<AssetWhereStageInput>;
  documentInStages_some: InputMaybe<AssetWhereStageInput>;
  fileName: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fileName_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with: InputMaybe<Scalars['String']>;
  handle: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  handle_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with: InputMaybe<Scalars['String']>;
  height: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  height_lt: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  height_not: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  iconCare_every: InputMaybe<CareWhereInput>;
  iconCare_none: InputMaybe<CareWhereInput>;
  iconCare_some: InputMaybe<CareWhereInput>;
  id: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>;
  imagesProduct_every: InputMaybe<ProductWhereInput>;
  imagesProduct_none: InputMaybe<ProductWhereInput>;
  imagesProduct_some: InputMaybe<ProductWhereInput>;
  mimeType: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with: InputMaybe<Scalars['String']>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  size: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  size_lt: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  size_not: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
  width: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  width_lt: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  width_not: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']>;
};

export type CareConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CareWhereUniqueInput;
};

export type CareCreateInput = {
  clg5ackcb025e01tf7zj6fw4s: InputMaybe<ProductCreateManyInlineInput>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  icon: AssetCreateOneInlineInput;
  slug: Scalars['String'];
  title: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
};

export type CareCreateManyInlineInput = {
  /** Connect multiple existing Care documents */
  connect: InputMaybe<Array<CareWhereUniqueInput>>;
  /** Create and connect multiple existing Care documents */
  create: InputMaybe<Array<CareCreateInput>>;
};

export type CareCreateOneInlineInput = {
  /** Connect one existing Care document */
  connect: InputMaybe<CareWhereUniqueInput>;
  /** Create and connect one Care document */
  create: InputMaybe<CareCreateInput>;
};

/** Identifies documents */
export type CareManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<CareWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<CareWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<CareWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  description: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with: InputMaybe<Scalars['String']>;
  documentInStages_every: InputMaybe<CareWhereStageInput>;
  documentInStages_none: InputMaybe<CareWhereStageInput>;
  documentInStages_some: InputMaybe<CareWhereStageInput>;
  icon: InputMaybe<AssetWhereInput>;
  id: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  slug: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with: InputMaybe<Scalars['String']>;
  title: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

export enum CareOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CareUpdateInput = {
  clg5ackcb025e01tf7zj6fw4s: InputMaybe<ProductUpdateManyInlineInput>;
  description: InputMaybe<Scalars['String']>;
  icon: InputMaybe<AssetUpdateOneInlineInput>;
  slug: InputMaybe<Scalars['String']>;
  title: InputMaybe<Scalars['String']>;
};

export type CareUpdateManyInlineInput = {
  /** Connect multiple existing Care documents */
  connect: InputMaybe<Array<CareConnectInput>>;
  /** Create and connect multiple Care documents */
  create: InputMaybe<Array<CareCreateInput>>;
  /** Delete multiple Care documents */
  delete: InputMaybe<Array<CareWhereUniqueInput>>;
  /** Disconnect multiple Care documents */
  disconnect: InputMaybe<Array<CareWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Care documents */
  set: InputMaybe<Array<CareWhereUniqueInput>>;
  /** Update multiple Care documents */
  update: InputMaybe<Array<CareUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Care documents */
  upsert: InputMaybe<Array<CareUpsertWithNestedWhereUniqueInput>>;
};

export type CareUpdateManyInput = {
  description: InputMaybe<Scalars['String']>;
  title: InputMaybe<Scalars['String']>;
};

export type CareUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CareUpdateManyInput;
  /** Document search */
  where: CareWhereInput;
};

export type CareUpdateOneInlineInput = {
  /** Connect existing Care document */
  connect: InputMaybe<CareWhereUniqueInput>;
  /** Create and connect one Care document */
  create: InputMaybe<CareCreateInput>;
  /** Delete currently connected Care document */
  delete: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Care document */
  disconnect: InputMaybe<Scalars['Boolean']>;
  /** Update single Care document */
  update: InputMaybe<CareUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Care document */
  upsert: InputMaybe<CareUpsertWithNestedWhereUniqueInput>;
};

export type CareUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CareUpdateInput;
  /** Unique document search */
  where: CareWhereUniqueInput;
};

export type CareUpsertInput = {
  /** Create document if it didn't exist */
  create: CareCreateInput;
  /** Update document if it exists */
  update: CareUpdateInput;
};

export type CareUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CareUpsertInput;
  /** Unique document search */
  where: CareWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type CareWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type CareWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<CareWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<CareWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<CareWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  description: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with: InputMaybe<Scalars['String']>;
  documentInStages_every: InputMaybe<CareWhereStageInput>;
  documentInStages_none: InputMaybe<CareWhereStageInput>;
  documentInStages_some: InputMaybe<CareWhereStageInput>;
  icon: InputMaybe<AssetWhereInput>;
  id: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  slug: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with: InputMaybe<Scalars['String']>;
  title: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type CareWhereStageInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<CareWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<CareWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<CareWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent: InputMaybe<CareWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage: InputMaybe<Stage>;
};

/** References Care record uniquely */
export type CareWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']>;
  slug: InputMaybe<Scalars['String']>;
};

export type CategoryConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations: InputMaybe<CategoryCreateLocalizationsInput>;
  products: InputMaybe<ProductCreateManyInlineInput>;
  /** slug input for default locale (en) */
  slug: Scalars['String'];
  /** title input for default locale (en) */
  title: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
};

export type CategoryCreateLocalizationDataInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
};

export type CategoryCreateLocalizationInput = {
  /** Localization input */
  data: CategoryCreateLocalizationDataInput;
  locale: Locale;
};

export type CategoryCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create: InputMaybe<Array<CategoryCreateLocalizationInput>>;
};

export type CategoryCreateManyInlineInput = {
  /** Connect multiple existing Category documents */
  connect: InputMaybe<Array<CategoryWhereUniqueInput>>;
  /** Create and connect multiple existing Category documents */
  create: InputMaybe<Array<CategoryCreateInput>>;
};

export type CategoryCreateOneInlineInput = {
  /** Connect one existing Category document */
  connect: InputMaybe<CategoryWhereUniqueInput>;
  /** Create and connect one Category document */
  create: InputMaybe<CategoryCreateInput>;
};

/** Identifies documents */
export type CategoryManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<CategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<CategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<CategoryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  documentInStages_every: InputMaybe<CategoryWhereStageInput>;
  documentInStages_none: InputMaybe<CategoryWhereStageInput>;
  documentInStages_some: InputMaybe<CategoryWhereStageInput>;
  id: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>;
  products_every: InputMaybe<ProductWhereInput>;
  products_none: InputMaybe<ProductWhereInput>;
  products_some: InputMaybe<ProductWhereInput>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

export enum CategoryOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CategoryUpdateInput = {
  /** Manage document localizations */
  localizations: InputMaybe<CategoryUpdateLocalizationsInput>;
  products: InputMaybe<ProductUpdateManyInlineInput>;
  /** slug input for default locale (en) */
  slug: InputMaybe<Scalars['String']>;
  /** title input for default locale (en) */
  title: InputMaybe<Scalars['String']>;
};

export type CategoryUpdateLocalizationDataInput = {
  slug: InputMaybe<Scalars['String']>;
  title: InputMaybe<Scalars['String']>;
};

export type CategoryUpdateLocalizationInput = {
  data: CategoryUpdateLocalizationDataInput;
  locale: Locale;
};

export type CategoryUpdateLocalizationsInput = {
  /** Localizations to create */
  create: InputMaybe<Array<CategoryCreateLocalizationInput>>;
  /** Localizations to delete */
  delete: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update: InputMaybe<Array<CategoryUpdateLocalizationInput>>;
  upsert: InputMaybe<Array<CategoryUpsertLocalizationInput>>;
};

export type CategoryUpdateManyInlineInput = {
  /** Connect multiple existing Category documents */
  connect: InputMaybe<Array<CategoryConnectInput>>;
  /** Create and connect multiple Category documents */
  create: InputMaybe<Array<CategoryCreateInput>>;
  /** Delete multiple Category documents */
  delete: InputMaybe<Array<CategoryWhereUniqueInput>>;
  /** Disconnect multiple Category documents */
  disconnect: InputMaybe<Array<CategoryWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Category documents */
  set: InputMaybe<Array<CategoryWhereUniqueInput>>;
  /** Update multiple Category documents */
  update: InputMaybe<Array<CategoryUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Category documents */
  upsert: InputMaybe<Array<CategoryUpsertWithNestedWhereUniqueInput>>;
};

export type CategoryUpdateManyInput = {
  /** Optional updates to localizations */
  localizations: InputMaybe<CategoryUpdateManyLocalizationsInput>;
  /** title input for default locale (en) */
  title: InputMaybe<Scalars['String']>;
};

export type CategoryUpdateManyLocalizationDataInput = {
  title: InputMaybe<Scalars['String']>;
};

export type CategoryUpdateManyLocalizationInput = {
  data: CategoryUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type CategoryUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update: InputMaybe<Array<CategoryUpdateManyLocalizationInput>>;
};

export type CategoryUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CategoryUpdateManyInput;
  /** Document search */
  where: CategoryWhereInput;
};

export type CategoryUpdateOneInlineInput = {
  /** Connect existing Category document */
  connect: InputMaybe<CategoryWhereUniqueInput>;
  /** Create and connect one Category document */
  create: InputMaybe<CategoryCreateInput>;
  /** Delete currently connected Category document */
  delete: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Category document */
  disconnect: InputMaybe<Scalars['Boolean']>;
  /** Update single Category document */
  update: InputMaybe<CategoryUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Category document */
  upsert: InputMaybe<CategoryUpsertWithNestedWhereUniqueInput>;
};

export type CategoryUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CategoryUpdateInput;
  /** Unique document search */
  where: CategoryWhereUniqueInput;
};

export type CategoryUpsertInput = {
  /** Create document if it didn't exist */
  create: CategoryCreateInput;
  /** Update document if it exists */
  update: CategoryUpdateInput;
};

export type CategoryUpsertLocalizationInput = {
  create: CategoryCreateLocalizationDataInput;
  locale: Locale;
  update: CategoryUpdateLocalizationDataInput;
};

export type CategoryUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CategoryUpsertInput;
  /** Unique document search */
  where: CategoryWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type CategoryWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type CategoryWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<CategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<CategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<CategoryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  documentInStages_every: InputMaybe<CategoryWhereStageInput>;
  documentInStages_none: InputMaybe<CategoryWhereStageInput>;
  documentInStages_some: InputMaybe<CategoryWhereStageInput>;
  id: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>;
  products_every: InputMaybe<ProductWhereInput>;
  products_none: InputMaybe<ProductWhereInput>;
  products_some: InputMaybe<ProductWhereInput>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  slug: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with: InputMaybe<Scalars['String']>;
  title: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type CategoryWhereStageInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<CategoryWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<CategoryWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<CategoryWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent: InputMaybe<CategoryWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage: InputMaybe<Stage>;
};

/** References Category record uniquely */
export type CategoryWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']>;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex: InputMaybe<Scalars['Hex']>;
  rgba: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after: InputMaybe<Scalars['ID']>;
  /** Connect document before specified document */
  before: InputMaybe<Scalars['ID']>;
  /** Connect document at last position */
  end: InputMaybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start: InputMaybe<Scalars['Boolean']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output: InputMaybe<DocumentOutputInput>;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height: InputMaybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width: InputMaybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize: InputMaybe<ImageResizeInput>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type PersonConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PersonWhereUniqueInput;
};

export type PersonCreateInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  name: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  products: InputMaybe<ProductCreateManyInlineInput>;
  reviews: InputMaybe<ReviewCreateManyInlineInput>;
  surname: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
};

export type PersonCreateManyInlineInput = {
  /** Connect multiple existing Person documents */
  connect: InputMaybe<Array<PersonWhereUniqueInput>>;
  /** Create and connect multiple existing Person documents */
  create: InputMaybe<Array<PersonCreateInput>>;
};

export type PersonCreateOneInlineInput = {
  /** Connect one existing Person document */
  connect: InputMaybe<PersonWhereUniqueInput>;
  /** Create and connect one Person document */
  create: InputMaybe<PersonCreateInput>;
};

/** Identifies documents */
export type PersonManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<PersonWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<PersonWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<PersonWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  documentInStages_every: InputMaybe<PersonWhereStageInput>;
  documentInStages_none: InputMaybe<PersonWhereStageInput>;
  documentInStages_some: InputMaybe<PersonWhereStageInput>;
  email: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>;
  name: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with: InputMaybe<Scalars['String']>;
  password: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  password_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  password_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  password_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  password_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  password_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  password_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  password_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  password_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  password_starts_with: InputMaybe<Scalars['String']>;
  products_every: InputMaybe<ProductWhereInput>;
  products_none: InputMaybe<ProductWhereInput>;
  products_some: InputMaybe<ProductWhereInput>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  reviews_every: InputMaybe<ReviewWhereInput>;
  reviews_none: InputMaybe<ReviewWhereInput>;
  reviews_some: InputMaybe<ReviewWhereInput>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  surname: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  surname_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  surname_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  surname_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  surname_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  surname_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  surname_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  surname_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  surname_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  surname_starts_with: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

export enum PersonOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PasswordAsc = 'password_ASC',
  PasswordDesc = 'password_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SurnameAsc = 'surname_ASC',
  SurnameDesc = 'surname_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PersonUpdateInput = {
  email: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  password: InputMaybe<Scalars['String']>;
  products: InputMaybe<ProductUpdateManyInlineInput>;
  reviews: InputMaybe<ReviewUpdateManyInlineInput>;
  surname: InputMaybe<Scalars['String']>;
};

export type PersonUpdateManyInlineInput = {
  /** Connect multiple existing Person documents */
  connect: InputMaybe<Array<PersonConnectInput>>;
  /** Create and connect multiple Person documents */
  create: InputMaybe<Array<PersonCreateInput>>;
  /** Delete multiple Person documents */
  delete: InputMaybe<Array<PersonWhereUniqueInput>>;
  /** Disconnect multiple Person documents */
  disconnect: InputMaybe<Array<PersonWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Person documents */
  set: InputMaybe<Array<PersonWhereUniqueInput>>;
  /** Update multiple Person documents */
  update: InputMaybe<Array<PersonUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Person documents */
  upsert: InputMaybe<Array<PersonUpsertWithNestedWhereUniqueInput>>;
};

export type PersonUpdateManyInput = {
  name: InputMaybe<Scalars['String']>;
  password: InputMaybe<Scalars['String']>;
  surname: InputMaybe<Scalars['String']>;
};

export type PersonUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PersonUpdateManyInput;
  /** Document search */
  where: PersonWhereInput;
};

export type PersonUpdateOneInlineInput = {
  /** Connect existing Person document */
  connect: InputMaybe<PersonWhereUniqueInput>;
  /** Create and connect one Person document */
  create: InputMaybe<PersonCreateInput>;
  /** Delete currently connected Person document */
  delete: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Person document */
  disconnect: InputMaybe<Scalars['Boolean']>;
  /** Update single Person document */
  update: InputMaybe<PersonUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Person document */
  upsert: InputMaybe<PersonUpsertWithNestedWhereUniqueInput>;
};

export type PersonUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PersonUpdateInput;
  /** Unique document search */
  where: PersonWhereUniqueInput;
};

export type PersonUpsertInput = {
  /** Create document if it didn't exist */
  create: PersonCreateInput;
  /** Update document if it exists */
  update: PersonUpdateInput;
};

export type PersonUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PersonUpsertInput;
  /** Unique document search */
  where: PersonWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PersonWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type PersonWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<PersonWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<PersonWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<PersonWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  documentInStages_every: InputMaybe<PersonWhereStageInput>;
  documentInStages_none: InputMaybe<PersonWhereStageInput>;
  documentInStages_some: InputMaybe<PersonWhereStageInput>;
  email: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>;
  name: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with: InputMaybe<Scalars['String']>;
  password: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  password_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  password_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  password_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  password_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  password_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  password_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  password_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  password_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  password_starts_with: InputMaybe<Scalars['String']>;
  products_every: InputMaybe<ProductWhereInput>;
  products_none: InputMaybe<ProductWhereInput>;
  products_some: InputMaybe<ProductWhereInput>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  reviews_every: InputMaybe<ReviewWhereInput>;
  reviews_none: InputMaybe<ReviewWhereInput>;
  reviews_some: InputMaybe<ReviewWhereInput>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  surname: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  surname_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  surname_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  surname_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  surname_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  surname_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  surname_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  surname_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  surname_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  surname_starts_with: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PersonWhereStageInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<PersonWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<PersonWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<PersonWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent: InputMaybe<PersonWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage: InputMaybe<Stage>;
};

/** References Person record uniquely */
export type PersonWhereUniqueInput = {
  email: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
};

export type ProductConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProductWhereUniqueInput;
};

export type ProductCreateInput = {
  cares: InputMaybe<CareCreateManyInlineInput>;
  categories: InputMaybe<CategoryCreateManyInlineInput>;
  clioofguk0e6o01ul07m8gcu4: InputMaybe<PersonCreateManyInlineInput>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  images: AssetCreateManyInlineInput;
  longDescription: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  reviewCount: Scalars['Int'];
  reviewScore: Scalars['Int'];
  reviews: InputMaybe<ReviewCreateManyInlineInput>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
};

export type ProductCreateManyInlineInput = {
  /** Connect multiple existing Product documents */
  connect: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Create and connect multiple existing Product documents */
  create: InputMaybe<Array<ProductCreateInput>>;
};

export type ProductCreateOneInlineInput = {
  /** Connect one existing Product document */
  connect: InputMaybe<ProductWhereUniqueInput>;
  /** Create and connect one Product document */
  create: InputMaybe<ProductCreateInput>;
};

/** Identifies documents */
export type ProductManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<ProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<ProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<ProductWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>;
  cares_every: InputMaybe<CareWhereInput>;
  cares_none: InputMaybe<CareWhereInput>;
  cares_some: InputMaybe<CareWhereInput>;
  categories_every: InputMaybe<CategoryWhereInput>;
  categories_none: InputMaybe<CategoryWhereInput>;
  categories_some: InputMaybe<CategoryWhereInput>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  description: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with: InputMaybe<Scalars['String']>;
  documentInStages_every: InputMaybe<ProductWhereStageInput>;
  documentInStages_none: InputMaybe<ProductWhereStageInput>;
  documentInStages_some: InputMaybe<ProductWhereStageInput>;
  id: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>;
  images_every: InputMaybe<AssetWhereInput>;
  images_none: InputMaybe<AssetWhereInput>;
  images_some: InputMaybe<AssetWhereInput>;
  longDescription: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  longDescription_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  longDescription_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  longDescription_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  longDescription_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  longDescription_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  longDescription_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  longDescription_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  longDescription_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  longDescription_starts_with: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with: InputMaybe<Scalars['String']>;
  price: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  price_gt: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  price_gte: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  price_in: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  price_lt: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  price_lte: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  price_not: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  price_not_in: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  reviewCount: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  reviewCount_gt: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  reviewCount_gte: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  reviewCount_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  reviewCount_lt: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  reviewCount_lte: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  reviewCount_not: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  reviewCount_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  reviewScore: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  reviewScore_gt: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  reviewScore_gte: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  reviewScore_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  reviewScore_lt: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  reviewScore_lte: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  reviewScore_not: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  reviewScore_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  reviews_every: InputMaybe<ReviewWhereInput>;
  reviews_none: InputMaybe<ReviewWhereInput>;
  reviews_some: InputMaybe<ReviewWhereInput>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  slug: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with: InputMaybe<Scalars['String']>;
  title: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

export enum ProductOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LongDescriptionAsc = 'longDescription_ASC',
  LongDescriptionDesc = 'longDescription_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReviewCountAsc = 'reviewCount_ASC',
  ReviewCountDesc = 'reviewCount_DESC',
  ReviewScoreAsc = 'reviewScore_ASC',
  ReviewScoreDesc = 'reviewScore_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ProductUpdateInput = {
  cares: InputMaybe<CareUpdateManyInlineInput>;
  categories: InputMaybe<CategoryUpdateManyInlineInput>;
  clioofguk0e6o01ul07m8gcu4: InputMaybe<PersonUpdateManyInlineInput>;
  description: InputMaybe<Scalars['String']>;
  images: InputMaybe<AssetUpdateManyInlineInput>;
  longDescription: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  price: InputMaybe<Scalars['Float']>;
  reviewCount: InputMaybe<Scalars['Int']>;
  reviewScore: InputMaybe<Scalars['Int']>;
  reviews: InputMaybe<ReviewUpdateManyInlineInput>;
  slug: InputMaybe<Scalars['String']>;
  title: InputMaybe<Scalars['String']>;
};

export type ProductUpdateManyInlineInput = {
  /** Connect multiple existing Product documents */
  connect: InputMaybe<Array<ProductConnectInput>>;
  /** Create and connect multiple Product documents */
  create: InputMaybe<Array<ProductCreateInput>>;
  /** Delete multiple Product documents */
  delete: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Disconnect multiple Product documents */
  disconnect: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Product documents */
  set: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Update multiple Product documents */
  update: InputMaybe<Array<ProductUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Product documents */
  upsert: InputMaybe<Array<ProductUpsertWithNestedWhereUniqueInput>>;
};

export type ProductUpdateManyInput = {
  description: InputMaybe<Scalars['String']>;
  longDescription: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  price: InputMaybe<Scalars['Float']>;
  reviewCount: InputMaybe<Scalars['Int']>;
  reviewScore: InputMaybe<Scalars['Int']>;
  title: InputMaybe<Scalars['String']>;
};

export type ProductUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProductUpdateManyInput;
  /** Document search */
  where: ProductWhereInput;
};

export type ProductUpdateOneInlineInput = {
  /** Connect existing Product document */
  connect: InputMaybe<ProductWhereUniqueInput>;
  /** Create and connect one Product document */
  create: InputMaybe<ProductCreateInput>;
  /** Delete currently connected Product document */
  delete: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Product document */
  disconnect: InputMaybe<Scalars['Boolean']>;
  /** Update single Product document */
  update: InputMaybe<ProductUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Product document */
  upsert: InputMaybe<ProductUpsertWithNestedWhereUniqueInput>;
};

export type ProductUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProductUpdateInput;
  /** Unique document search */
  where: ProductWhereUniqueInput;
};

export type ProductUpsertInput = {
  /** Create document if it didn't exist */
  create: ProductCreateInput;
  /** Update document if it exists */
  update: ProductUpdateInput;
};

export type ProductUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProductUpsertInput;
  /** Unique document search */
  where: ProductWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ProductWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ProductWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<ProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<ProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<ProductWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>;
  cares_every: InputMaybe<CareWhereInput>;
  cares_none: InputMaybe<CareWhereInput>;
  cares_some: InputMaybe<CareWhereInput>;
  categories_every: InputMaybe<CategoryWhereInput>;
  categories_none: InputMaybe<CategoryWhereInput>;
  categories_some: InputMaybe<CategoryWhereInput>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  description: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with: InputMaybe<Scalars['String']>;
  documentInStages_every: InputMaybe<ProductWhereStageInput>;
  documentInStages_none: InputMaybe<ProductWhereStageInput>;
  documentInStages_some: InputMaybe<ProductWhereStageInput>;
  id: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>;
  images_every: InputMaybe<AssetWhereInput>;
  images_none: InputMaybe<AssetWhereInput>;
  images_some: InputMaybe<AssetWhereInput>;
  longDescription: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  longDescription_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  longDescription_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  longDescription_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  longDescription_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  longDescription_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  longDescription_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  longDescription_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  longDescription_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  longDescription_starts_with: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with: InputMaybe<Scalars['String']>;
  price: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  price_gt: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  price_gte: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  price_in: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  price_lt: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  price_lte: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  price_not: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  price_not_in: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  reviewCount: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  reviewCount_gt: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  reviewCount_gte: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  reviewCount_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  reviewCount_lt: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  reviewCount_lte: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  reviewCount_not: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  reviewCount_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  reviewScore: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  reviewScore_gt: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  reviewScore_gte: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  reviewScore_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  reviewScore_lt: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  reviewScore_lte: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  reviewScore_not: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  reviewScore_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  reviews_every: InputMaybe<ReviewWhereInput>;
  reviews_none: InputMaybe<ReviewWhereInput>;
  reviews_some: InputMaybe<ReviewWhereInput>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  slug: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with: InputMaybe<Scalars['String']>;
  title: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ProductWhereStageInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<ProductWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<ProductWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<ProductWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent: InputMaybe<ProductWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage: InputMaybe<Stage>;
};

/** References Product record uniquely */
export type ProductWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']>;
  slug: InputMaybe<Scalars['String']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

export type ReviewConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ReviewWhereUniqueInput;
};

export type ReviewCreateInput = {
  author: InputMaybe<Scalars['String']>;
  clanyiohv48rw01tc3dn6dpdc: InputMaybe<ProductCreateManyInlineInput>;
  clioofwpr0fqo01upabvg9oab: InputMaybe<PersonCreateManyInlineInput>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  rating: Scalars['Float'];
  review: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
};

export type ReviewCreateManyInlineInput = {
  /** Connect multiple existing Review documents */
  connect: InputMaybe<Array<ReviewWhereUniqueInput>>;
  /** Create and connect multiple existing Review documents */
  create: InputMaybe<Array<ReviewCreateInput>>;
};

export type ReviewCreateOneInlineInput = {
  /** Connect one existing Review document */
  connect: InputMaybe<ReviewWhereUniqueInput>;
  /** Create and connect one Review document */
  create: InputMaybe<ReviewCreateInput>;
};

/** Identifies documents */
export type ReviewManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<ReviewWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<ReviewWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<ReviewWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>;
  author: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  author_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  author_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  author_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  author_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  author_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  author_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  author_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  author_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  author_starts_with: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  documentInStages_every: InputMaybe<ReviewWhereStageInput>;
  documentInStages_none: InputMaybe<ReviewWhereStageInput>;
  documentInStages_some: InputMaybe<ReviewWhereStageInput>;
  email: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  rating: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  rating_gt: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  rating_gte: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  rating_in: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  rating_lt: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  rating_lte: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  rating_not: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  rating_not_in: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  review: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  review_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  review_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  review_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  review_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  review_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  review_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  review_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  review_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  review_starts_with: InputMaybe<Scalars['String']>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

export enum ReviewOrderByInput {
  AuthorAsc = 'author_ASC',
  AuthorDesc = 'author_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  RatingAsc = 'rating_ASC',
  RatingDesc = 'rating_DESC',
  ReviewAsc = 'review_ASC',
  ReviewDesc = 'review_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ReviewUpdateInput = {
  author: InputMaybe<Scalars['String']>;
  clanyiohv48rw01tc3dn6dpdc: InputMaybe<ProductUpdateManyInlineInput>;
  clioofwpr0fqo01upabvg9oab: InputMaybe<PersonUpdateManyInlineInput>;
  email: InputMaybe<Scalars['String']>;
  rating: InputMaybe<Scalars['Float']>;
  review: InputMaybe<Scalars['String']>;
};

export type ReviewUpdateManyInlineInput = {
  /** Connect multiple existing Review documents */
  connect: InputMaybe<Array<ReviewConnectInput>>;
  /** Create and connect multiple Review documents */
  create: InputMaybe<Array<ReviewCreateInput>>;
  /** Delete multiple Review documents */
  delete: InputMaybe<Array<ReviewWhereUniqueInput>>;
  /** Disconnect multiple Review documents */
  disconnect: InputMaybe<Array<ReviewWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Review documents */
  set: InputMaybe<Array<ReviewWhereUniqueInput>>;
  /** Update multiple Review documents */
  update: InputMaybe<Array<ReviewUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Review documents */
  upsert: InputMaybe<Array<ReviewUpsertWithNestedWhereUniqueInput>>;
};

export type ReviewUpdateManyInput = {
  author: InputMaybe<Scalars['String']>;
  email: InputMaybe<Scalars['String']>;
  rating: InputMaybe<Scalars['Float']>;
  review: InputMaybe<Scalars['String']>;
};

export type ReviewUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ReviewUpdateManyInput;
  /** Document search */
  where: ReviewWhereInput;
};

export type ReviewUpdateOneInlineInput = {
  /** Connect existing Review document */
  connect: InputMaybe<ReviewWhereUniqueInput>;
  /** Create and connect one Review document */
  create: InputMaybe<ReviewCreateInput>;
  /** Delete currently connected Review document */
  delete: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Review document */
  disconnect: InputMaybe<Scalars['Boolean']>;
  /** Update single Review document */
  update: InputMaybe<ReviewUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Review document */
  upsert: InputMaybe<ReviewUpsertWithNestedWhereUniqueInput>;
};

export type ReviewUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ReviewUpdateInput;
  /** Unique document search */
  where: ReviewWhereUniqueInput;
};

export type ReviewUpsertInput = {
  /** Create document if it didn't exist */
  create: ReviewCreateInput;
  /** Update document if it exists */
  update: ReviewUpdateInput;
};

export type ReviewUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ReviewUpsertInput;
  /** Unique document search */
  where: ReviewWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ReviewWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ReviewWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<ReviewWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<ReviewWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<ReviewWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>;
  author: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  author_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  author_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  author_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  author_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  author_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  author_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  author_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  author_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  author_starts_with: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  documentInStages_every: InputMaybe<ReviewWhereStageInput>;
  documentInStages_none: InputMaybe<ReviewWhereStageInput>;
  documentInStages_some: InputMaybe<ReviewWhereStageInput>;
  email: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  rating: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  rating_gt: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  rating_gte: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  rating_in: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  rating_lt: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  rating_lte: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  rating_not: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  rating_not_in: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  review: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  review_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  review_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  review_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  review_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  review_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  review_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  review_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  review_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  review_starts_with: InputMaybe<Scalars['String']>;
  scheduledIn_every: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ReviewWhereStageInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<ReviewWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<ReviewWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<ReviewWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent: InputMaybe<ReviewWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage: InputMaybe<Stage>;
};

/** References Review record uniquely */
export type ReviewWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']>;
};

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  description: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with: InputMaybe<Scalars['String']>;
  errorMessage: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists: InputMaybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive: InputMaybe<Scalars['Json']>;
  release: InputMaybe<ScheduledReleaseWhereInput>;
  status: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  description: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with: InputMaybe<Scalars['String']>;
  errorMessage: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists: InputMaybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive: InputMaybe<Scalars['Json']>;
  release: InputMaybe<ScheduledReleaseWhereInput>;
  status: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseCreateInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  description: InputMaybe<Scalars['String']>;
  errorMessage: InputMaybe<Scalars['String']>;
  isActive: InputMaybe<Scalars['Boolean']>;
  releaseAt: InputMaybe<Scalars['DateTime']>;
  title: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create: InputMaybe<ScheduledReleaseCreateInput>;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  description: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with: InputMaybe<Scalars['String']>;
  errorMessage: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>;
  isActive: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not: InputMaybe<Scalars['Boolean']>;
  isImplicit: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not: InputMaybe<Scalars['Boolean']>;
  operations_every: InputMaybe<ScheduledOperationWhereInput>;
  operations_none: InputMaybe<ScheduledOperationWhereInput>;
  operations_some: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  releaseAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description: InputMaybe<Scalars['String']>;
  errorMessage: InputMaybe<Scalars['String']>;
  isActive: InputMaybe<Scalars['Boolean']>;
  releaseAt: InputMaybe<Scalars['DateTime']>;
  title: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description: InputMaybe<Scalars['String']>;
  errorMessage: InputMaybe<Scalars['String']>;
  isActive: InputMaybe<Scalars['Boolean']>;
  releaseAt: InputMaybe<Scalars['DateTime']>;
  title: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect: InputMaybe<Scalars['Boolean']>;
  /** Update single ScheduledRelease document */
  update: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy: InputMaybe<UserWhereInput>;
  description: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with: InputMaybe<Scalars['String']>;
  errorMessage: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>;
  isActive: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not: InputMaybe<Scalars['Boolean']>;
  isImplicit: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not: InputMaybe<Scalars['Boolean']>;
  operations_every: InputMaybe<ScheduledOperationWhereInput>;
  operations_none: InputMaybe<ScheduledOperationWhereInput>;
  operations_some: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy: InputMaybe<UserWhereInput>;
  releaseAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect: InputMaybe<UserWhereUniqueInput>;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  documentInStages_every: InputMaybe<UserWhereStageInput>;
  documentInStages_none: InputMaybe<UserWhereStageInput>;
  documentInStages_some: InputMaybe<UserWhereStageInput>;
  id: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>;
  isActive: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not: InputMaybe<Scalars['Boolean']>;
  kind: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in: InputMaybe<Array<InputMaybe<UserKind>>>;
  name: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with: InputMaybe<Scalars['String']>;
  picture: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with: InputMaybe<Scalars['String']>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect: InputMaybe<Scalars['Boolean']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  documentInStages_every: InputMaybe<UserWhereStageInput>;
  documentInStages_none: InputMaybe<UserWhereStageInput>;
  documentInStages_some: InputMaybe<UserWhereStageInput>;
  id: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: InputMaybe<Scalars['ID']>;
  isActive: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not: InputMaybe<Scalars['Boolean']>;
  kind: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in: InputMaybe<Array<InputMaybe<UserKind>>>;
  name: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with: InputMaybe<Scalars['String']>;
  picture: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with: InputMaybe<Scalars['String']>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id: InputMaybe<Scalars['ID']>;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  JsonPathExists = 'json_path_exists',
  JsonValueRecursive = 'json_value_recursive',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
  UnionEmpty = 'union_empty',
  UnionEvery = 'union_every',
  UnionNone = 'union_none',
  UnionSingle = 'union_single',
  UnionSome = 'union_some'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type CreateAccountMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateAccountMutation = { __typename?: 'Mutation', createPerson: { __typename?: 'Person', id: string } | null };

export type GetAccountByEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type GetAccountByEmailQuery = { __typename?: 'Query', person: { __typename?: 'Person', id: string, email: string, password: string } | null };

export type GetAccountDetailsByEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type GetAccountDetailsByEmailQuery = { __typename?: 'Query', person: { __typename?: 'Person', id: string, email: string, name: string | null, products: Array<{ __typename?: 'Product', id: string, slug: string, title: string, name: string, price: number, reviewScore: number, images: Array<{ __typename?: 'Asset', url: string, width: number | null, height: number | null }> }> } | null };

export type GetAllProductsListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllProductsListQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: string, slug: string, title: string, name: string, price: number, reviewScore: number, images: Array<{ __typename?: 'Asset', url: string, width: number | null, height: number | null }> }> };

export type GetFilteredProductsListQueryVariables = Exact<{
  filters: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type GetFilteredProductsListQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: string, slug: string, title: string, name: string, price: number, reviewScore: number, images: Array<{ __typename?: 'Asset', url: string, width: number | null, height: number | null }> }> };

export type GetHomePageQueryVariables = Exact<{
  carouselNewfilters: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type GetHomePageQuery = { __typename?: 'Query', carouselNew: Array<{ __typename?: 'Product', id: string, slug: string, title: string, name: string, price: number, reviewScore: number, images: Array<{ __typename?: 'Asset', url: string, width: number | null, height: number | null }> }> };

export type GetProductDetailsBySlugQueryVariables = Exact<{
  slug: InputMaybe<Scalars['String']>;
}>;


export type GetProductDetailsBySlugQuery = { __typename?: 'Query', product: { __typename?: 'Product', id: string, slug: string, title: string, name: string, price: number, reviewScore: number, description: string, longDescription: string, images: Array<{ __typename?: 'Asset', url: string, height: number | null, width: number | null }>, categories: Array<{ __typename?: 'Category', title: string }>, cares: Array<{ __typename?: 'Care', title: string | null, description: string, icon: { __typename?: 'Asset', url: string, width: number | null, height: number | null } }> } | null };

export type GetProductsSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsSlugsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', slug: string }> };


export const CreateAccountDocument = gql`
    mutation CreateAccount($email: String!, $password: String!) {
  createPerson(data: {email: $email, password: $password}) {
    id
  }
}
    `;
export type CreateAccountMutationFn = Apollo.MutationFunction<CreateAccountMutation, CreateAccountMutationVariables>;

/**
 * __useCreateAccountMutation__
 *
 * To run a mutation, you first call `useCreateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountMutation, { data, loading, error }] = useCreateAccountMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateAccountMutation(baseOptions?: Apollo.MutationHookOptions<CreateAccountMutation, CreateAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAccountMutation, CreateAccountMutationVariables>(CreateAccountDocument, options);
      }
export type CreateAccountMutationHookResult = ReturnType<typeof useCreateAccountMutation>;
export type CreateAccountMutationResult = Apollo.MutationResult<CreateAccountMutation>;
export type CreateAccountMutationOptions = Apollo.BaseMutationOptions<CreateAccountMutation, CreateAccountMutationVariables>;
export const GetAccountByEmailDocument = gql`
    query getAccountByEmail($email: String!) {
  person(where: {email: $email}) {
    id
    email
    password
  }
}
    `;

/**
 * __useGetAccountByEmailQuery__
 *
 * To run a query within a React component, call `useGetAccountByEmailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAccountByEmailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAccountByEmailQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetAccountByEmailQuery(baseOptions: Apollo.QueryHookOptions<GetAccountByEmailQuery, GetAccountByEmailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAccountByEmailQuery, GetAccountByEmailQueryVariables>(GetAccountByEmailDocument, options);
      }
export function useGetAccountByEmailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAccountByEmailQuery, GetAccountByEmailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAccountByEmailQuery, GetAccountByEmailQueryVariables>(GetAccountByEmailDocument, options);
        }
export type GetAccountByEmailQueryHookResult = ReturnType<typeof useGetAccountByEmailQuery>;
export type GetAccountByEmailLazyQueryHookResult = ReturnType<typeof useGetAccountByEmailLazyQuery>;
export type GetAccountByEmailQueryResult = Apollo.QueryResult<GetAccountByEmailQuery, GetAccountByEmailQueryVariables>;
export const GetAccountDetailsByEmailDocument = gql`
    query getAccountDetailsByEmail($email: String!) {
  person(where: {email: $email}) {
    id
    email
    name
    products {
      id
      slug
      title
      name
      price
      reviewScore
      images(first: 1) {
        url
        width
        height
      }
    }
  }
}
    `;

/**
 * __useGetAccountDetailsByEmailQuery__
 *
 * To run a query within a React component, call `useGetAccountDetailsByEmailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAccountDetailsByEmailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAccountDetailsByEmailQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetAccountDetailsByEmailQuery(baseOptions: Apollo.QueryHookOptions<GetAccountDetailsByEmailQuery, GetAccountDetailsByEmailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAccountDetailsByEmailQuery, GetAccountDetailsByEmailQueryVariables>(GetAccountDetailsByEmailDocument, options);
      }
export function useGetAccountDetailsByEmailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAccountDetailsByEmailQuery, GetAccountDetailsByEmailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAccountDetailsByEmailQuery, GetAccountDetailsByEmailQueryVariables>(GetAccountDetailsByEmailDocument, options);
        }
export type GetAccountDetailsByEmailQueryHookResult = ReturnType<typeof useGetAccountDetailsByEmailQuery>;
export type GetAccountDetailsByEmailLazyQueryHookResult = ReturnType<typeof useGetAccountDetailsByEmailLazyQuery>;
export type GetAccountDetailsByEmailQueryResult = Apollo.QueryResult<GetAccountDetailsByEmailQuery, GetAccountDetailsByEmailQueryVariables>;
export const GetAllProductsListDocument = gql`
    query GetAllProductsList {
  products(first: 100) {
    id
    slug
    title
    name
    price
    reviewScore
    images(first: 1) {
      url
      width
      height
    }
  }
}
    `;

/**
 * __useGetAllProductsListQuery__
 *
 * To run a query within a React component, call `useGetAllProductsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProductsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProductsListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllProductsListQuery(baseOptions?: Apollo.QueryHookOptions<GetAllProductsListQuery, GetAllProductsListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllProductsListQuery, GetAllProductsListQueryVariables>(GetAllProductsListDocument, options);
      }
export function useGetAllProductsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllProductsListQuery, GetAllProductsListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllProductsListQuery, GetAllProductsListQueryVariables>(GetAllProductsListDocument, options);
        }
export type GetAllProductsListQueryHookResult = ReturnType<typeof useGetAllProductsListQuery>;
export type GetAllProductsListLazyQueryHookResult = ReturnType<typeof useGetAllProductsListLazyQuery>;
export type GetAllProductsListQueryResult = Apollo.QueryResult<GetAllProductsListQuery, GetAllProductsListQueryVariables>;
export const GetFilteredProductsListDocument = gql`
    query GetFilteredProductsList($filters: [String]) {
  products(where: {categories_some: {slug_in: $filters}}, first: 100) {
    id
    slug
    title
    name
    price
    reviewScore
    images(first: 1) {
      url
      width
      height
    }
  }
}
    `;

/**
 * __useGetFilteredProductsListQuery__
 *
 * To run a query within a React component, call `useGetFilteredProductsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFilteredProductsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFilteredProductsListQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useGetFilteredProductsListQuery(baseOptions?: Apollo.QueryHookOptions<GetFilteredProductsListQuery, GetFilteredProductsListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFilteredProductsListQuery, GetFilteredProductsListQueryVariables>(GetFilteredProductsListDocument, options);
      }
export function useGetFilteredProductsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFilteredProductsListQuery, GetFilteredProductsListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFilteredProductsListQuery, GetFilteredProductsListQueryVariables>(GetFilteredProductsListDocument, options);
        }
export type GetFilteredProductsListQueryHookResult = ReturnType<typeof useGetFilteredProductsListQuery>;
export type GetFilteredProductsListLazyQueryHookResult = ReturnType<typeof useGetFilteredProductsListLazyQuery>;
export type GetFilteredProductsListQueryResult = Apollo.QueryResult<GetFilteredProductsListQuery, GetFilteredProductsListQueryVariables>;
export const GetHomePageDocument = gql`
    query GetHomePage($carouselNewfilters: [String]) {
  carouselNew: products(
    where: {categories_some: {slug_in: $carouselNewfilters}}
    first: 10
  ) {
    id
    slug
    title
    name
    price
    reviewScore
    images(first: 1) {
      url
      width
      height
    }
  }
}
    `;

/**
 * __useGetHomePageQuery__
 *
 * To run a query within a React component, call `useGetHomePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHomePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHomePageQuery({
 *   variables: {
 *      carouselNewfilters: // value for 'carouselNewfilters'
 *   },
 * });
 */
export function useGetHomePageQuery(baseOptions?: Apollo.QueryHookOptions<GetHomePageQuery, GetHomePageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHomePageQuery, GetHomePageQueryVariables>(GetHomePageDocument, options);
      }
export function useGetHomePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHomePageQuery, GetHomePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHomePageQuery, GetHomePageQueryVariables>(GetHomePageDocument, options);
        }
export type GetHomePageQueryHookResult = ReturnType<typeof useGetHomePageQuery>;
export type GetHomePageLazyQueryHookResult = ReturnType<typeof useGetHomePageLazyQuery>;
export type GetHomePageQueryResult = Apollo.QueryResult<GetHomePageQuery, GetHomePageQueryVariables>;
export const GetProductDetailsBySlugDocument = gql`
    query GetProductDetailsBySlug($slug: String) {
  product(where: {slug: $slug}) {
    id
    slug
    title
    name
    price
    reviewScore
    images {
      url
      height
      width
    }
    description
    longDescription
    categories {
      title
    }
    cares {
      title
      description
      icon {
        url
        width
        height
      }
    }
  }
}
    `;

/**
 * __useGetProductDetailsBySlugQuery__
 *
 * To run a query within a React component, call `useGetProductDetailsBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductDetailsBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductDetailsBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetProductDetailsBySlugQuery(baseOptions?: Apollo.QueryHookOptions<GetProductDetailsBySlugQuery, GetProductDetailsBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductDetailsBySlugQuery, GetProductDetailsBySlugQueryVariables>(GetProductDetailsBySlugDocument, options);
      }
export function useGetProductDetailsBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductDetailsBySlugQuery, GetProductDetailsBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductDetailsBySlugQuery, GetProductDetailsBySlugQueryVariables>(GetProductDetailsBySlugDocument, options);
        }
export type GetProductDetailsBySlugQueryHookResult = ReturnType<typeof useGetProductDetailsBySlugQuery>;
export type GetProductDetailsBySlugLazyQueryHookResult = ReturnType<typeof useGetProductDetailsBySlugLazyQuery>;
export type GetProductDetailsBySlugQueryResult = Apollo.QueryResult<GetProductDetailsBySlugQuery, GetProductDetailsBySlugQueryVariables>;
export const GetProductsSlugsDocument = gql`
    query GetProductsSlugs {
  products(first: 100) {
    slug
  }
}
    `;

/**
 * __useGetProductsSlugsQuery__
 *
 * To run a query within a React component, call `useGetProductsSlugsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsSlugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsSlugsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductsSlugsQuery(baseOptions?: Apollo.QueryHookOptions<GetProductsSlugsQuery, GetProductsSlugsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductsSlugsQuery, GetProductsSlugsQueryVariables>(GetProductsSlugsDocument, options);
      }
export function useGetProductsSlugsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsSlugsQuery, GetProductsSlugsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductsSlugsQuery, GetProductsSlugsQueryVariables>(GetProductsSlugsDocument, options);
        }
export type GetProductsSlugsQueryHookResult = ReturnType<typeof useGetProductsSlugsQuery>;
export type GetProductsSlugsLazyQueryHookResult = ReturnType<typeof useGetProductsSlugsLazyQuery>;
export type GetProductsSlugsQueryResult = Apollo.QueryResult<GetProductsSlugsQuery, GetProductsSlugsQueryVariables>;