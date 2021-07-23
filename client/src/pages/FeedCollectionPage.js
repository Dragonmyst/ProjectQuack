import React from 'react';
import { useForm } from 'react-hook-form';
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle';
import { PrependedTextInput } from '../components/PrependedTextInput';

export const FeedCollectionPage = () => {
	const { handleSubmit } = useForm();
	const onSubmit = data => console.log(data);

	return (
		<div className="container mt-3">
			<h1>Duck Feeding Data Collection</h1>
			<p>Please fill out and submit the form below.</p>

			<form
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="border border-primary p-3 mb-3">
					<div className="form-group">
						<label>What date and time were the ducks fed?</label>
						<DateTimePicker
							required={true}
							value={new Date()}
							onChange={(value) => { console.log(value); }}
						/>
					</div>

					<label>Where were the ducks fed?</label>
					<div>
						<PrependedTextInput
							prependItem={"Country"}
						/>
						<PrependedTextInput
							prependItem={"Province or State"}
						/>
						<PrependedTextInput
							prependItem={"City or Town"}
						/>
						<PrependedTextInput
							prependItem={"Park Name"}
						/>
					</div>

					<div className="form-group">
						<label>How many ducks were fed?</label>
						<input
							type="number"
						/>
					</div>

					<label>What did you feed the ducks?</label>
					<div>
						<div className="form-group">
							<input
								type="text"
							/>
						</div>
						<div>
							<label>How much did you feed the ducks?</label>
							<PrependedTextInput
								prependItem={"Quantity"}
							/>
							<PrependedTextInput
								prependItem={"Unit"}
							/>
						</div>
					</div>
				</div>

				<input type="submit" className="btn btn-primary" />
			</form>
		</div>
	);
};
