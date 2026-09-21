export interface NewsArticle {
  id: number;
  foto: string;
  title_foto?: string | null;
  category: string;
  sumber: string;
  created_at: string;
  updated_at?: string;
  views: number;
  title: string;
  slug: string;
  text?: string;
}

export interface SijamuwangiEvent {
  id: number;
  title: string;
  date: string;
  start_hour: string;
  end_hour: string;
  priority?: number;
  type?: string;
  status?: string;
  address?: string;
  url?: string;
  category?: string;
  tags?: Array<{
    id: number;
    data_id: number;
    tag_id: number;
    tag_name: string;
    type: string;
  }>;
}
