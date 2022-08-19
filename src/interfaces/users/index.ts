export interface Iuser {
  id: string;
  name: string;
  email: string;
  password: string;
  age: number;
  created_at?: string;
  updated_at?: string;
}

export interface Iupdate {
  id: string;
  userData: string[];
}