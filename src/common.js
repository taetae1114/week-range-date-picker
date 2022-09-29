Date.prototype.format = function() {
  let s = "";
  let mouth =
    this.getMonth() + 1 >= 10
      ? this.getMonth() + 1
      : "0" + (this.getMonth() + 1);
  let day = this.getDate() >= 10 ? this.getDate() : "0" + this.getDate();
  s += this.getFullYear() + "-"; // 获取年份。
  s += mouth + "-"; // 获取月份。
  s += day; // 获取日。
  return s; // 返回日期。
};

/**
 * @param date 传入的日期
 * @param num 加减的天数，加为正，减为负
 * @returns 格式化后的日期
 */
export function addDays(date, num) {
  date.setDate(date.getDate() + num);
  return date.format();
}

//将日期转换成一年中的第几周
export function getYearWeek(date) {
  //按照国际标准
  let time,
    week,
    checkDate = new Date(date);
  checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
  time = checkDate.getTime();
  checkDate.setMonth(0);
  checkDate.setDate(1);
  week = Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
  return week;
}

//获取当前count个周的起止日期，如：count=0 ,就是当前周，-1就是上周，以此类推
export function getWeekStartAndEnd(count, currentDate) {
  //起止日期数组
  let resultArr = new Array();
  let millisecond = 1000 * 60 * 60 * 24;
  currentDate = new Date(currentDate.getTime() + millisecond * 7 * count);
  let week = currentDate.getDay();

  //减去的天数
  let minusDay = week != 0 ? week - 1 : 6;
  //获得当前周的第一天
  let currentWeekFirstDay = new Date(
    currentDate.getTime() - millisecond * minusDay
  );
  //获得当前周的最后一天
  let currentWeekLastDay = new Date(
    currentWeekFirstDay.getTime() + millisecond * 6
  );

  resultArr.push(currentWeekFirstDay.format());
  resultArr.push(currentWeekLastDay.format());
  return resultArr;
}

//返回格式 2019年第23周，特别注意跨年一周的问题
export function getYearAndWeek(date, anotherDate) {
  let week = getYearWeek(date);
  let year = date.substring(0, 4);
  let anotherYear = anotherDate.substring(0, 4);
  //处理跨年特殊日期
  if (anotherDate > date) {
    let betweenDay = getBetweenDay(new Date(date), new Date(anotherDate));
    if (betweenDay == 7 && anotherYear != year) {
      if (week == 1) {
        year = parseInt(year) + 1;
      }
    }
  } else {
    let betweenDay = getBetweenDay(new Date(anotherDate), new Date(date));
    if (betweenDay == 7 && anotherYear != year) {
      if (week != 1) {
        year = parseInt(year) - 1;
      }
    }
  }
  return `${year}年第${week}周`;
}
export function getBetweenDay(beginDate, endDate) {
  let dateSpan = endDate - beginDate;
  dateSpan = Math.abs(dateSpan);
  let days = Math.floor(dateSpan / (24 * 3600 * 1000));
  return days + 1;
}
