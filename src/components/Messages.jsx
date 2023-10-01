import React from 'react';
import { useEffect, useRef } from 'react';

const Messages = (props) => {
	const { messages, currentMember } = props;
	const bottomRef = useRef();
		useEffect(() => {
			if (bottomRef.current) {
			bottomRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
			}
		}, [messages]);

	const renderMessage = (message, index) => {
		const { member, text } = message;
		const messageFromMe = member.username === currentMember.username;
		const className = messageFromMe ? 'messages-message currentMember' : 'messages-message';
			
			  return (
				<li key={`message-${index}`} className={className}>
				<span className='avatar' style={{ backgroundColor: member.color }} />
				<div className='message-content'>
					<div className='username'>{member.username}</div>
					<div className='text' style={{ backgroundColor: member.color }}>
						{text}
					</div>
				</div>
				<div ref={bottomRef}></div>
			</li>
		);
	};

	return <ul className='messages-list'>{messages.map(renderMessage)}</ul>;
};

export default Messages;