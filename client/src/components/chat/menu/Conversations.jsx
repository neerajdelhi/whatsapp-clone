import { useEffect, React, useState, useContext } from 'react';
import { getUsers } from '../../../services/api';
import Conversation from './Conversation';
import { Box, styled, Divider } from '@mui/material';
import { AccountContext } from '../../../context/AccountProvider';

export default function Conversations({ text }) {

  const Component = styled(Box)`
    height: 81vh,
    overflow: overlay;
  `;

  const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background: #e9edef;
    opacity: .6;

  `;

  const [users, setUsers] = useState([]);
  const { account, socket, setActiveUsers } = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {

      try {
        let response = await getUsers();

        // Ensure response is an array before filtering
        if (response && Array.isArray(response)) {
          const filterData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
          // setUsers(response);
          setUsers(filterData);
        } else {
          console.error("Invalid response: not an array");
          setUsers([]); // Set empty array if response is invalid
        }
      } catch (error) {
        console.error("Error fetching users:", error);
        setUsers([]); // Handle fetch failure by setting an empty array
      }
    };
    fetchData();
  }, [text]);

  useEffect(()=>{
    socket.current.emit('addUsers', account);
    socket.users.on('getUsers', users => {
      setActiveUsers(users);
    });
  },[account]);

  return (
    <Component>
      {
        users.map(user => {
          if (user.sub !== account.sub) {
            return (
              <>
                <Conversation user={user} />
                <StyledDivider />
              </>
            )
          }
          return null;
        })
      }
    </Component>
  )
}
