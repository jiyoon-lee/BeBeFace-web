export class CurrentDateTime {
  year: number;
  month: string | number;
  day: string | number;
  hours: string | number;
  minutes: string | number;
  ampm: string;
  constructor() {
    const now = new Date();
    // 년, 월, 일, 시, 분 정보 가져오기
    this.year = now.getFullYear();
    this.month = now.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줍니다.
    this.day = now.getDate();
    this.hours = now.getHours();
    this.minutes = now.getMinutes();
    // 오전/오후 표시 설정
    this.ampm = this.hours >= 12 ? "PM" : "AM";

    // 시간이 12 이상일 경우 12를 빼서 12시간제로 변환
    this.hours = this.hours % 12;
    this.hours = this.hours ? this.hours : 12; // 0시일 경우 12로 표시

    // 한 자리 수일 경우 앞에 0을 붙이기
    this.month = this.month < 10 ? "0" + this.month : this.month;
    this.day = this.day < 10 ? "0" + this.day : this.day;
    this.hours = this.hours < 10 ? "0" + this.hours : this.hours;
    this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
  }
  getDate() {
    return this.year + "년 " + this.month + "월 " + this.day + "일 ";
  }
  getTime() {
    return this.ampm + " " + this.hours + ":" + this.minutes;
  }
  getDateDash() {
    return `${this.year}-${this.month}-${this.day}`;
  }
}
