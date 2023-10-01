import React, { useState } from 'react';

const Input = (props) => {
	const [text, setText] = useState('');

	const onChange = (e) => {
		setText(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setText('');
		props.onSendMessage(text);
	};

	return (
		<div className='input'>
			<form onSubmit={onSubmit}>
				<input
					onChange={onChange}
					value={text}
					type='text'
					placeholder='Upišite Vašu poruku'
					autoFocus={true}
				/>
				<button disabled={text.length === 0} className='button'>
					Pošalji
				</button>
			</form>
		</div>
	);
};

export default Input;