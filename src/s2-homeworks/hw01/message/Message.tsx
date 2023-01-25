import React from 'react'
import s from './Message.module.css'
import {message0, MessageType} from "../HW1";


// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message:MessageType
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img width={'48px'} height={'48px'}
                     id={'hw1-avatar-' + props.message.id}
                    // создаёт студент
                     src={props.message.user.avatar}
                    //
                />

                <div className={s.dropletRight}/>

                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {/*создаёт студент*/}
                        {props.message.user.name}
                        {/**/}
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {/*создаёт студент*/}
                        {props.message.message.text}
                    </pre>
                </div>

                <svg height="0" width="0">
                    <clipPath id="right-droplet">
                        <path d="M 6,0 A 10,10 0 0 0 16,10 H 0 V 0 Z"/>
                    </clipPath>
                </svg>

            </div>


            <div id={'hw1-time-' + props.message.id} className={s.time}>
                {/*создаёт студент*/}

                {props.message.message.time}
            </div>
        </div>
    )
}

export default Message
