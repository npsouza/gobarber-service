import { Op } from 'sequelize';
import {
  startOfDay,
  endOfDay,
  setSeconds,
  setMinutes,
  setHours,
  format,
  isAfter,
} from 'date-fns';
import Appointment from '../models/Appointment';

class AvailableService {
  async run({ provider_id, date }) {
    const appoitments = await Appointment.findAll({
      where: {
        provider_id,
        canceled_at: null,
        date: {
          [Op.between]: [startOfDay(date), endOfDay(date)],
        },
      },
    });

    const schedule = [
      '08:00',
      '09:00',
      '10:00',
      '11:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '18:00',
    ];

    const available = schedule.map(time => {
      const [hour] = time.split(':');
      const value = setSeconds(setMinutes(setHours(date, hour), 0), 0);

      return {
        time,
        value: format(value, "yyyy-MM-dd'T'HH:mm:ssxxx"),
        available:
          isAfter(value, new Date()) &&
          !appoitments.find(a => format(a.date, 'HH:mm') === time),
      };
    });

    return available;
  }
}

export default new AvailableService();
