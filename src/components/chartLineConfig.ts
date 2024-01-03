const currentYear = new Date().getFullYear(); // 현재 연도 가져오기
const years = Array.from({ length: 4 }, (_, index) => currentYear - index).reverse(); // 올해부터 4년 전까지의 연도 배열 생성

export const data = {
   labels: years.map(year => String(year)),
   datasets: [
      {
         label: 'Data One',
         backgroundColor: '#fff',
         data: [36000, 42000, 53000, 66000],
      },
   ],
};

export const options = {
   responsive: true,
   borderColor: '#57a0e5', //
   maintainAspectRatio: false,
   borderWidth: 4,
   // clip: 10,
   // drawActiveElementsOnTop: false,
   pointBackgroundColor: '#fff',
   pointBorderWidth: 2, // 포인트 선 사이즈
   pointRadius: 10, // 포인트 크기
   pointBorderColor: '#abc', // 포인트 선 색
   pointHoverRadius: 12, // :hover 포인트 사이즈
   pointHoverBorderWidth: 2, // :hover 포인트 선
   pointHoverBackgroundColor: '#fff',
   layout: {
      // padding: 8,
      // padding: {
      //    left: 50,
      // },
      // margin: 100,
   },

   // scales: {
   //    r: {
   //       ticks: {
   //          backdropPadding: {
   //             x: 10,
   //             y: 4,
   //          },
   //       },
   //    },
   // },
};
