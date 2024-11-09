import { React, useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider.jsx';
import { Dialog, Box, styled } from '@mui/material';
import Menu from './menu/Menu.jsx'
import EmptyChat from './chat/EmptyChat.jsx';
import Chatbox from './chat/Chatbox.jsx';

const DialogStyle = {
  height: '96%',
  width: '100%',
  margin: '20px',
  maxWidth: '100%',
  maxHeight: '100%',
  boxShadow: 'none',
  overflow: 'hidden',
  borderRadius: 0
}

const Component = styled(Box)`
    display:flex;
`;
const LeftComponent = styled(Box)`
  width:450px;
`;

const RightComponent = styled(Box)`
  width:73%;
  min-width: 300px;
  height:100vh;
  border-left: 1px solid rgba(0,0,0, 0.14);
`;

export default function ChatDialog() {

  const { person } = useContext(AccountContext);
  return (

    <Dialog
      open={true}
      PaperProps={{ sx: DialogStyle }}
      hideBackdrop={true}
      maxWidth={'md'}
    >
      <Component>
        <LeftComponent>
          <Menu />
        </LeftComponent>
        <RightComponent>
          {/* <EmptyChat /> */}
          { Object.keys(person).length ? <Chatbox/> : <EmptyChat/>}
        </RightComponent>
      </Component>
    </Dialog>

  )
}
