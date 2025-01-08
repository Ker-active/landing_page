export interface TUser {
  socialMedia: SocialMedia;
  _id: string;
  services: string[];
  anotherService: any[];
  amenities: string[];
  specialNeed: string[];
  media: string[];
  activities: string[];
  userType: string;
  isVerified: boolean;
  createdAt: string;
  fullname: string;
  phoneNumber: string;
  email: string;
  password: string;
  __v: number;
  token: string;
  profilePhoto: string;
  professionalSummary: string;
  location: string;
}

interface SocialMedia {
  instagram: string;
  twitter: string;
}
