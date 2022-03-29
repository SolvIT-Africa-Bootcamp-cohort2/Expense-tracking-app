import T from "../models/Transaction";


export const isDeficit = async (accountId) => {
  const [{expenseTotal}] = await T.Transaction.aggregate([
    {
      $match: { type: "expense", accountId: accountId },
    },
    {
      $group: {
        _id:null,
        expenseTotal: { $sum: { $add: "$amount" } },
      },
    },
  ]);

    const [{incomeTotal}] = await T.Transaction.aggregate([
    {
      $match: { type: "income", accountId: accountId },
    },
    {
      $group: {
        _id:null,
        incomeTotal: { $sum: { $add: "$amount" } },
      },
    },
  ]);
  return expenseTotal > incomeTotal ? true : false;
};
