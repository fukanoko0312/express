var express = require('express');
var router = express.Router();
const cors = require('cors'); // cors�~�h���E�F�A��ǉ�
require('dotenv').config();

// �ڑ�����ݒ�
const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

// cors�~�h���E�F�A���g�p
router.use(cors());

router.get('/', async (req, res) => {
    // �f�[�^�x�[�X�A�R���N�V�������w��
    const database = client.db('notes');
    const notes = database.collection('notes');


    // �S�Ẵh�L�������g���擾
    const note = await notes.find({}).toArray();

    res.json(note);
})

module.exports = router;