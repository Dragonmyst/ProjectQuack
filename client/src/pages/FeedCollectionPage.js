import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle';
import { PrependedTextInput } from '../components/PrependedTextInput';
import ServerAPI from '../ServerAPI';

export const FeedCollectionPage = () => {
	const { handleSubmit, control, reset } = useForm({
		defaultValues: {
			datetime: new Date(),
			country: '',
			provincesate: '',
			citytown: '',
			parkname: '',
			duckqty: 1,
			feedtype: '',
			feedqty: '',
			feedqtyunit: ''
		}
	});

	const onSubmit = async (data, e) => {
		const response = await ServerAPI.postFeedingData(data);
		console.log(response);
		reset({
			datetime: new Date(),
			country: '',
			provincesate: '',
			citytown: '',
			parkname: '',
			duckqty: 1,
			feedtype: '',
			feedqty: '',
			feedqtyunit: ''
		});
	};

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
						<Controller
							name="datetime"
							control={control}
							render={({ field }) =>
								<DateTimePicker
									required={true}
									value={field.value}
									onChange={field.onChange}
								/>
							}
						/>
					</div>

					<label>Where were the ducks fed?</label>
					<div>
						<Controller
							name="country"
							control={control}
							render={({ field }) =>
								<PrependedTextInput
									prependItem={"Country"}
									value={field.value}
									onChange={(e) => field.onChange(e)}
								/>
							}
						/>
						<Controller
							name="provincestate"
							control={control}
							render={({ field }) =>
								<PrependedTextInput
									prependItem={"Province or State"}
									value={field.value}
									onChange={(e) => field.onChange(e)}
								/>
							}
						/>
						<Controller
							name="citytown"
							control={control}
							render={({ field }) =>
								<PrependedTextInput
									prependItem={"City or Town"}
									value={field.value}
									onChange={(e) => field.onChange(e)}
								/>
							}
						/>
						<Controller
							name="parkname"
							control={control}
							render={({ field }) =>
								<PrependedTextInput
									prependItem={"Park Name"}
									value={field.value}
									onChange={(e) => field.onChange(e)}
								/>
							}
						/>
					</div>

					<div className="form-group">
						<label>How many ducks were fed?</label>
						<Controller
							name="duckqty"
							control={control}
							render={({ field }) =>
								<input
									type="number"
									min={1}
									value={field.value}
									onChange={(e) => field.onChange(e)}
								/>
							}
						/>
					</div>

					<label>What did you feed the ducks?</label>
					<div>
						<div className="form-group">
							<Controller
								name="feedtype"
								control={control}
								render={({ field }) =>
									<input
										type="text"
										value={field.value}
										onChange={(e) => field.onChange(e)}
									/>
								}
							/>
						</div>
						<div>
							<label>How much did you feed the ducks?</label>
							<Controller
								name="feedqty"
								control={control}
								render={({ field }) =>
									<PrependedTextInput
										prependItem={"Quantity"}
										value={field.value}
										onChange={(e) => field.onChange(e)}
									/>
								}
							/>
							<Controller
								name="feedqtyunit"
								control={control}
								render={({ field }) =>
									<PrependedTextInput
										prependItem={"Unit"}
										value={field.value}
										onChange={(e) => field.onChange(e)}
									/>
								}
							/>
						</div>
					</div>
				</div>

				<input type="submit" className="btn btn-primary" />
			</form>
		</div>
	);
};
