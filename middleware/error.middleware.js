const errorMiddleware = (err,req,res,next)=>{
    try{
         let error = {...err}
         error.message = err.message;

        // monngoose bad objectid 
         if(err.name =='CasteError'){
            const message = 'resourse not found ';
            error =new Error(message);
            error.statusCode =404;
         }
         //mongoose dulicate key
         if(err.code =='11000'){
            const message = 'dulicate field value entered';
            error = new Error(message);
            error.statusCode = 400;
         }
         //mongoose validation error
         if(err.name=='ValidationError'){
            const message = Object.values(err.errors).map(val=>val.message);  
            error = new Error(message.join(', '));
            error.statusCode =400; 
         }  
         res.status(error.statusCode || 500 ).json({succes:false ,error :error.message ||'server Error'});
    }
    catch(error){
        next(error);
    }
}
export default errorMiddleware;