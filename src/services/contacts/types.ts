export interface IContacts {
  id?: string;
  phone: IPhone;
  socials: ISocial[];
}

interface ISocial {
  id: string;
  name: string;
  link: string;
}

interface IPhone {
  label: string;
  phoneNumber: string;
}
