import bcrypt from "bcryptjs";
import db from "../models/index";

const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPasswordFromBrcypt = await hashUserPassword(data.password);
      await db.User.create({
        email: data.email,
        password: hashPasswordFromBrcypt,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        gender: data.gender === "1" ? true : false,
        roleId: data.roleId,
        phoneNumber: data.phoneNumber,
      });
      resolve("Add user successfully");
    } catch (e) {
      reject(e);
    }
  });
};

let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};

let getAllUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.User.findAll({
        raw: true,
      });
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
};

let getUserInfoById = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.User.findOne({ where: { id: userId }, raw: true });
      if (data) {
        resolve(data);
      } else {
        resolve({});
      }
    } catch (e) {
      reject(e);
    }
  });
};

let updateUserData = (userData) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { id: userData.id },
      });
      console.log(user);
      if (user) {
        user.firstName = userData.firstName;
        user.lastName = userData.lastName;
        user.address = userData.address;
        await user.save();

        let allUser = await db.User.findAll({ raw: true });
        resolve(allUser);
      } else {
        resolve();
      }
    } catch (error) {
      reject(error);
    }
  });
};

let deleteUserData = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = await db.User.findOne({ where: { id: userId } });
      await userData.destroy();
      let allUser = await db.User.findAll({ raw: true });
      console.log(allUser);
      resolve(allUser);
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = {
  createNewUser: createNewUser,
  getAllUser,
  getUserInfoById,
  updateUserData,
  deleteUserData,
};
