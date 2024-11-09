import grid from 'gridfs-stream';
import mongoose from 'mongoose';

const url = "http://localhost:8000";
const conn = mongoose.connection;

let gfs,GridFSBucket;
conn.once('open', () =>{
    GridFSBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'fs'
    });
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('fs');
}); 

export const uploadFile = async (request, response) => {
    try {
        if (!request.file) {
            return response.status(404).json('File not found.');
        }

        const imageUrl = `${url}/file/${request.file.filename}`;

         console.log('File uploaded successfully:', imageUrl);
        return response.status(200).json({ imageUrl });
    } catch (error) {
        console.error('Error during file upload:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const getImage = async (request, response) =>{
    try {
        const file = await gfs.files.findOne({ filename: request.params.filename });

        const readStream = GridFSBucket.openDownloadStream(file._id);
        readStream.pipe(response);
    } catch (error) {
        return response.status(500).json('error while calling getImage api', error.message);
    }
}