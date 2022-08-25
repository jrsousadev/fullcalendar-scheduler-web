import { Request, Response } from "express";
import { EventCalendarRepository } from "../../../../repositories/EventCalendarRepository";
import { CustomError } from "../../../../shared/errors/CustomError";
import { GetOneEventCalendarService } from "./GetOneEventCalendarService";

export class GetOneEventCalendarController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const eventCalendarRepository = new EventCalendarRepository();
      const getOneEventCalendarService = new GetOneEventCalendarService(eventCalendarRepository);
      const eventCalendar = await getOneEventCalendarService.execute({id: String(id)});

      return response.status(200).json(eventCalendar);
    } catch (err) {
      if (err instanceof CustomError) {
        response.status(err.status).json({ message: err.message });
      }
    }
  }
}
