import { Router } from "express";
import eventCalendarRoutes from "./eventCalendarRoutes";

const routes = Router();

routes.use("/api/eventCalendar", eventCalendarRoutes);

export default routes;
