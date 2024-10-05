// Типізуйте функцію isWeekend яка приймає день тижня з enumDayOfWeek і повертає boolean значення, що вказує, чи це день робочий чи вихідний.

enum DayOfWeek {
  Mon= "Monday",
  Tues= "Tuesday",
  Wed= "Wednesday",
  Thur = "Thursday",
  Fri = "Friday",
  Sat = "Saturday",
  Sun = "Sunday"
}


const isWeekend = (day: DayOfWeek): boolean => {
  return day === DayOfWeek.Sat || day === DayOfWeek.Sun;
}

console.log(isWeekend(DayOfWeek.Mon));