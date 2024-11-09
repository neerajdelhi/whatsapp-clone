import { useContext, React, useState } from 'react';
import { AccountContext } from '../../../context/AccountProvider';
import { Box, styled } from '@mui/material';
import { Chat } from '@mui/icons-material';
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../drawer/InfoDrawer';


const Component = styled(Box)`
    height:44px;
    background: #ededed;
    padding: 8px 16px;
    display:flex;
    align-item:center;
`;

const Image = styled('img')({
    width: 40,
    height: 40,
    borderRadius: '50%'
});

const Wrapper = styled(Box)`
    margin-left:auto;
    & > * {
        margin-right: 2px;
        padding:8px;
        color:#000;
    };
      &  :first-child{
            font-size:22px;
            margin-right: 8px;
            margin-top: 3px;
        }
`;

export default function Header() {

    const [openDrawer, setopenDrawer ] = useState(false);

    const toggleDrawer = () =>{
        setopenDrawer(!openDrawer);
    }

    const { account } = useContext(AccountContext);

    return (
        <>
            <Component>
                <Image src={account.picture} alt="dp" onClick={()=> toggleDrawer()}/>
                <Wrapper>
                    <Chat />
                    <HeaderMenu setopenDrawer={setopenDrawer}/>
                </Wrapper>
            </Component>
            <InfoDrawer  open={openDrawer} setOpen={setopenDrawer}/>
        </>
    )
}
