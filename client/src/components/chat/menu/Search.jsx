import { Box, InputBase, styled } from '@mui/material'
import React from 'react'
import { Search as SearchIcon } from '@mui/icons-material';

const Component = styled(Box)`
  background: #fff;
  height: 45px;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
`;

const Wrapper = styled(Box)`
  background-color: #f0f2f5;
  position: realive;
  margin: 0 13px;
  width:100%;
  border-radius: 10px;
`;

const Icon = styled(Box)`
  position: absolute;
  height: 100px;
  padding: 6px 8px;
  color: #919191;
`;

const InputField = styled(InputBase)`
  width: 100%;
  padding:16px;
  height: 15px;
  padding-left:65px;
  font-size: 14px;
`;

export default function Search({ setText }) {
  return (
    <Component>
      <Wrapper>
        <Icon>
           <SearchIcon
            fontSize='small'
           />
        </Icon>
        <InputField 
          placeholder='search or start new chat'
          onChange={(e)=> setText(e.target.value)}
          />
      </Wrapper>
    </Component>
  )
}
