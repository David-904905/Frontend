import type { SetStateAction } from "react";

export interface WelcomeResponse {
  message: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
}

export interface SingleProductResponse {
  item?: Product | null;
  error?: string | null;
}

export interface DailyQuote {
  q: string;
  a: string;
  h: string;
  id: number;
}

export interface NavBarStruct {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<SetStateAction<boolean>>;
}

export interface ContactUsPayload {
  name: string;
  email: string;
  message: string;
}

export interface UserDetails {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<SetStateAction<string>>;
  bio: string;
  setBio: React.Dispatch<React.SetStateAction<string>>;
  profileImage: string;
  setProfileImage: React.Dispatch<SetStateAction<string>>;
}

export interface SearchSetter {
  searchValue: string;
  setSearchValue: React.Dispatch<SetStateAction<string>>;
}

export interface SettingsContextPayload {
  searchValue: string;
  setSearchValue: React.Dispatch<SetStateAction<string>>;
  showModal: boolean;
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
  showEditModal: boolean;
  setShowEditModal: React.Dispatch<SetStateAction<boolean>>;
}

export interface Children {
  children: React.ReactNode;
}

export interface SignUpPayLoad {
  firstname: string;
  lastname: string;
  username: string | null;
  email: string;
  dateofbirth: Date;
  password: string;
}

export interface LoginPayLoad {
  email: string;
  password: string;
}

export interface AuthContextDependency {
  loginStatus: boolean;
  loginError: string | null;
  signUpError: string | null;
  isHome: boolean;
  setIsHome: React.Dispatch<SetStateAction<boolean>>;
  Login: (token: LoginPayLoad) => Promise<void>;
  SignUp: (payload: SignUpPayLoad) => Promise<void>;
  Logout: () => void;
}
