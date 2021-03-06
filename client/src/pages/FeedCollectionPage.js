import React from "react";
import { Controller, useForm } from "react-hook-form";
import DateTimePicker from "react-datetime-picker/dist/entry.nostyle";
import { PrependedTextInput } from "../components/PrependedTextInput";
import ServerAPI from "../ServerAPI";
import { CustomInputBox } from "../components/CustomInputBox";
import { PopUpMessage } from "../components/PopUpMessage";
import { PageWrapper } from "../components/PageWrapper";

const FeedCollectionPage = () => {
	const [submitting, setSubmitting] = React.useState(false);
	const [showErrorToast, setShowErrorToast] = React.useState(false);
	const [showSuccessToast, setShowSuccessToast] = React.useState(false);

	const { handleSubmit, control, reset } = useForm({
		mode: "onSubmit",
		reValidateMode: "onChange",
		defaultValues: {
			datetimefed: new Date(),
			country: "",
			provincestate: "",
			citytown: "",
			parkname: "",
			duckqty: 1,
			feedtype: "",
			feedqty: "",
			feedqtyunit: ""
		}
	});

	const onSubmit = async (data, e) => {
		e.preventDefault();
		setSubmitting(true);
		ServerAPI.postFeedingData(data)
			.then(status => {
				if (status !== 201) {
					setSubmitting(false);
					displayToast(setShowErrorToast);
					return;
				}

				displayToast(setShowSuccessToast);

				reset({
					datetimefed: new Date(),
					country: "",
					provincestate: "",
					citytown: "",
					parkname: "",
					duckqty: 1,
					feedtype: "",
					feedqty: "",
					feedqtyunit: ""
				});

				setSubmitting(false);
			});

	};

	const displayToast = (setToast) => {
		setToast(true);

		setTimeout(() => setToast(false), 2000);
	}

	return (
		<PageWrapper>
			<div>
				<PopUpMessage
					show={showErrorToast}
					toggle={() => setShowErrorToast(!showErrorToast)}
					type="error"
					headerMsg="Opps, something went wrong!"
					bodyMsg="Please try again later"
				/>
				<PopUpMessage
					show={showSuccessToast}
					toggle={() => setShowSuccessToast(!showSuccessToast)}
					type="success"
					headerMsg="Submitted!"
					bodyMsg="Your feeding data was successfully submitted"
				/>
			</div>

			<h1>Duck Feeding Data Collection</h1>
			<p>Please fill out and submit the form below.</p>

			<form
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="border border-primary p-3 mb-3">
					<div className="mb-3">
						<label className="required-astrix">What date and time were the ducks fed?</label>
						<div className="d-flex my-2">
							<Controller
								name="datetimefed"
								control={control}
								rules={{
									required: true
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

					<div className="mb-3">
						<label>Where were the ducks fed?</label>
						<div className="d-flex flex-column">
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
										onChange={field.onChange}
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
										onChange={field.onChange}
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
										onChange={field.onChange}
									/>
								}
							/>
						</div>
					</div>

					<div className="mb-3">
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

					<div className="mb-3">
						<label className="required-astrix">What did you feed the ducks? (ie. bread, crumbs, seeds, etc...)</label>
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
									onChange={field.onChange}
								/>
							}
						/>
					</div>

					<div className="mb-3">
						<label className="required-astrix" >How much did you feed the ducks? (ie. 1 slice, 2.5 cups, 1.26 g)</label>
						<div className="flex-row">
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
										onChange={field.onChange}
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
										onChange={field.onChange}
									/>
								}
							/>
						</div>
					</div>
				</div>

				<input type="submit" className="btn btn-primary" disabled={submitting} />
			</form>
		</PageWrapper>
	);
};

export default FeedCollectionPage;