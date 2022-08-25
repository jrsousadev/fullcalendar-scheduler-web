import EventCalendarModel from "../modules/EventCalendar/entities/EventCalendarModel";

interface ICreateEventCalendar {
  title: string;
  start: string;
  end: string;
  backgroundColor: string;
  textColor: string;
}

interface IGetOneEventCalendar {
  _id: string
}

interface IUpdateEventCalendar {
  _id: string;
  title: string;
  start: string;
  end: string;
  backgroundColor: string;
  textColor: string;
}

interface IDeleteEventCalendar {
  _id: string;
}

export class EventCalendarRepository {
  async create(data: ICreateEventCalendar) {
    try {
      return await new EventCalendarModel(data).save();
    } catch (err) {
      throw err;
    }
  }

  async getAll() {
    try {
      return await EventCalendarModel.find({});
    } catch (err) {
      throw err;
    }
  }

  async getOne({ _id }: IGetOneEventCalendar) {
    try {
      return await EventCalendarModel.findOne({_id});
    } catch (err) {
      throw err;
    }
  }

  async delete({_id}: IDeleteEventCalendar) {
    try {
      return await EventCalendarModel.findOneAndDelete({_id});
    } catch (err) {
      throw err;
    }
  }

  async update(data: IUpdateEventCalendar) {
    try {
      return await EventCalendarModel.findOneAndUpdate({
        _id: data._id,
      }, {
        $set: data
      }, {
        new: true,
      })
    } catch (err) {
      throw err;
    }
  }
}
