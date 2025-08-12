import { WorkTime } from '@/generated/prisma';
import { prisma } from '@/prisma';
import { IWorkTime } from './types';
export class WorkTimeService {
  prisma = prisma;

  createWorkTime(workTime: IWorkTime): Promise<WorkTime> {
    return this.prisma.workTime.create({
      data: workTime,
    });
  }

  getWorkTime(): Promise<WorkTime | null> {
    return this.prisma.workTime.findFirst();
  }

  updateWorkTime({ id, start, end }: IWorkTime): Promise<WorkTime> {
    return this.prisma.workTime.update({
      where: { id },
      data: { start, end },
    });
  }
}
