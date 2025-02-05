/* eslint-disable */

export const AllTypesProps: Record<string, any> = {
  Int_comparison_exp: {},
  String_comparison_exp: {},
  chats_bool_exp: {
    _and: "chats_bool_exp",
    _not: "chats_bool_exp",
    _or: "chats_bool_exp",
    id: "Int_comparison_exp",
    message: "String_comparison_exp",
    room: "String_comparison_exp",
    username: "String_comparison_exp",
    uuid: "String_comparison_exp",
  },
  chats_constraint: "enum" as const,
  chats_insert_input: {},
  chats_on_conflict: {
    constraint: "chats_constraint",
    update_columns: "chats_update_column",
    where: "chats_bool_exp",
  },
  chats_order_by: {
    id: "order_by",
    message: "order_by",
    room: "order_by",
    username: "order_by",
    uuid: "order_by",
  },
  chats_select_column: "enum" as const,
  chats_stream_cursor_input: {
    initial_value: "chats_stream_cursor_value_input",
    ordering: "cursor_ordering",
  },
  chats_stream_cursor_value_input: {},
  chats_update_column: "enum" as const,
  cursor_ordering: "enum" as const,
  mutation_root: {
    insert_chats: {
      objects: "chats_insert_input",
      on_conflict: "chats_on_conflict",
    },
    insert_chats_one: {
      object: "chats_insert_input",
      on_conflict: "chats_on_conflict",
    },
  },
  order_by: "enum" as const,
  query_root: {
    chats: {
      distinct_on: "chats_select_column",
      order_by: "chats_order_by",
      where: "chats_bool_exp",
    },
    chats_by_pk: {},
  },
  subscription_root: {
    chats: {
      distinct_on: "chats_select_column",
      order_by: "chats_order_by",
      where: "chats_bool_exp",
    },
    chats_by_pk: {},
    chats_stream: {
      cursor: "chats_stream_cursor_input",
      where: "chats_bool_exp",
    },
  },
};

export const ReturnTypes: Record<string, any> = {
  cached: {
    ttl: "Int",
    refresh: "Boolean",
  },
  chats: {
    id: "Int",
    message: "String",
    room: "String",
    username: "String",
    uuid: "String",
  },
  chats_mutation_response: {
    affected_rows: "Int",
    returning: "chats",
  },
  mutation_root: {
    insert_chats: "chats_mutation_response",
    insert_chats_one: "chats",
  },
  query_root: {
    chats: "chats",
    chats_by_pk: "chats",
  },
  subscription_root: {
    chats: "chats",
    chats_by_pk: "chats",
    chats_stream: "chats",
  },
};

export const Ops = {
  mutation: "mutation_root" as const,
  query: "query_root" as const,
  subscription: "subscription_root" as const,
};
