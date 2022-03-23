import T from "../models/Transaction";

export const getTransactions = async (req, res) => {
  try {
    const transaction = await T.Transaction.find({ userId: req.user["id"] });
    console.log("transactions", transaction);
    if (transaction.length == 0) {
      return res.status(204).send({ Message: "No transaction currently" });
    }
    res.status(200).send({ transaction: transaction });
  } catch (error) {
    // console.log(error);
    res
      .status(404)
      .send({ error: "Something went wrong while fetching transactions" });
  }
};

export const getTransactionByAccount = async (req, res) => {
  try {
    const transaction = await T.Transaction.find({
      userId: req.user["id"],
      accountId: req.params.account,
    });
    res.status(200).send({ transaction: transaction });
  } catch (error) {
    // console.log(error);
    res
      .status(404)
      .send({ error: "Something went wrong while fetching transactions" });
  }
};
