import db from "../models/index";
import CRUDServices from "../services/CRUDServices";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();

    return res.render("homePage", {
      data: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
  }
};

let postCRUD = async (req, res) => {
  let message = await CRUDServices.createNewUser(req.body);
  let data = await CRUDServices.getAllUser();
  return res.render("displayCRUD.ejs", {
    data: JSON.stringify(data),
    message: message,
  });
};

let getCRUD = (req, res) => {
  return res.send("get CRUD");
};

let getAllUser = async (req, res) => {
  let data = await CRUDServices.getAllUser();
  return res.render("displayCRUD.ejs", {
    data: JSON.stringify(data),
  });
};

let getEditCRUD = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    let userData = await CRUDServices.getUserInfoById(userId);
    if (userData) {
      return res.render("editCRUD.ejs", { data: JSON.stringify(userData) });
    } else {
      return res.send({});
    }
  } else {
    return res.send("User not found");
  }
};

let putCRUD = async (req, res) => {
  let data = req.body;
  let userData = await CRUDServices.updateUserData(data);
  return res.render("displayCRUD.ejs", { data: JSON.stringify(userData) });
};

let getDeleteCRUD = async (req, res) => {
  let userId = req.query.id;
  console.log(userId);
  if (userId) {
    let allUser = await CRUDServices.deleteUserData(userId);
    return res.render("displayCRUD.ejs", { data: JSON.stringify(allUser) });
  }
};

module.exports = {
  getHomePage: getHomePage,
  postCRUD: postCRUD,
  getCRUD,
  getAllUser,
  getEditCRUD,
  putCRUD,
  getDeleteCRUD,
};
