import { Router } from 'express';
import { WorkTimeService } from '@/services/work-time/index';

const workTimeRouter = Router();

const workTimeService = new WorkTimeService();

workTimeRouter.post('/', (req, res, next) => {
  workTimeService
    .createWorkTime(req.body)
    .then((workTime) => res.status(201).json(workTime))
    .catch(next);
});

workTimeRouter.get('/', (_, res, next) => {
  workTimeService
    .getWorkTime()
    .then((workTime) => res.json(workTime))
    .catch(next);
});

workTimeRouter.put('/', (req, res, next) => {
  workTimeService
    .updateWorkTime(req.body)
    .then((workTime) => res.status(201).json(workTime))
    .catch(next);
});

export { workTimeRouter };
