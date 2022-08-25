import { Request, Response } from "express";
import { EventCalendarRepository } from "../../../../repositories/EventCalendarRepository";
import { CustomError } from "../../../../shared/errors/CustomError";
import { CreateEventCalendarService } from "./CreateEventCalendarService";

export class CreateEventCalendarController {
  async handle(request: Request, response: Response) {
    const { eventCalendar = null } = request.body;

    try {
      const eventCalendarRepository = new EventCalendarRepository();
      const createEventCalendarService = new CreateEventCalendarService(eventCalendarRepository);
      const eventCalendarData = await createEventCalendarService.execute(eventCalendar);

      return response.status(201).json(eventCalendarData);
    } catch (err) {
      if (err instanceof CustomError) {
        response.status(err.status).json({ message: err.message });
      }
    }
  }
}
