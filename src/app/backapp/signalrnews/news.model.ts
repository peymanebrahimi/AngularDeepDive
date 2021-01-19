// export interface News {
//   id: string;
// }
export class NewsItem {
  // id = Date.parse((new Date()).toString()); 
  id!: number;
  constructor(public header: string,
    public newsText: string,
    public author: string,
    public newsGroup: string) { }
}
