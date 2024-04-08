export type Entity = {
  id: number;
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
  roleId: number;
  tableId: number;
  create: boolean;
  read: boolean;
  update: boolean;
  delete: boolean;
};

export type User = Entity & {
  fullName: string;
  email: string;
  // password: string;
  roleId: number;
  phone: string;
  banned: boolean;
  confirmed: boolean;
  role: Role;
  rolePermissions: RolePermission[];
};

export type BannedUser = Entity & {
  userId: number;
  reason: string;
};

export type Tag = Entity & {
  title: string;
  slug: string;
};

export type Category = Entity & {
  title: string;
  slug: string;
};

export type Comment = Entity & {
  blogId: number;
  userId: number;
  content: string;
  parent_id: number;
};

export type Blog = Entity & {
  createdBy: number;
  thumbnailPath: string;
  title: string;
  content: string;
  views: number;
  disabled: boolean;
  slug: string;
  categoryId: number;
  category: Category;
  tags: Tag[];
  comments: Comment[];
  user: User;
};
