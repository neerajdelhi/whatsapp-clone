
import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv';
dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const storage = new GridFsStorage({
    url : `mongodb+srv://${username}:${password}@cluster0.cterocv.mongodb.net/clone-whatsapp`,
    file: (req, file) => {
        const match = ['image/jpg', 'image/png'];

        if(match.indexOf(file.mimeType) === -1 ){
            return `${Date.now()}-file-${file.originalname}`
        }

        return {
            bucketName: 'photos',
            filename: `${Date.now()}-file-${file.originalname}`
        }
    }
});

export default multer({ storage });