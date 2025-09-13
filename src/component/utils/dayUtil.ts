interface DayInfo {
  key:string,
  value:number,
  en:string,
  ja:string
}

const dayInfo:DayInfo[] = [
  { key:'sun', value:0, en: 'sun', ja: '日' },
  { key:'mon', value:1, en: 'mon', ja: '月' },
  { key:'thu', value:2, en: 'tue', ja: '火' },
  { key:'wed', value:3, en: 'wed', ja: '水' },
  { key:'thu', value:4, en: 'thu', ja: '木' },
  { key:'fri', value:5, en: 'fri', ja: '金' },
  { key:'sat', value:6, en: 'sat', ja: '土' },
]

export const getDays = ():DayInfo[] => {
  const l:DayInfo[] = []
  dayInfo.forEach(d => {
    l.push(d);
  })
  return l;
}

export const convertDayView = (dayNums:number[]):string => {
  if(dayNums.length === 0)return 'なし'

  const dayStr:string[] = dayNums.map(num => dayInfo[num]['ja']);
  return dayStr.join(',')
}