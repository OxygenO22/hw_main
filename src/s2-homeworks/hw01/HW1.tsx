import React, { useState } from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'
import friendAvatar from "./friendAvatar.png";

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any
type UserType = {
  avatar: string
  name: string
};

type MessageInnerType = {
  text: string;
  time: string;
};

export type MessageType = {
  id: number;
  user: UserType;
  message: MessageInnerType;
};

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar, // можно менять
        name: 'Some Name',  // можно менять
    },
    message: {
        text: 'some textsome textsome textsome textsome textsome textsome text', // можно менять
        time: '22:00', // можно менять
    },
}
export const friendMessage0: MessageType = {
  id: 100,
  user: {
    avatar: friendAvatar, // можно менять
    name: "Friend Name", // можно менять
  },
  message: {
    text: "зеркальное сообщение для тренировки css", // можно менять
    time: "22:00", // можно менять
  },
};

const HW1 = () => {
    const [myMessage, setMyMessage] = useState<MessageType>({
      id: 0,
      user: {
        avatar: avatar, // можно менять
        name: "Alex", // можно менять
      },
      message: {
        text: "Hello, Denis, how is going?", // можно менять
        time: "22:00", // можно менять
      },
    });
    const [friendMessage, setFriendMessage] = useState<MessageType>({
      id: 100,
      user: {
        avatar: friendAvatar, // можно менять
        name: "Denis", // можно менять
      },
      message: {
        text: "Hello, Alex, everything are alright! And what do you do?", // можно менять
        time: "22:01", // можно менять
      },
    });

    return (
      <div id={"hw1"} className={s2.hw__wrapper}>
        <div className={s2.hwTitle}>
          <p className={s2.hwTitle__text}>Hometask № 1</p>
        </div>
        <div className={s2.hw}>
          {/*проверка отображения (не менять)*/}
            <Message message={myMessage} />
            <FriendMessage message={friendMessage} />

          {/*для автоматической проверки дз (не менять)*/}
          <MessageSender M={Message} />
        </div>
      </div>
    );
}

export default HW1
