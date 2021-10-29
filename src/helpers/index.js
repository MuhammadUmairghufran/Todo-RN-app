import moment from 'moment';
const TodayDay = () => moment().format('dddd');
const TodayDate = () => moment().format('MMMM D, YYYY');

export {
    TodayDay,
    TodayDate
}