
const { 
  startOfDay, 
  differenceInMinutes, 
  setHours, 
  setMinutes 
} = require('date-fns');

// Mock getVerticalPosition function
function getVerticalPosition(event) {
    const dayStart = startOfDay(event.start)
    const startMinutes = differenceInMinutes(event.start, dayStart)
    const endMinutes = differenceInMinutes(event.end, dayStart)

    const totalMinutesInDay = 24 * 60
    const top = (startMinutes / totalMinutesInDay) * 100
    const height = ((endMinutes - startMinutes) / totalMinutesInDay) * 100

    return {
        top,
        height: Math.max(height, 2),
        startMinutes,
        endMinutes,
        duration: endMinutes - startMinutes
    }
}

// Reproduction Cases
const today = new Date(); // Use today to avoid timezone confusion, or fixed date
today.setHours(0,0,0,0);

// Case 1: "abc" 12:00 AM - 11:47 PM
const abcStart = new Date(today);
abcStart.setHours(0, 0, 0, 0); // 12:00 AM
const abcEnd = new Date(today);
abcEnd.setHours(23, 47, 0, 0); // 11:47 PM

// Case 2: "temp" 8:00 AM - 5:04 PM
const tempStart = new Date(today);
tempStart.setHours(8, 0, 0, 0);
const tempEnd = new Date(today);
tempEnd.setHours(17, 4, 0, 0);

const events = [
    { name: 'abc', start: abcStart, end: abcEnd },
    { name: 'temp', start: tempStart, end: tempEnd }
];

events.forEach(event => {
    const pos = getVerticalPosition(event);
    console.log(`Event: ${event.name}`);
    console.log(`Start: ${event.start.toLocaleString()}`);
    console.log(`End: ${event.end.toLocaleString()}`);
    console.log(`Position:`, pos);
    console.log('---');
});
