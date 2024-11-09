import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';

const ImageContainer = styled(Box)`
    display: flex;
    justify-content: center;
`;

const Image = styled('img')({
    width: 200,
    height: 200,
    borderRadius: '50%',
    padding: '25px 0'
});

const BoxWrapper = styled(Box)`
    background: #fff;
    padding: 12px 30px 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.08);
    & : first-child{
        font-size: 13px;
        color: #009688;
        font-weight: 200;
    }
    & :last-child{
        margin: 14px 0;
        color: #4A4A4A;
    }
`;

const DesContainer = styled(Box)`
    padding: 15px 20px 28px 30px;
    & > p {
        font-size: 13px;
        color: #869680;
    }
`;

export default function Profile() {

const  { account } = useContext(AccountContext);
  return (
    <>
    <ImageContainer>
        <Image src={
            
            account.picture ? account.picture
            : 'https://as1.ftcdn.net/v2/jpg/07/31/24/86/1000_F_731248607_M6ANlqrqiliucBarX1zSlqANRmsMgeXZ.jpg'
             } alt="" />
    </ImageContainer>
    <BoxWrapper>
        <Typography>Your Name</Typography>
        <Typography>{account.name}</Typography>
    </BoxWrapper>
    <DesContainer>
        <Typography>This is not your username or pin. This name will be visible to your WhatsApp Contacts.</Typography>
    </DesContainer>
    <BoxWrapper>
        <Typography>About</Typography>
        <Typography>EAT | SLEEP | CODE | REPEAT</Typography>
    </BoxWrapper>
    </>
  )
}
