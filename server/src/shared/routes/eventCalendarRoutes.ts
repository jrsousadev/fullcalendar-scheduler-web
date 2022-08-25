import { Router } from "express";
import { CreateEventCalendarController } from "../../modules/EventCalendar/useCases/CreateEventCalendar/CreateEventCalendarController";
import { GetAllEventCalendarController } from "../../modules/EventCalendar/useCases/GetAllEventCalendar/GetAllEventCalendarController";

const eventCalendarRoutes = Router();

const createEventCalendarController = new CreateEventCalendarController();
eventCalendarRoutes.post("/", createEventCalendarController.handle);

const getAllEventCalendarController = new GetAllEventCalendarController();
eventCalendarRoutes.get("/", getAllEventCalendarController.handle);

export default eventCalendarRoutes;
