import http from "../controllers/http_common";
import IAccountData from "../types/account.type";

const create = (data: IAccountData) => {
  return http.post<IAccountData>("/accounts", data);
};

const getAll = () => {
  return http.get<Array<IAccountData>>("/accounts");
};

const get = (id: string) => {
  return http.get<IAccountData>(`/accounts/${id}`);
};

const update = (data: IAccountData, id: any) => {
  return http.put<any>(`/accounts/${id}`, data);
};

const removeAll = () => {
  return http.delete<any>(`/accounts`);
};

const remove = (id: any) => {
  return http.delete<any>(`/accounts/${id}`);
};

const findByTitle = (title: string) => {
  return http.get<Array<IAccountData>>(`/accounts?title=${title}`);
};

const AccountService = {
  create,
  getAll,
  get,
  update,
  removeAll,
  remove,
  findByTitle
};

export default AccountService;