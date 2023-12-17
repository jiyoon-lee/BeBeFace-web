export const arrToTime = (dateTime: number[]) => {
  // 시, 분, 초를 두 자리수로 표현하도록 조정
  let hours: string | number = dateTime[3];
  let minutes: string | number = dateTime[4];
  let seconds: string | number = dateTime[5];
  let ampm = "";
  // 시간이 12 이상일 경우 12를 빼서 12시간제로 변환
  ampm = hours >= 12 ? "오후" : "오전";
  hours = hours % 12;
  hours = hours ? hours : 12; // 0시일 경우 12로 표시

  // 한 자리 수일 경우 앞에 0을 붙이기
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return `${ampm} ${hours}시 ${minutes}분 ${seconds}초`;
};
