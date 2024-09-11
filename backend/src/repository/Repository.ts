export default interface Repository {
  save(object: any): any;
  getAll(): object[];
}
