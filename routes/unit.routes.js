const route= require('express').Router();
// const controller=require('../controller/unit.controller');
// import {tbunit} from "../controller/unit.controller";

const { tbunit,deleteUnit,UpdateUnit,findOne } = require('../controller/unit.controller');
route.get('/all',tbunit);
route.get('/delete',deleteUnit);
route.put('/update',UpdateUnit);
route.get('/one',findOne);

module.exports = route;