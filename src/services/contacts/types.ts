export interface IContacts {
  id: string;
  phone: IPhone;
  socials: ISocial[];
  openAt: string;
  closeAt: string;
}

interface ISocial {
  id: string;
  name: string;
  link: string;
}

interface IPhone {
  label: string;
  number: string;
}
