const Router = require('express');
const Item = require('../models/Item');
const router = new Router();

router.post("/addItem",
    async (req, res) => {
        try {
            const item = new Item(req.body.item);
            item.ordered = 0;
            await item.save();
            return res.json({message: "Item was created"});
        } catch (error) {
            res.send({message: 'Server error'});
        };
});

router.post('/allItems',
    async (req, res) => {
        try {
            const item = await Item.find();
            return res.json(item);
        } catch (error) {
            res.send({message: 'Server error'});
        };
});

router.post('/getItem',
    async (req, res) => {
        try {
            const item = await Item.find();
            return res.json(item[req.body.index]);
        } catch (error) {
            res.send({message: 'Server error'});
        };
});

router.post('/deleteItem',
    async (req, res) => {
        try {
            const { _id } = req.body;
            await Item.deleteOne({_id});
            return res.json({message: "Item was deleted"});
        } catch (error) {
            res.send({message: 'Server error'});
        }
    }
);

router.post('/editItem',
    async (req, res) => {
        try {
            const { _id } = req.body.item;
            const item = await Item.findOne({_id});
            item.name = req.body.item.name;
            item.size = req.body.item.size;
            item.thick = req.body.item.thick;
            item.cost = req.body.item.cost;
            item.producer = req.body.item.producer;
            item.img = req.body.item.img;
            await item.save();
            return res.json({message: 'Item information was changed'});
        } catch (error) {
            res.send({message: 'Server error'});
        };
});

router.post('/orderItem',
    async (req, res) => {
        try {
            const {_id} = req.body.item;
            const item = await Item.findOne({_id});
            item.ordered += 1;
            await item.save();
        } catch (error) {
            res.send({message: "Server error"})
        }
    }
)

module.exports = router;