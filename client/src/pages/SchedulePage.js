import React from "react";
import { Controller, useForm } from "react-hook-form";
import { PrependedTextInput } from "../components/PrependedTextInput";
import { CustomInputBox } from "../components/CustomInputBox";
import { PageWrapper } from "../components/PageWrapper";
import { PrependDateInput } from "../components/PrependedDateInput";
import TimePicker from 'react-time-picker';

const SchedulePage = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const [feedingTime, setFeedingTime] = React.useState();
    const { control } = useForm({});

    React.useEffect(() => {
        const currentTime = getCurrentTime();
        setFeedingTime(currentTime);
    }, []);

    const getCurrentTime = () => {
        const currentDateTime = new Date();
        let hours = currentDateTime.getHours();
        let minutes = currentDateTime.getMinutes();
        let timeOfDay = "AM";

        if (hours > 11) {
            timeOfDay = "PM";
            hours = hours > 11 ? (hours - 12) : hours;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return {
            hours,
            minutes,
            timeOfDay
        };
    };

    const onTimeChange = (e) => {
        console.log(e);
        const id = e.target.id;
        let newTime = feedingTime;

        if (id === "hours") {
            newTime.hours = e.target.value;
        } else if (id === "minutes") {
            newTime.minutes = e.target.value;
            if (e.target.value < 10) {
                newTime.minutes = "0" + e.target.value;
            }
        } else {
            newTime.timeOfDay = e.target.value;
        }

        console.log(newTime);

        setFeedingTime(newTime);
    };

    return (
        <PageWrapper>

            <h1>Create a feeding schedule</h1>
            <p>Please fill out and submit the form below.</p>

            <form
            >
                <div className="border border-primary p-3 mb-3">
                    <div className="mb-3 d-flex flex-column">
                        <label>What date range is this schedule for?</label>
                        <div>
                            <Controller
                                name="startDate"
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                render={({ field, fieldState }) =>
                                    <PrependDateInput
                                        required={true}
                                        prependItem={"Start date"}
                                        hasError={fieldState.error}
                                        onChange={field.onChange}
                                    />
                                }
                            />
                            <Controller
                                name="endDate"
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                render={({ field, fieldState }) =>
                                    <PrependDateInput
                                        required={true}
                                        prependItem={"End date"}
                                        hasError={fieldState.error}
                                        onChange={field.onChange}
                                    />
                                }
                            />
                        </div>
                    </div>
                    <div className="mb-3 d-flex flex-column">
                        <label className="mb-2">What time are the ducks going to be fed?</label>
                        <Controller
                            name="feedTime"
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field }) =>
                                <TimePicker
                                    className="time-picker-custom"
                                    required={true}
                                    onChange={field.onChange}
                                    disableClock={true}
                                    format="hh:mm a"
                                    value={field.value}
                                />
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <label>What days of the week are the ducks going to be fed?</label>
                        <div className="d-flex flex-wrap">
                            {daysOfWeek.map((day, index) => {
                                return (
                                    <div key={index} className="p-2 border">
                                        <label className="d-block">{day}</label>
                                        <input type="checkbox" value={day} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="mb-3">
                        <label>Where are the ducks going to be fed?</label>
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
                        <label className="required-astrix">On average how many ducks will be fed?</label>
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
                        <label className="required-astrix">What will you feed the ducks? (ie. bread, crumbs, seeds, etc...)</label>
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
                        <label className="required-astrix" >How much will you feed the ducks per day? (ie. 1 slice, 2.5 cups, 1.26 g)</label>
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



                <input type="submit" className="btn btn-primary" />
            </form>
        </PageWrapper >
    );
};

export default SchedulePage;