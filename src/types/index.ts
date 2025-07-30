import type { Database } from './database'

export type User = Database['public']['Tables']['users']['Row']
export type UserInsert = Database['public']['Tables']['users']['Insert']
export type UserUpdate = Database['public']['Tables']['users']['Update']

export type Payment = Database['public']['Tables']['payments']['Row']
export type PaymentInsert = Database['public']['Tables']['payments']['Insert']
export type PaymentUpdate = Database['public']['Tables']['payments']['Update']

export type Ticket = Database['public']['Tables']['tickets']['Row']
export type TicketInsert = Database['public']['Tables']['tickets']['Insert']
export type TicketUpdate = Database['public']['Tables']['tickets']['Update']

export type TicketAttachment = Database['public']['Tables']['ticket_attachments']['Row']
export type TicketAttachmentInsert = Database['public']['Tables']['ticket_attachments']['Insert']
export type TicketAttachmentUpdate = Database['public']['Tables']['ticket_attachments']['Update']

export type TicketComment = Database['public']['Tables']['ticket_comments']['Row']
export type TicketCommentInsert = Database['public']['Tables']['ticket_comments']['Insert']
export type TicketCommentUpdate = Database['public']['Tables']['ticket_comments']['Update']

export type Announcement = Database['public']['Tables']['announcements']['Row']
export type AnnouncementInsert = Database['public']['Tables']['announcements']['Insert']
export type AnnouncementUpdate = Database['public']['Tables']['announcements']['Update']

export type AnnouncementAttachment = Database['public']['Tables']['announcement_attachments']['Row']
export type AnnouncementAttachmentInsert = Database['public']['Tables']['announcement_attachments']['Insert']
export type AnnouncementAttachmentUpdate = Database['public']['Tables']['announcement_attachments']['Update']

// Enum types
export type PaymentStatus = 'pending' | 'paid' | 'overdue'
export type TicketStatus = 'open' | 'assigned' | 'in_progress' | 'resolved' | 'closed'
export type TicketPriority = 'low' | 'medium' | 'high' | 'urgent'
export type TicketCategory = 'plumbing' | 'electrical' | 'heating' | 'internet' | 'maintenance' | 'security' | 'other'

// Extended types with relationships
export type TicketWithDetails = Ticket & {
  user: User
  assigned_user?: User | null
  attachments: TicketAttachment[]
  comments: (TicketComment & { user: User })[]
}

export type PaymentWithUser = Payment & {
  user: User
}

export type AnnouncementWithAttachments = Announcement & {
  attachments: AnnouncementAttachment[]
}