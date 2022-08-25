import { EventCalendarRepository } from "../../../../repositories/EventCalendarRepository";
import { CustomError } from "../../../../shared/errors/CustomError";
interface IRequest {
  id: string;
}
export class GetOneEventCalendarService {
  constructor(
    private eventCalendarRepository: EventCalendarRepository,
  ) {}

  async execute({ id }: IRequest) {
    try {
      if (!id) throw new CustomError("Id not found", 400);

      const eventCalendar = await this.eventCalendarRepository.getOne({_id: id})

      if (!eventCalendar) throw new CustomError("Event Calendar not exist", 400);

      return eventCalendar;
    } catch (err) {
      throw err;
    }
  }
}
