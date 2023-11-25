/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  monday = 'monday',
  tuesday = 'tuesday',
  wednesday = 'wednesday',
  thursday = 'thursday',
  friday = 'friday'
}
enum Weekend {
  saturday = 'saturday',
  sunday = 'sunday'
}

function isWeekend(day: Days | Weekend): boolean {
  return day in Weekend;
}