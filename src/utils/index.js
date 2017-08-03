import moment from 'moment';

export const toHumanTime = time => moment(time).utc().fromNow();
