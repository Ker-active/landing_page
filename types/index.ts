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

export interface TTrainer {
  _id: string;
  fullname: string;
  email: string;
  phoneNumber: string;
  isVerified: boolean;
  userType: string;
  password: string;
  token: string;
  createdAt: string;
  __v: number;
  services: string[];
  anotherService: string[];
  amenities: string[];
  specialNeed: string[];
  activities: string[];
  media: string[];
}

export interface TGyms {
  _id: string;
  fullname: string;
  email: string;
  phoneNumber: string;
  location: string;
  isVerified: boolean;
  userType: string;
  media: string[];
  services: string[];
  amenities: string[];
  activities: string[];
  anotherService: string[];
  specialNeed: string[];
  professionalSummary?: string;
  socialMedia: {
    instagram?: string;
    twitter?: string;
    website?: string;
  };
  token: string;
  verificationToken?: string;
  resetPasswordToken?: string;
  resetPasswordTokenExpires?: string;
  createdAt: string;
  password: string;
  __v: number;
}

export interface TPaginationResponse<T> {
  currentPage: number;
  data: any[];
  message: string;
  success: boolean;
  total: number;
  totalPages: number;
}

export interface TFetchParams {
  page?: number;
  limit?: number;
  service?: string;
  location?: string;
  search?: string;
}
