import { Request, Response } from "express";
import { EventCalendarRepository } from "../../../../repositories/EventCalendarRepository";
import { CustomError } from "../../../../shared/errors/CustomError";
import { UpdateEventCalendarService } from "./UpdateEventCalendarService";

export class UpdateEventCalendarController {
  async handle(request: Request, response: Response) {
    const { eventCalendar = null } = request.body;

    try {
      const eventCalendarRepository = new EventCalendarRepository();
      const updateEventCalendarService = new UpdateEventCalendarService(eventCalendarRepository);
      const eventCalendarData = await updateEventCalendarService.execute(eventCalendar);

      return response.status(201).json(eventCalendarData);
    } catch (err) {
      if (err instanceof CustomError) {
        response.status(err.status).json({ message: err.message });
      }
    }
  }
}
