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

  createContacts({ openAt, closeAt, socials, phone }: IContacts): Promise<Contacts> {
    return this.prisma.contacts.create({
      data: {
        openAt,
        closeAt,
        phone: {
          create: {
            number: phone.number,
            label: phone.label,
          },
        },
        socials: {
          create: socials.map((social) => ({
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
