const {validatorresult}=require('express-validator/check');

exports.getposts=(req,res,next)=>{
    res.status(200).jason({
        posts:[{title:'First Post',content:'this is first post'}]
    });
};

exports.createpost=(req,res,next)=>{
    const errors=validatorresult(req);
    if(!errors.isEmpty()){
        return res
        .status(422)
        .json(
            {
                message:'validation failed',
                errors:errors.array()
            }
        );
    }
    const tilte=req.body.tilte;
    const content=req.body.contents;
    //create post in db
    res.status(201).jason({
        message:'post created suceessfully!',
        post:{
            _id:new Date().toISOString,
            title:title,
            content:content,
            creator:{name:'amit'},
            createdat:new Date()
        }
    })
}