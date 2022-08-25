import { EventCalendarRepository } from "../../../../repositories/EventCalendarRepository";
import { CustomError } from "../../../../shared/errors/CustomError";
interface IRequest {
  _id: string;
  title: string;
  start: string;
  end: string;
  backgroundColor: string;
  textColor: string;
}

export class UpdateEventCalendarService {
  constructor(
    private eventCalendarRepository: EventCalendarRepository,
  ) {}

  async execute(data: IRequest) {
    try {
      if (!data) throw new CustomError("Event Calendar not found", 400);

      const eventCalendarExist = await this.eventCalendarRepository.getOne({_id: data._id});

      if (!eventCalendarExist) throw new CustomError("Internal server error", 400);

      for (const index in data) {
        if (typeof data[index] === "undefined") {
          delete data[index];
        }
      }
      
      const eventCalendar = await this.eventCalendarRepository.update(data);

      return eventCalendar;
    } catch (err) {
      throw err;
    }
  }
}
