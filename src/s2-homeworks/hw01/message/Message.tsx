import React from 'react'
import s from './Message.module.css'
import { MessageType } from '../HW1';

// нужно создать правильный тип вместо any
export type MessagePropsType = {
  message: MessageType;
};

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
      <div id={"hw1-message-" + props.message.id} className={s.message}>
        <div className={s.imageAndText}>
          <div className={s.text}>
            <div id={"hw1-name-" + props.message.id} className={s.name}>
              {/*создаёт студент*/}
              <p className={s.name__text}>{props.message.user.name}</p>
              {/**/}
            </div>
            <pre
              title={props.message.message.text}
              id={"hw1-text-" + props.message.id}
              className={s.messageText}
            >
              {/*создаёт студент*/}
              <p className={s.messageText__text}>
                {props.message.message.text}
              </p>
              {/**/}
            </pre>
          </div>
          <div className={s.image__wrapper}>
            <img
              className={s.image}
              id={"hw1-avatar-" + props.message.id}
              // создаёт студент
              src={props.message.user.avatar}
              alt={`Avatar of ${props.message.user.name}`}
              //
            />
          </div>
        </div>
        <div id={"hw1-time-" + props.message.id} className={s.time}>
          {/*создаёт студент*/}
          <p className={s.time__text}>{props.message.message.time}</p>
          {/**/}
        </div>
      </div>
    );
}

export default Message
