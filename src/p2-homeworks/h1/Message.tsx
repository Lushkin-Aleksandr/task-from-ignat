import React from 'react'
import styles from './Message.module.css'

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: MessagePropsType) {
    return (
        <div className={styles.message}>
            <img className={styles.avatar} src={props.avatar} alt="avatar"/>
            <div className={styles.messageData}>
                <div className={styles.messageMain}>
                    <div className={styles.authorContainer}>
                        <span className={styles.author}>{props.name}</span>
                    </div>
                    <p className={styles.messageText}>{props.message}</p>
                </div>
                <div className={styles.messageTimeContainer}>
                    <span className={styles.messageTime}>{props.time}</span>
                </div>
            </div>
        </div>
    )
}

export default Message
