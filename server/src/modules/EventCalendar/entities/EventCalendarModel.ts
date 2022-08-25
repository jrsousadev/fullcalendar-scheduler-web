import mongoose, { Document, Model } from "mongoose";

const EventCalendarSchema = new mongoose.Schema(
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
    removedAt: {
      type: Date,
      index: true,
      default: null,

      es_indexed: true,
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

  removedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

const EventCalendarModel: Model<IEventCalendar> = mongoose.model(
  "EventCalendar",
  EventCalendarSchema
);

export default EventCalendarModel;
