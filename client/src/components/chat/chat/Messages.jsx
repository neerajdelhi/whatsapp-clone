import { useContext, React, useState, useEffect, useRef } from 'react';
import { AccountContext } from '../../../context/AccountProvider';
import { Box, styled } from '@mui/material';
import Footer from './Footer';
import { getMessages, newMessage } from '../../../services/api';
import Message from './Message';

const Wrapper = styled(Box)`
    background-image: url(${'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4c583318963089.5630d9223c9ea.png'})
`;

const Component = styled(Box)`
    height: 82vh;
    overflow-y: scroll;
`;

const Container = styled(Box)`
  padding: 1px 80px;
`;
export default function Messages({ person, conversation }) {

  const [value, setValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [newMessageFlag, setMessagesFlag] = useState(false);
  const [file, setFile] = useState();
  const [image, setImage] = useState('');
  const scrollRef = useRef;

  const { account, socket } = useContext(AccountContext);


  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getMessages(conversation._id);
      console.log('getmessages ', data);
      setMessages(data);
    }
    conversation._id && getMessageDetails();
  }, [person._id, conversation._id, newMessageFlag]);

  useEffect(() =>{
    scrollRef.current?.scrollIntoview({ transition: 'smooth'});
  },[messages]);

  const sendText = async (e) => {
    console.log(e);
    const code = e.keyCode || e.which;

    if (code === 13) {

      let message = {};
      if(!file){
        let message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: 'text',
          text: value
        }
      } else {
        let message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: 'file',
          text: image
        }
      }
      
      socket.current.emit("sendMessage", message);

      await newMessage(message);
      setValue('');
      setFile('');
      setImage('');
      setMessagesFlag(prev => !prev);
    }
  }

  return (
    <Wrapper>
      <Component>
        {
          messages.map(message => {

            return (
              <Container ref={scrollRef}>
                <Message message={message} />
              </Container>

            )
          })
        }
      </Component>
      <Footer
        sendText={sendText}
        setValue={setValue}
        value={value}
        file={file}
        setFile={setFile}
        setImage={setImage}
      />
    </Wrapper>
  )
}
