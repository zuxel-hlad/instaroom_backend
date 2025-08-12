import { prisma } from '@/prisma';
import { Contacts } from '@/generated/prisma';
import { IContacts } from './types';

export class ContactsService {
  private prisma = prisma;

  getContacts(): Promise<Contacts | null> {
    return this.prisma.contacts.findFirst({
      include: {
        phone: true,
        socials: true,
      },
    });
  }

  createContacts(contacts: IContacts): Promise<Contacts> {
    return this.prisma.contacts.create({
      data: {
        id: contacts.id,
        phone: {
          create: {
            phoneNumber: contacts.phone.phoneNumber,
            label: contacts.phone.label,
          },
        },
        socials: {
          create: contacts.socials.map((social) => ({
            name: social.name,
            link: social.link,
          })),
        },
      },
      include: {
        phone: true,
        socials: true,
      },
    });
  }
}
