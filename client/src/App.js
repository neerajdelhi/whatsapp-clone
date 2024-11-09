import './App.css';
import Messanger from './components/Messanger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider';

function App() {
  const clientid = '11195400698-lrv864h956obn1b2bvrdtt70vds1850a.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientid}>
      <AccountProvider>
        <Messanger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
