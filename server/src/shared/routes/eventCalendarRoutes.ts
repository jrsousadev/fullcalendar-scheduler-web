import { Router } from "express";
import { CreateEventCalendarController } from "../../modules/EventCalendar/useCases/CreateEventCalendar/CreateEventCalendarController";
import { DeleteEventCalendarController } from "../../modules/EventCalendar/useCases/DeleteEventCalendar/DeleteEventCalendarController";
import { GetAllEventCalendarController } from "../../modules/EventCalendar/useCases/GetAllEventCalendar/GetAllEventCalendarController";
import { GetOneEventCalendarController } from "../../modules/EventCalendar/useCases/GetOneEventCalendar/GetOneEventCalendarController";
import { UpdateEventCalendarController } from "../../modules/EventCalendar/useCases/UpdateEventCalendar/UpdateEventCalendarController";

const eventCalendarRoutes = Router();

const createEventCalendarController = new CreateEventCalendarController();
eventCalendarRoutes.post("/", createEventCalendarController.handle);

const getAllEventCalendarController = new GetAllEventCalendarController();
eventCalendarRoutes.get("/all", getAllEventCalendarController.handle);

const getOneEventCalendarController = new GetOneEventCalendarController();
eventCalendarRoutes.get("/:id", getOneEventCalendarController.handle);

const updateEventCalendarController = new UpdateEventCalendarController();
eventCalendarRoutes.put("/", updateEventCalendarController.handle);

const deleteEventCalendarController = new DeleteEventCalendarController();
eventCalendarRoutes.delete("/:id", deleteEventCalendarController.handle);

export default eventCalendarRoutes;
