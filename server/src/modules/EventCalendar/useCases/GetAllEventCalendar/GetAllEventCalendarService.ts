import { EventCalendarRepository } from "../../../../repositories/EventCalendarRepository";

export class GetAllEventCalendarService {
  constructor(
    private eventCalendarRepository: EventCalendarRepository,
  ) {}

  async execute() {
    try {
      const eventsCalendar = await this.eventCalendarRepository.getAll();

      if (!eventsCalendar) {
        return [];
      }

      return eventsCalendar;
    } catch (err) {
      throw err;
    }
  }
}
