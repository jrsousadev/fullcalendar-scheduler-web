import { EventCalendarRepository } from "../../../../repositories/EventCalendarRepository";
import { CustomError } from "../../../../shared/errors/CustomError";
interface IRequest {
  title: string;
  start: string;
  end: string;
  backgroundColor: string;
  textColor: string;
}
export class CreateEventCalendarService {
  constructor(
    private eventCalendarRepository: EventCalendarRepository,
  ) {}

  async execute(data: IRequest) {
    try {

      const eventCalendar = this.eventCalendarRepository.create(data);

      if (!eventCalendar) throw new CustomError("Internal server error", 400);

      return eventCalendar;
    } catch (err) {
      throw err;
    }
  }
}
