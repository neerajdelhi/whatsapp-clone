import { React, useContext, useEffect, useState } from 'react';
import { AccountContext } from '../../../context/AccountProvider';
import { Box } from '@mui/material';
import ChatHeader from './ChatHeader';
import Messages from './Messages';
import { getConversation } from '../../../services/api';

export default function Chatbox() {
 
  const { person, account } = useContext(AccountContext);
  const [conversation, setConversation] = useState({});
  
  useEffect(()=>{
    const getConversationDetails = async () =>{
      let data = await getConversation({ senderId: account.sub, receiverId: person.sub });
      console.log('conversation api ',data);
      setConversation(data);
    }
    getConversationDetails();
  },[person.sub]);

  if (!person) {
    return <div>Loading...</div>; // Add a fallback UI if person is null or undefined
  }

  return (
    <Box style={{ height: '75%'}}>
        <ChatHeader person={person}/>
        <Messages person={person} conversation={conversation}/>
    </Box>
  )
}
