export type Menus = {
  id: string;
  title: string;
  img?: string;
  subNav?: GeneralListModel[];
};

export type GeneralListModel = {
  id: string;
  title?: string;
  subtitle?: string;
  content?: string;
  img?: string;
  mainImage?: string;
  createdAt?: string;
  description?: string;
  notes?: string;
  plans?: GeneralListModel[];
  reason?: GeneralListModel[];
  subservice?: GeneralListModel[];
};

export type ContactModel = {
  email?: string;
  phone?: string;
  phone2?: string;
  address?: string;
  name?: string;
  position?: string;
  unionId?: string;
  unionName?: string;
};

export type ServiceTypes = {
  id: string;
  title?: string;
  content?: string;
  img?: string;
  mainImage?: string;
  createdAt?: string;
  description?: string;
};

export type AnswerType = {
  heading?: string;
  title?: string;
  address?: string;
  contact?: ContactModel[];
  unionId?: string;
};

export type FAQType = {
  id: string;
  title?: string;
  answer?: AnswerType[];
};

export type InterestType = {
  period: string;
  principal: string;
  interest: string;
  total: string;
  balance: string;
};

export type Membership = {
  id: string;
  loans: string;
  male: string;
  female?: string;
  groups?: string;
};
