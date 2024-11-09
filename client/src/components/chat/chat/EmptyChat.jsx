import React from 'react';
import { Box, Typography, styled, Divider } from '@mui/material';
import whatsapp_multi_device_support from '../../../assets/whatsapp_multi_device_support_update_image_1636207150180.jpg'

const Component = styled(Box)`
  background: #f8f9fa;
  padding: 30px 0;
  text-align: center;
  height: 100vh;
`;

const Container = styled(Box)`
  padding: 0 200px;
`;

const Image = styled('img')({
  width: 400,
  marginTop: 100
});

const Title = styled(Typography)`
  font-size: 32px;
  margin: 25px 0 10px 0;
  font-family: inherit;
  font-weight: 300;
  color: #41525d;
`;

const SubTitle = styled(Typography)`
  font-size: 14px;
  color: #66781;
  font-weight: 400;
  font-family: inherit;
`;

const StyledDivider = styled(Divider)`
  margin: 40px 0;
  opacity: 0.4;
`;

export default function EmptyChat() {
  return (
    <Component>
      <Container>
        <Image src={whatsapp_multi_device_support} alt="" srcset="" />
        <Title>WhatsApp Web</Title>
        <SubTitle>Now send and recevie messages without keeping your phone online.</SubTitle>
        <SubTitle>Use WhatsApp up 4 linked devices and 1 phone at the same time.</SubTitle>
        <StyledDivider />
      </Container>
    </Component>
  )
}
