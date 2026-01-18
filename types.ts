export interface NavItem {
  label: string;
  href: string;
}

export interface UserAvatar {
  id: number;
  imageUrl: string;
  alt: string;
}

export interface FeatureCardData {
  title: string;
  description: string;
  userCount: string;
  image: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content?: string;
}