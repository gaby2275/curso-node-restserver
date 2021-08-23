const { response, request } = require('express');

const userGet = (req= request, res = response) => {
    const {q = 'No query' , nombre = 'No name', apikey, limit} = req.query
    res.json({
        ok:true,
        msg:'Get Api',
        q,
        nombre,
        apikey
    })
};

const userPut = (req, res = response) => {
    const id = req.params.id;
    res.json({
        ok:true,
        msg:'Put Api',
        id
    })
};

const userPost = (req, res = response) => {
    const { nombre, edad } = req.body;
    res.json({
        ok:true,
        msg:'Post Api',
        nombre,
        edad
    })
};

const userDelete = (req, res = response) => {
    res.json({
        ok:true,
        msg:'Delete Api'
    })
};

const userPatch = (req, res = response) => {
    res.json({
        ok:true,
        msg:'Patch Api'
    })
};



module.exports = {
        userGet,
        userPut,
        userPost,
        userDelete,
        userPatch,
}