import { useContext, React } from 'react';
import { Dialog, Box, Typography, List, ListItem, styled } from '@mui/material'
import pdf_logo from '../../assets/27_Pdf_File_Type_Adobe_logo_logos-512.png'
import profile_avatar from '../../assets/78-785827_user-profile-avatar-login-account-male-user-icon.png'
import qrcocode from '../../assets/qrcode.jpg'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { AccountContext } from '../../context/AccountProvider';
import { addUser } from '../../services/api';


const DialogStyle = {
    height: '96%',
    marginTop: '12%',
    width: '70%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overflow: 'hidden'
}

const Component = styled(Box)`
    display:flex;
`;

const Container = styled(Box)`
    padding: 56px 0 56px 56px;
`;

const QrCode = styled('img')({
    height: 264,
    width: 264,
    margin: '50px 0 0 50px'
});

const Title = styled(Typography)`
    font-size:1.75rem;
    color: #41525d;
    font-weight: 300;
    font-family: inherit;
    margin-bottom: 20px;
    line-height: normal;
`;

const StyledList = styled(List)`
 & > li {
    padding:0;
    margin-top:15px;
    font-size:16px;
    line-height:28px;
 }
`;

export default function LoginDialog() {

    const { setAccount } = useContext(AccountContext);

    const onLoginSuccess = async (res) => {
        const decode = jwtDecode(res.credential);
        // console.log(decode);
        setAccount(decode);
        await addUser(decode);
    }

    const onLoginError = (res) => {
        console.log('Error ', res);
    }

    return (
        <Dialog
            open={true}
            PaperProps={{ sx: DialogStyle }}
            hideBackdrop={true}
        >
            <Component>
                <Container>
                    <Title>Use WhatsApp on your computer</Title>
                    <StyledList>
                        <ListItem>1. Open WhatsApp on your phone</ListItem>
                        <ListItem>2. Tap Menu Settings  on Android, or on iPhone</ListItem>
                        <ListItem>3. Tap Link devices and then link a device</ListItem>
                        <ListItem>4. Point your phone at this screen to capture the QR code</ListItem>
                    </StyledList>
                </Container>
                <Box style={{position:'relative'}}>
                    <QrCode src={qrcocode} alt="qr code" />
                    <Box style={{position:'absolute', top:'50%', transform: 'translateX(25%)'}}>
                        <GoogleLogin
                            onSuccess={onLoginSuccess}
                            onError={onLoginError}
                        />
                    </Box>
                </Box>
            </Component>
        </Dialog>
    )
}
