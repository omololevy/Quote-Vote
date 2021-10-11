export class Quote {
  showDetails: boolean;
  constructor(public id: number, public quote: string, public description: string, public author: string, public submit_by: string, public postDate: Date, public likes: number, public dislikes: number) {
    this.showDetails = false;
  }
}
