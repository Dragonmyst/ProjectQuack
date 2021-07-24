import React from 'react';
import ServerAPI from '../ServerAPI';

export const AboutPage = () => {
	const [message, setMessage] = React.useState('');
	React.useEffect(() => {
		ServerAPI.postFeedingData().then(msg => {
			setMessage(msg.text)
		});
	}, []);
	return (
		<React.Fragment>
            <p>Testing function api: {message}</p>
        </React.Fragment>
	)
}
