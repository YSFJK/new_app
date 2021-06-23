const express=require('express');
const router=express.Router();

router.get('/' ,(req,res,next) => {
    let data={
        title:'Hello!',
        content:'これは、サンプルのコンテンツです。<br>thi is sample content.'
    };
    res.render('hello',data);
});

module.exports=router;