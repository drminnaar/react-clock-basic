export default class DateTime {

    constructor(date) {
        this.date = date ? date : new Date();

        this.monthNames = [
            'January', 'February', 'March',
            'April', 'May', 'June',
            'July', 'August', 'September',
            'October', 'November', 'December'
        ];
    
        this.dayNames = [
            'Monday', 'Tuesday', 'Wednesday',
            'Thursday', 'Friday', 'Saturday', 'Sunday'
        ];
    }

    hours() {
        return this.formatUnitOfTime(this.date.getHours());
    }

    minutes() {
        return this.formatUnitOfTime(this.date.getMinutes());
    }

    seconds() {
        return this.formatUnitOfTime(this.date.getSeconds());
    }

    dayOfWeek() {
        return this.dayNames[this.date.getDay() - 1];
    }

    dayOfMonth() {
        return this.formatUnitOfTime(this.date.getUTCDate());
    }

    month() {
        return this.monthNames[this.date.getMonth()];
    }

    year() {
        return `${this.date.getFullYear()}`;
    }

    formatUnitOfTime(unitOfTime) {
        return unitOfTime < 10 ? `0${unitOfTime}` : `${unitOfTime}`;
    }

    static toDateString(date) {
        var dateTime = new DateTime(date);

        return `${dateTime.dayOfWeek().substring(0, 3)} ${dateTime.dayOfMonth()} ${dateTime.month()} ${dateTime.year()}`;
    }

    static toTimeString(date) {
        var dateTime = new DateTime(date);

        return `${dateTime.hours()}:${dateTime.minutes()}:${dateTime.seconds()}`;
    }
}