const currentYear = new Date().getFullYear(); // 현재 연도 가져오기
const years = Array.from({ length: 4 }, (_, index) => currentYear - index).reverse(); // 올해부터 4년 전까지의 연도 배열 생성

export const data = {
   labels: years.map(year => String(year)),
   datasets: [
      {
         label: 'Data One',
         backgroundColor: '#9ca4b3',
         data: [946, 1103, 1076, 1014],
         borderRadius: [{ topLeft: 100, topRight: 100, bottomLeft: 0, bottomRight: 0 }],
         // borderSkipped: false,
         //borderWidth: 5, // 밖에 테두리
      },
   ],
};

export const options = {
   responsive: true,
   maintainAspectRatio: false,
};
