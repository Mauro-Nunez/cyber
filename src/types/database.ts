export type UserRole = 'admin' | 'editor' | 'viewer';
export type ElementType = 'text' | 'image' | 'form' | 'link' | 'button' | 'table' | 'script' | 'meta' | 'style' | 'component';
export type ContentType = 'text' | 'json' | 'html' | 'markdown';
export type FieldType = 'text' | 'email' | 'password' | 'number' | 'select' | 'checkbox' | 'radio';
export type AuditAction = 'create' | 'update' | 'delete' | 'publish' | 'unpublish';

export interface User {
  id: string;
  email: string;
  password_hash: string;
  full_name: string | null;
  role: UserRole;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface WebElement {
  id: string;
  type: ElementType;
  location: string;
  is_published: boolean;
  created_by: string | null;
  updated_by: string | null;
  created_at: Date;
  updated_at: Date;
}

export interface ElementContent {
  id: string;
  element_id: string;
  content_type: ContentType;
  content: any;
  version: number;
  created_at: Date;
  updated_at: Date;
}

export interface ElementAttribute {
  id: string;
  element_id: string;
  key: string;
  value: string | null;
  created_at: Date;
  updated_at: Date;
}

export interface ElementStyle {
  id: string;
  element_id: string;
  style_class: string;
  created_at: Date;
  updated_at: Date;
}

export interface FormField {
  id: string;
  element_id: string;
  field_type: FieldType;
  label: string;
  placeholder: string | null;
  is_required: boolean;
  order_index: number;
  created_at: Date;
  updated_at: Date;
}

export interface FormFieldOption {
  id: string;
  field_id: string;
  option_value: string;
  order_index: number;
  created_at: Date;
  updated_at: Date;
}

export interface MediaFile {
  id: string;
  file_name: string;
  file_path: string;
  mime_type: string;
  file_size: number;
  uploaded_by: string | null;
  created_at: Date;
  updated_at: Date;
}

export interface ElementMedia {
  id: string;
  element_id: string;
  media_id: string;
  created_at: Date;
  updated_at: Date;
}

export interface NavigationMenu {
  id: string;
  name: string;
  location: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface NavigationItem {
  id: string;
  menu_id: string;
  parent_id: string | null;
  label: string;
  url: string;
  order_index: number;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface AuditLog {
  id: string;
  user_id: string | null;
  action: AuditAction;
  entity_type: string;
  entity_id: string;
  changes: any | null;
  created_at: Date;
} 