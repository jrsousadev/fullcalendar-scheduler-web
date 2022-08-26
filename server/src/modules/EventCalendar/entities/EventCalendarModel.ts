import mongoose, { Document } from "mongoose";

const EventCalendarSchema = new mongoose.Schema<IEventCalendar>(
  {
    title: {
      type: String,
      required: true,
    },
    start: {
      type: Date,
      required: true,
    },
    end: {
      type: Date,
      required: true,
    },
    backgroundColor: {
      type: String,
      required: true,
    },
    textColor: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
    collection: "EventCalendar",
  }
);

export interface IEventCalendar extends Document {
  title: string;
  start: Date;
  end: Date;
  backgroundColor: string;
  textColor: string;
  createdAt: Date;
  updatedAt: Date;
}

const EventCalendarModel = mongoose.model(
  "EventCalendar",
  EventCalendarSchema
);

export default EventCalendarModel;
