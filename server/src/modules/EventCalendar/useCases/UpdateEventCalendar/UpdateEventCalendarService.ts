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

  async execute({_id, backgroundColor, end, start, textColor, title}: IRequest) {
    const eventCalendarUpdated: any = {
      _id,
      title,
      start,
      end,
      backgroundColor,
      textColor
    }

    try {
      if (!_id) throw new CustomError("Event Calendar not found", 400);

      const eventCalendarExist = await this.eventCalendarRepository.getOne({_id});

      if (!eventCalendarExist) throw new CustomError("Internal server error", 400);

      for (const index in eventCalendarUpdated) {
        if (typeof eventCalendarUpdated[index] === "undefined") {
          delete eventCalendarUpdated[index];
        }
      }
      
      const eventCalendar = await this.eventCalendarRepository.update(eventCalendarUpdated);

      return eventCalendar;
    } catch (err) {
      throw err;
    }
  }
}
