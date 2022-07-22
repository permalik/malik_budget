import React, {ChangeEvent, useState} from "react";
import AccountService from "../../services/AccountService";
import IAccountData from "../../types/account.type";

const AddAccount: React.FC = () => {
  const initialAccountState = {
    id: null,
    title: "",
    amount: 0,
    type: "",
    status: "",
    frequency: "",
    date: new Date,
    reoccur: false,
    note: "",
    important: false,
    tags: []
  };
  const [account, setAccount] = useState<IAccountData>(initialAccountState);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setAccount({...account, [name]: value});
  };
  const saveAccount = () => {
    let data = {
      title: account.title,
      amount: account.amount,
      type: account.type,
      status: account.status,
      frequency: account.frequency,
      date: account.date,
      reoccur: account.reoccur,
      note: account.note,
      important: account.important,
      tags: account.tags
    };
    AccountService.create(data)
      .then(response => {
        setAccount({
          id: response.data.id,
          title: response.data.title,
          amount: response.data.amount,
          type: response.data.type,
          status: response.data.status,
          frequency: response.data.frequency,
          date: response.data.date,
          reoccur: response.data.reoccur,
          note: response.data.note,
          important: response.data.important,
          tags: response.data.tags
        });
        setSubmitted(true);
      })
      .catch((error: Error) => {
        console.log(error);
      });
  };
  const newAccount = () => {
    setAccount(initialAccountState);
    setSubmitted(false);
  };
  return (
    <div>
      {submitted ? (
          <div>
            <h2>success</h2>
            <button onClick={newAccount}>add</button>
          </div>
        ) :
        (
          <div>
            <label htmlFor={"title"}>title</label>
            <input
              name={"title"}
              onChange={handleChange}
              required
              type={"text"}
              value={account.title}
            />
            <button onClick={saveAccount}>submit</button>
          </div>
        )}
    </div>
  );
};

export default AddAccount;