// export interface News {
//   id: string;
// }
export class NewsItem {
  constructor(public header: string,
      public newsText: string,
      public author: string,
      public newsGroup: string) { }
}
