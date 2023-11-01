import { BadRequest, Ok, ServerError } from "../config/Response.config";
import express from "express";
import {
  createPackageUse,
  deletePackageById,
  getPackageUse,
  getPackageUseActive,
  getPackageUseById,
  updatePackageById,
} from "../db/packageUse.model";
import { cachePackageUse } from "../config/cache.config";

export const getAll = async (req: express.Request, res: express.Response) => {
  try {
    let listPackageUses = cachePackageUse.get("all-package-use-cache");
    if (!listPackageUses) {
      console.log("Không");
      listPackageUses = await getPackageUse();
      cachePackageUse.set("all-package-use-cache", listPackageUses);
    }
    return Ok(res, listPackageUses);
  } catch (error) {
    return ServerError(res, error.message);
  }
};
export const getAllActive = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    let listPackageUses = cachePackageUse.get("all-package-use-cache-active");
    if (!listPackageUses) {
      console.log("Không1");
      listPackageUses = await getPackageUseActive();
      cachePackageUse.set("all-package-use-cache-active", listPackageUses);
    }
    return Ok(res, listPackageUses);
  } catch (error) {
    return ServerError(res, error.message);
  }
};
export const getById = async (req: express.Request, res: express.Response) => {
  try {
    const id = req.params.id;
    if (!id) {
      return BadRequest(res, "Trường ID là bắt buộc");
    }
    const packageUse = await getPackageUseById(id);
    return Ok(res, packageUse);
  } catch (error) {
    return ServerError(res, error.message);
  }
};
export const remove = async (req: express.Request, res: express.Response) => {
  try {
    const id = req.params.id;
    const deletedUser = await deletePackageById(id);
    return Ok(res, deletedUser, "Xoá thành công");
  } catch (error) {
    return ServerError(res, error.message);
  }
};
export const update = async (req: express.Request, res: express.Response) => {
  try {
    const id = req.params.id;
    const {
      name,
      timeUsed,
      price,
      numberTransactionOfMonth,
      utilities,
      description,
    } = req.body;
    if (
      !name ||
      !price ||
      !timeUsed ||
      !numberTransactionOfMonth ||
      !utilities
    ) {
      return BadRequest(res, "Thiếu trường dữ liệu !");
    }

    const updatePackageUse = await updatePackageById(id, {
      name,
      timeUsed,
      price,
      numberTransactionOfMonth,
      utilities,
      description,
    });
    return Ok(res, updatePackageUse, "Cập nhật thành công");
  } catch (error) {
    return ServerError(res, error.message);
  }
};

export const create = async (req: express.Request, res: express.Response) => {
  try {
    const {
      name,
      timeUsed,
      price,
      numberTransactionOfMonth,
      utilities,
      description,
    } = req.body;

    if (
      !name ||
      !price ||
      !timeUsed ||
      !numberTransactionOfMonth ||
      !utilities
    ) {
      return BadRequest(res, "Thiếu trường dữ liệu !");
    }

    const newPackage = await createPackageUse({
      name,
      timeUsed,
      price,
      numberTransactionOfMonth,
      utilities,
      description,
    });
    return Ok(res, newPackage);
  } catch (error) {
    return ServerError(res, error.message);
  }
};
