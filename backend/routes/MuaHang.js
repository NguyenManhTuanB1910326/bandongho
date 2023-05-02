const express = require('express');
const router = express.Router();
const MuaHang = require('../middleware/MuaHang');
router.post("/muahang", MuaHang.MuaHang);
router.get("/laydathang", MuaHang.LayMuaHang);
router.get("/laydathang/:id", MuaHang.LayMuaHangId);
router.get("/lichsudonhang/:id", MuaHang.LayMuaHangIdUser);
router.patch("/capnhat/:id", MuaHang.CapNhat);
// async function getMuaHang(req, res, next){
//     let m
//     try{
//         m = await m.findById(req.params.id);
//         if(m==null){
//             //Lỗi 404 không tìm thấy
//             return res.status(404).json({message: "Không tìm thấy"});
//         }
//     }catch(err){
//         return res.status(500).json({err: err.message});
//     }
//     res.m = m;
//     next();
// }
module.exports = router;
