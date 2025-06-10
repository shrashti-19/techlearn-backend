const express = require('express');
const router = express.Router();
const Progress = require('../models/Progress');

router.post('/',async(req,res)=>{
    try{
        const {user,course,completedChapters} = req.body;

        let progress = await Progress.findOne({user,course});

        if(progress){
            progress.completedChapters = completedChapters;
        }else{
            progress = new Progress({user,course, completedChapters});
        }
        await progress.save();
        res.status(200).json({message: 'Progress saved successfully'});
    }catch(error){
        console.error(error);
        res.status(500).json({error: 'Failed to update progress'})
    }
});

router.get('/:userId',async(req,res)=>{
    try{
        const userId = req.params.userId;
        const progress = await Progress.find({user: userId}).populate('course','title');
        res.status(200).json(progress);
    }catch(error){
        console.error(error);
        res.status(500).json({error: 'Failed to fetch progress'});
    }
});


module.exports = router;