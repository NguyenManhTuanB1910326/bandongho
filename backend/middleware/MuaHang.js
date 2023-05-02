const { ObjectId } = require('mongodb/lib/bson');
const db = require('../db');
var _ = require('lodash');
const { response } = require('express');
exports.LayMuaHang = async (req, res, next) => {
    try {
        const dataDanhMuc = await db.connect();
      
        const all = await dataDanhMuc.db().collection('MuaHang').find({}).toArray()
        res.send(all);
    } catch (error) {
        res.status(500).send(error);
    }
}
exports.LayMuaHangId = async (req, res, next) => {
    try {
        const dataDanhMuc = await db.connect();
      
        const all = await dataDanhMuc.db().collection('MuaHang').findOne({_id: new ObjectId(req.params.id)});
        res.send(all);
    } catch (error) {
        res.status(500).send(error);
    }
}
exports.LayMuaHangIdUser = async (req, res, next) => {
    try {
        const dataDanhMuc = await db.connect();
      
        const all = await dataDanhMuc.db().collection('MuaHang').find({idkhachhang: req.params.id}).toArray();
        res.send(all);
    } catch (error) {
        res.status(500).send(error);
    }
}
exports.MuaHang = async (req, res) => {
    const dongho = req.body.dongho;
    const tongtien = req.body.tongtien;
    const tinh = req.body.tinh;
    const huyen =  req.body.huyen;
    const xa = req.body.xa;
    const diachi = req.body.diachi;
    const tennguoimua = req.body.tennguoimua;
    const sdt =  req.body.sdt;
    const tinhtrang =  req.body.tinhtrang;
    const idkhachhang =  req.body.idkhachhang;
    try {
        const datDC = await db.connect();
        const all = await datDC.db().collection('MuaHang').insertOne({
            dongho:dongho,
            tongtien: tongtien,
            tinh: tinh,
            huyen: huyen,
            xa: xa,
            diachi: diachi,
            tennguoimua: tennguoimua,
            sdt: sdt,
            tinhtrang: tinhtrang,
            idkhachhang: idkhachhang,
        });
        res.json({result: 'success', errorCode: 0, data: all});
       
       
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
        
    }
}
exports.CapNhat = async (req, res, next) => {
    try {
        const dataDanhMuc = await db.connect();
        const all1 = await dataDanhMuc.db().collection('MuaHang').updateOne({_id: new ObjectId(req.params.id)},{$set: {tinhtrang: req.body.tinhtrang}})
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}
// router.route('/:id')
//     .get(getsubscriber, (req,res) =>{
//         res.send(res.subscriber);
//     })
//     .patch(getsubscriber, async (req,res) => {
//         if(req.body.name!=null){
//             res.subscriber.name = req.body.name;
//         }
//         if(req.body.subscribersToChannel!=null){
//             res.subscriber.subscribersToChannel = req.body.subscribersToChannel;
//         }
//         try{
//             const updatedSub = await res.subscriber.save();
//             res.json(updatedSub);
//         }catch(err){
//             res.status(400).json({message: err.message});
//         }
//     })
//     .delete(getsubscriber, async (req, res) =>{
//         try{
//             await res.subscriber.deleteOne();
//             res.json({message:"deleted"});
//         }catch(err){
//             res.status(500).json({err: err.message})
//         }
//     })
// async function getsubscriber(req, res, next){
//     let subscriber
//     try{
//         subscriber = await subscribers.findById(req.params.id);
//         if(subscriber==null){
//             //Lỗi 404 không tìm thấy
//             return res.status(404).json({message: "Không tìm thấy"});
//         }
//     }catch(err){
//         return res.status(500).json({err: err.message});
//     }
//     res.subscriber = subscriber;
//     next();
// }