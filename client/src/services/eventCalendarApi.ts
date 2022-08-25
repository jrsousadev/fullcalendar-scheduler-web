import api from './api';
import {
  CREATE_EVENT_CALENDAR,
  DELETE_EVENT_CALENDAR,
  GET_ALL_EVENTS_CALENDAR,
  UPDATE_EVENT_CALENDAR,
} from './eventCalendarRoutes';

interface ICreateEventCalendar {
  eventCalendar: {
    title: string;
    end: string;
    start: string;
    backgroundColor: string;
    textColor: string;
  };
}

export const createEventCalendar = async (data: ICreateEventCalendar) => {
  try {
    const response = await api.post(CREATE_EVENT_CALENDAR, data);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const getAllEventsCalendar = async () => {
  try {
    const response = await api.get(GET_ALL_EVENTS_CALENDAR);
    return response.data;
  } catch (err) {
    return err;
  }
};

interface IUpdateEventCalendar {
  eventCalendar: {
    _id: string;
    title: string;
    end: string;
    start: string;
    backgroundColor: string;
    textColor: string;
  };
}

export const updateEventCalendar = async (data: IUpdateEventCalendar) => {
  try {
    const response = await api.put(UPDATE_EVENT_CALENDAR, data);
    return response.data;
  } catch (err) {
    return err;
  }
};

interface IDeleteEventCalendar {
  id: string;
}

export const deleteEventCalendar = async ({ id }: IDeleteEventCalendar) => {
  try {
    const response = await api.delete(DELETE_EVENT_CALENDAR(id));
    return response.data;
  } catch (err) {
    return err;
  }
};