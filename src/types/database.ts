export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          phone: string | null
          name: string
          created_at: string
          updated_at: string
          community_points: number
        }
        Insert: {
          id?: string
          email: string
          phone?: string | null
          name: string
          created_at?: string
          updated_at?: string
          community_points?: number
        }
        Update: {
          id?: string
          email?: string
          phone?: string | null
          name?: string
          created_at?: string
          updated_at?: string
          community_points?: number
        }
      }
      payments: {
        Row: {
          id: string
          user_id: string
          type: string
          amount: number
          due_date: string
          paid_date: string | null
          status: string
          receipt_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          type: string
          amount: number
          due_date: string
          paid_date?: string | null
          status: string
          receipt_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          type?: string
          amount?: number
          due_date?: string
          paid_date?: string | null
          status?: string
          receipt_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      tickets: {
        Row: {
          id: string
          user_id: string
          category: string
          description: string
          priority: string
          status: string
          assigned_to: string | null
          created_at: string
          updated_at: string
          completed_at: string | null
          feedback_rating: number | null
          feedback_comment: string | null
        }
        Insert: {
          id?: string
          user_id: string
          category: string
          description: string
          priority: string
          status?: string
          assigned_to?: string | null
          created_at?: string
          updated_at?: string
          completed_at?: string | null
          feedback_rating?: number | null
          feedback_comment?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          category?: string
          description?: string
          priority?: string
          status?: string
          assigned_to?: string | null
          created_at?: string
          updated_at?: string
          completed_at?: string | null
          feedback_rating?: number | null
          feedback_comment?: string | null
        }
      }
      ticket_attachments: {
        Row: {
          id: string
          ticket_id: string
          file_url: string
          created_at: string
        }
        Insert: {
          id?: string
          ticket_id: string
          file_url: string
          created_at?: string
        }
        Update: {
          id?: string
          ticket_id?: string
          file_url?: string
          created_at?: string
        }
      }
      ticket_comments: {
        Row: {
          id: string
          ticket_id: string
          user_id: string
          comment: string
          created_at: string
        }
        Insert: {
          id?: string
          ticket_id: string
          user_id: string
          comment: string
          created_at?: string
        }
        Update: {
          id?: string
          ticket_id?: string
          user_id?: string
          comment?: string
          created_at?: string
        }
      }
      announcements: {
        Row: {
          id: string
          title: string
          content: string
          is_important: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          content: string
          is_important?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          content?: string
          is_important?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      announcement_attachments: {
        Row: {
          id: string
          announcement_id: string
          file_url: string
          created_at: string
        }
        Insert: {
          id?: string
          announcement_id: string
          file_url: string
          created_at?: string
        }
        Update: {
          id?: string
          announcement_id?: string
          file_url?: string
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}