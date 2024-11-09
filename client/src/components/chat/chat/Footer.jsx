import { React, useEffect } from 'react';
import { Box, Input, InputBase, styled } from '@mui/material';
import { EmojiEmotions, AttachFile, Mic } from '@mui/icons-material';
import { uploadFile } from '../../../services/api';

const Container = styled(Box)`
    height: 55px;
    background: #ededed;
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0 15px;
    & > * {
        margin: 5px;
        color: #919191;
    }
`;

const Search = styled(Box)`
    background-color: #fff;
    border-radius: 18px;
    width: calc(94% - 100px);
`;

const InputField = styled(InputBase)`
    width: 100%;
    padding: 20px;
    height: 20px;
    font-size: 14px;
`;

const ClipIcon = styled(AttachFile)`
    transform: rotate(40deg);
`;

export default function Footer({ sendText, setValue, value, file, setFile, setImage }) {

    const onFileChange = (e) =>{
        console.log(e);
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name);
    }

    useEffect(()=>{
        const getImage = async () =>{
            if(file){
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file); 

                let response = await uploadFile(data);
                console.log('response');
                for (let [key, value] of response.entries()) {
                    console.log(key, value);
                }
                
                setImage(response.data);
            }
        }
        getImage();
    },[file, setImage]);

    return (
        <Container>
            <EmojiEmotions />
            <label htmlFor="fileInput">
                <ClipIcon />
            </label>
            <Input
                style={{ display: 'none'}}
                type="file"
                id="fileInput"
                onChange={(e)=> onFileChange(e) } />
            <Search>
                <InputField
                    placeholder='Type a message'
                    onChange={(e) => setValue(e.target.value)}
                    onKeyUp={(e) => sendText(e)}
                    value={value}
                />
            </Search>
            <Mic />
        </Container>
    )
}
