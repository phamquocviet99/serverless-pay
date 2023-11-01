import { ulid } from "ulid";
import mongoose from "mongoose";

// BankAccount Config
const PackageUseSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      require: true,
      default: () => ulid(),
    },
    name: {
      type: String,
      require: true,
      default: "Chưa cập nhật",
    },
    timeUsed: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
      default: 0,
    },
    numberTransactionOfMonth: {
      type: Number,
      require: true,
      default: 0,
    },
    utilities: {
      type: Array,
      require: true,
      default: [],
    },
    description: {
      type: String,
      require: true,
      default: "Chưa cập nhật",
    },
    isActive: {
      type: Boolean,
      require: true,
      default: true,
    },
  },
  { timestamps: true }
);
PackageUseSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});
export const PackageUseModel = mongoose.model("PackageUse", PackageUseSchema);
// PackageUse Actions
///---Get All
export const getPackageUse = () => PackageUseModel.find();
///---Get All Package Active
export const getPackageUseActive = () =>
  PackageUseModel.find({ isActive: true });
///---Get By ID
export const getPackageUseById = (id: string) =>
  PackageUseModel.findById({ _id: id });
///---Get By Time Used
export const getPackageUseByTime = (timeUsed: string) =>
  PackageUseModel.find({ timeUsed });
///---Create Package
export const createPackageUse = (values: Record<string, any>) =>
  new PackageUseModel(values).save().then((p) => p.toObject());
///---Delete Package
export const deletePackageById = (id: string) =>
  PackageUseModel.findOneAndDelete({ _id: id });
///---Updage Package
export const updatePackageById = (id: string, values: Record<string, any>) =>
  PackageUseModel.findByIdAndUpdate(id, values);
