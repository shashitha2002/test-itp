import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images'); // Specify the destination folder
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Keep the original filename
    },

    createParentPath: true

});

const upload = multer({ storage: storage });

export default upload;
