import {Router} from 'express';
const subscriptionRouter = Router();

subscriptionRouter.get('/',(req,res)=>{
    res.send({title :' get all the subscription'})
});
subscriptionRouter.get('/:id',(req,res)=>{
    res.send({title :' get the details of the subscription'})
});
subscriptionRouter.post('/',(req,res)=>{
    res.send({title :' create new subscription'})
});
subscriptionRouter.put('/:id',(req,res)=>{
    res.send({title :' update  subscription'})
});
subscriptionRouter.delete('/:id',(req,res)=>{
    res.send({title :' delete the subscription'})
});
subscriptionRouter.get('/user/:id',(req,res)=>{
    res.send({title :' get all the user subscription'})
});
subscriptionRouter.put('/:id/cancel',(req,res)=>{
    res.send({title :' cancel all the subscription'})
});
subscriptionRouter.get('/upcoming-renewals',(req,res)=>{
    res.send({title :' get upcoming renewals '})
});


export  default subscriptionRouter ;