import { EventCalendarRepository } from "../../../../repositories/EventCalendarRepository";
import { CustomError } from "../../../../shared/errors/CustomError";
interface IRequest {
  id: string;
}
export class DeleteEventCalendarService {
  constructor(
    private eventCalendarRepository: EventCalendarRepository,
  ) {}

  async execute({ id }: IRequest) {
    try {
      if (!id) throw new CustomError("Id not found", 400);

      const eventCalendarExist = await this.eventCalendarRepository.getOne({_id: id})

      if (!eventCalendarExist) throw new CustomError("Event Calendar not exist", 400);

      const deleteEventCalendar = await this.eventCalendarRepository.delete({
        _id: eventCalendarExist._id,
      })

      return deleteEventCalendar;
    } catch (err) {
      throw err;
    }
  }
}
