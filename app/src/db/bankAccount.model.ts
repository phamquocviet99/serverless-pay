import mongoose from "mongoose";

// BankAccount Config
const BankAccountSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      require: true,
    },
    uid: {
      type: String,
      require: true,
    },
    numberAccount: { type: String, required: true },
    fullNameAccount: { type: String, required: true },
  },
  { timestamps: true }
);
BankAccountSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});
export const BankAccountModel = mongoose.model(
  "BankAccount",
  BankAccountSchema
);

// // User Actions
// export const getUsers = () => UserModel.find();
// export const getUserByEmail = (email: string) => UserModel.findOne({ email });
// export const getUserBySessionToken = (sessionToken: string) =>
//   UserModel.findOne({ "authentication.sessionToken": sessionToken });
// export const getUserById = (id: string) => UserModel.findById(id);
// export const createUser = (values: Record<string, any>) =>
//   new UserModel(values).save().then((user) => user.toObject());
// export const deleteUserById = (id: string) =>
//   UserModel.findOneAndDelete({ _id: id });
// export const updateUserById = (id: string, values: Record<string, any>) =>
//   UserModel.findByIdAndUpdate(id, values);
