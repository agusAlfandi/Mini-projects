import multer from 'multer';
import path from 'path';
import fs from 'fs';

export const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../public/images'));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage });

export const replace = multer({
  storage,
  fileFilter: (req, file, cb) => {
    // Check if the file already exists
    const filePath = path.join(
      __dirname,
      '../../public/images',
      file.originalname,
    );
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        // File does not exist, allow upload
        cb(null, true);
      } else {
        // File already exists, replace it
        fs.unlink(filePath, (err) => {
          if (err) {
            // Error occurred while deleting the file
            cb(null, false);
          } else {
            // File deleted successfully, allow upload
            cb(null, true);
          }
        });
      }
    });
  },
});
