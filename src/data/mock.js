// Статичні дані для верстки (лаб. 4). У лаб. 6-7 їх замінять запити до сервера.
export const lessons = [
  { id: 1, day: "Пн", time: "18:00", title: "Hip-hop", trainer: "Анна", free: 6 },
  { id: 2, day: "Пн", time: "19:30", title: "Latina", trainer: "Олег", free: 2 },
  { id: 3, day: "Вт", time: "18:00", title: "Contemporary", trainer: "Марія", free: 8 },
  { id: 4, day: "Вт", time: "19:30", title: "Jazz-funk", trainer: "Анна", free: 0 },
  { id: 5, day: "Ср", time: "17:30", title: "Stretching", trainer: "Марія", free: 10 },
  { id: 6, day: "Ср", time: "19:00", title: "Hip-hop", trainer: "Олег", free: 4 },
  { id: 7, day: "Чт", time: "18:00", title: "Latina", trainer: "Олег", free: 5 },
  { id: 8, day: "Чт", time: "19:30", title: "Contemporary", trainer: "Марія", free: 1 },
  { id: 9, day: "Пт", time: "18:00", title: "Hip-hop", trainer: "Анна", free: 7 },
  { id: 10, day: "Пт", time: "19:30", title: "Jazz-funk", trainer: "Анна", free: 3 },
];

export const subscription = { name: "8 занять на місяць", left: 5, total: 8, until: "15 грудня" };

export const history = [
  { date: "16.11", group: "Hip-hop", present: true },
  { date: "12.11", group: "Latina", present: true },
  { date: "09.11", group: "Hip-hop", present: false },
  { date: "05.11", group: "Latina", present: true },
];
