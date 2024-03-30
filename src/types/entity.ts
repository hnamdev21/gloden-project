export type Entity = {
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type AccessibleTable = Entity & {
  title: string;
  prefix: string;
};

export type Role = Entity & {
  title: string;
};

export type RolePermission = Entity & {
  role_id: string;
  table_id: string;
  create: boolean;
  read: boolean;
  update: boolean;
  delete: boolean;
};

export type User = Entity & {
  email: string;
  password: string;
  role_id: string;
  phone: string;
  banned: boolean;
  confirmed: boolean;
};

export type BannedUser = Entity & {
  user_id: string;
  reason: string;
};

export type Tag = Entity & {
  title: string;
  slug: string;
};

export type Blog = Entity & {
  created_by: string;
  title: string;
  content: string;
  views: number;
  disabled: boolean;
  slug: string;
};

export type Comment = Entity & {
  blog_id: string;
  user_id: string;
  content: string;
  parent_id: string;
};
