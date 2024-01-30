import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './ChatFeed';
import LoginForm from './LoginForm';
import '../styles/chatapp.css';
const projectID = '9f30a4c2-91c4-4129-86a4-1ba0bc024120';

const Chatapp = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default Chatapp;
