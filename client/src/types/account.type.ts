export default interface IAccountData {
  id?: any | null;
  title: string;
  amount: number;
  type: string;
  status: string;
  frequency: string;
  date: Date;
  reoccur: boolean;
  note: string;
  important: boolean;
  tags: string[];
}