function dateTimeFormatter(date) {
    const currentDate = new Date(date);
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const displayHours = hours > 12 ? hours - 12 : hours;

    return `${dateFormatter(date)} at ${[10, 11, 12].includes(displayHours) ? displayHours : ('0' + displayHours)}:${minutes} ${(hours >= 12 ? ' PM' : ' AM')}`;
}

module.exports = dateTimeFormatter