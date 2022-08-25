import { Request, Response } from "express";
import { EventCalendarRepository } from "../../../../repositories/EventCalendarRepository";
import { CustomError } from "../../../../shared/errors/CustomError";
import { GetAllEventCalendarService } from "./GetAllEventCalendarService";

export class GetAllEventCalendarController {
  async handle(request: Request, response: Response) {
    try {
      const eventCalendarRepository = new EventCalendarRepository();
      const getAllEventCalendarService = new GetAllEventCalendarService(eventCalendarRepository);
      const eventsCalendar = await getAllEventCalendarService.execute();

      return response.status(201).json(eventsCalendar);
    } catch (err) {
      if (err instanceof CustomError) {
        response.status(err.status).json({ message: err.message });
      }
    }
  }
}
