import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle';
import { PrependedTextInput } from '../components/PrependedTextInput';
import ServerAPI from '../ServerAPI';
import { CustomInputBox } from '../components/CustomInputBox';

export const FeedCollectionPage = () => {
	const { handleSubmit, control, reset } = useForm({
		mode: 'onSubmit',
		reValidateMode: 'onChange',
		defaultValues: {
			datetimefed: new Date(),
			country: '',
			provincestate: '',
			citytown: '',
			parkname: '',
			duckqty: 1,
			feedtype: '',
			feedqtyunit: ''
		}
	});

	const onSubmit = async (data, e) => {
		const response = await ServerAPI.postFeedingData(data);
		console.log(response);
		reset({
			datetimefed: new Date(),
			country: '',
			provincestate: '',
			citytown: '',
			parkname: '',
			duckqty: 1,
			feedtype: '',
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
					<div className="form-group mb-3">
						<label className="required-astrix">What date and time were the ducks fed?</label>
						<div className="d-flex my-2">
							<Controller
								name="datetimefed"
								control={control}
								rules={{
									required: true,
									message: "Date and time ducks were fed is required"
								}}
								render={({ field }) =>
									<DateTimePicker
										required={true}
										value={field.value}
										onChange={field.onChange}
									/>
								}
							/>
						</div>
					</div>

					<div className="form-group mb-3">
						<label>Where were the ducks fed?</label>
						<Controller
							name="country"
							control={control}
							rules={{
								required: true,
							}}
							render={({ field, fieldState }) =>
								<PrependedTextInput
									prependItem={"Country"}
									required={true}
									hasError={fieldState.error}
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

					<div className="form-group mb-3">
						<label className="required-astrix">How many ducks were fed?</label>
						<Controller
							name="duckqty"
							control={control}
							rules={{
								required: true,
							}}
							render={({ field, fieldState }) =>
								<CustomInputBox
									type="number"
									min={1}
									value={field.value}
									hasError={fieldState.error}
									onChange={(e) => field.onChange(e)}
								/>
							}
						/>
					</div>

					<div className="form-group mb-3">
						<label className="required-astrix">What did you feed the ducks?</label>
						<Controller
							name="feedtype"
							control={control}
							rules={{
								required: true,
							}}
							render={({ field, fieldState }) =>
								<CustomInputBox
									type="text"
									value={field.value}
									hasError={fieldState.error}
									onChange={(e) => field.onChange(e)}
								/>
							}
						/>
					</div>

					<div className="mb-3">
						<label>How much did you feed the ducks?</label>
						<Controller
							name="feedqty"
							control={control}
							rules={{
								required: true,
							}}
							render={({ field, fieldState }) =>
								<PrependedTextInput
									prependItem={"Quantity"}
									required={true}
									hasError={fieldState.error}
									value={field.value}
									onChange={(e) => field.onChange(e)}
								/>
							}
						/>
						<Controller
							name="feedqtyunit"
							control={control}
							rules={{
								required: true,
							}}
							render={({ field, fieldState }) =>
								<PrependedTextInput
									prependItem={"Unit"}
									required={true}
									hasError={fieldState.error}
									value={field.value}
									onChange={(e) => field.onChange(e)}
								/>
							}
						/>
					</div>
				</div>

				<input type="submit" className="btn btn-primary" />
			</form>
		</div >
	);
};
