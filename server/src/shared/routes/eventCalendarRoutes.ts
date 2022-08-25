import { Router } from "express";
import { CreateEventCalendarController } from "../../modules/EventCalendar/useCases/CreateEventCalendar/CreateEventCalendarController";

const eventCalendarRoutes = Router();

const createEventCalendarController = new CreateEventCalendarController();
eventCalendarRoutes.post("/", createEventCalendarController.handle);

export default eventCalendarRoutes;
