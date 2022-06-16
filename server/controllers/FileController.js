//Imports
const File = require("../models/File"); //File Model
const ResponseService = require("../utils/ResponseService"); // Response service
const cloudinary = require("cloudinary");

//create
exports.create = (async (req, res) => {
    try {
        if (!req.file)
            return res.status(400);
        try {
            uploadedFile = await cloudinary.uploader.upload(req.file.path, {
                folder: "Vault",
                resource_type: 'auto'
            })
        } catch (error) {
            console.log(error.message)
        }

        const {originalname} = req.file;
        const {secure_url,bytes,format} =uploadedFile;
        const  {addedOn,addedBy,motherFolder,} = req.body;
        const file = await File.create({
            name : originalname,
            file : secure_url,
            size : bytes,
            format,
            addedOn,
            addedBy,
            motherFolder,
        });
        res.status(200).json(file);
    } catch (error) {
        console.log(error.message)
    }

});


//get download
exports.getByIdDownload = (async (req, res) => {
    try {
        if (!req.file)
            return res.status(400);
        

        const {originalname} = req.file;
        const {secure_url,bytes,format} =uploadedFile;
        const {addedOn,addedBy} = req.body;

        atus(200).json(file);
    } catch (error) {
        return res.status(500).json({});
    }

});

// Get All Files when mother folder !== null
exports.getAllByID = (async (req, res) => {
    const fileId = req.params.id;
    File.find({ motherFolder: fileId }, (err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res);
    })
        .sort({ addedOn: -1 })
});

// Get All Files when mother folder == null
exports.getAll = (async (req, res) => {
    File.find({ motherFolder: null }, (err, doc) => {
        ResponseService.generalPayloadResponse(err, doc, res);
    })
        .sort({ addedOn: -1 })
});