import { Router } from "express";
import { CreateEventCalendarController } from "../../modules/EventCalendar/useCases/CreateEventCalendar/CreateEventCalendarController";
import { DeleteEventCalendarController } from "../../modules/EventCalendar/useCases/DeleteEventCalendar/DeleteEventCalendarController";
import { GetAllEventCalendarController } from "../../modules/EventCalendar/useCases/GetAllEventCalendar/GetAllEventCalendarController";

const eventCalendarRoutes = Router();

const createEventCalendarController = new CreateEventCalendarController();
eventCalendarRoutes.post("/", createEventCalendarController.handle);

const getAllEventCalendarController = new GetAllEventCalendarController();
eventCalendarRoutes.get("/", getAllEventCalendarController.handle);

const deleteEventCalendarController = new DeleteEventCalendarController();
eventCalendarRoutes.delete("/:id", deleteEventCalendarController.handle);

export default eventCalendarRoutes;
