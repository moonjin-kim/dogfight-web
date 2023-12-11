export const colors = {
  main : "#08D9D6",
  main2 : "#252A34",
  sub1 : "#FF2E63",
  sub2 : "#EAEAEA",
  white : "#FFFFFF",
  gray1 : "#F8F8F9",
  gray2 : "#E7E7E7",
  gray3 : "#B1B1B1",
  gray4 : "#7E7E7E",
  gray5 : "#2A2A2A",
  gray6 : "7E7E7E",
  black : "#000000",
  link : "#0645AD"
}
export const rgba = (colorCode, alpha) => {
  // '#' 다음에 두 자리씩 추출하여 16진수로 변환
  const r = parseInt(colorCode.slice(1, 3), 16);
  const g = parseInt(colorCode.slice(3, 5), 16);
  const b = parseInt(colorCode.slice(5, 7), 16);
  
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};