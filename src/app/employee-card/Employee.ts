export interface Employee {
  picture: string;
  stats: {
    [key: string]: number; // Add index signature
  };
  name: string;
}
// export interface Employee {
//   picture: string;
//   stats: {
//     SP: number;
//     HP: number;
//     WS: number;
//     ASMS: number;
//   };
//   name: string;
// }
