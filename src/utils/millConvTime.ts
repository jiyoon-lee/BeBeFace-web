export const millisecondsToKoreanTime = (milliseconds: number) => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor((totalSeconds % 86400) / 3600); // 86400초는 24시간
  const minutes = Math.floor((totalSeconds % 3600) / 60);

  // 시, 분, 초를 두 자리수로 표현하도록 조정
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  return `${formattedHours}시 ${formattedMinutes}분`;
};
