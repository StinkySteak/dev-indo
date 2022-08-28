import React, { useState } from 'react'
import { Form, Field } from 'react-final-form'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, isValid, toDate } from "date-fns";
import AddFormStyles from './AddFormStyles';
import axios from 'axios';

function AddForm() {

    const RenderDatePicker = ({ name, input, input: { value, onChange } }) => {
        return (
            <DatePicker
                placeholderText={date}
                dateFormat="P"
                selected={value && isValid(value) ? toDate(value) : null} // needs to be checked if it is valid date
                disabledKeyboardNavigation
                name={name}
                onChange={(date) => {
                    // On Change, you should use final-form Field Input prop to change the value
                    if (isValid(date)) {

                        var newFormat = format(new Date(date), "dd-MM-yyyy");

                        input.onChange(newFormat);

                        setStartDate(newFormat);
                    } else {
                        input.onChange(null);
                    }
                }}
            />
        );
    };

    const [date, setStartDate] = useState(format(new Date(), "dd-MM-yyyy"));
    const [addSuccess, setAdd] = useState(true);

    const onSubmit = async (values) => {
        console.log(values);

        await axios({
            method: 'post',
            url: `https://localhost:7157/AddActivity?RuralName=${values.ruralName}&Issues=${values.issues}&Date=${values.date}&Description=${values.description}`,
            headers: { 'Content-Type': 'application/json' },
        }).then(
            setAdd(false)
        );
    };

    return (
        <div>
            {!addSuccess && <div>

                <div className='flex-center'>
                    <h1>Activity Added!</h1>
                </div>
                <div className='flex-center'>
                    <p>Your request will be approved soon</p>
                </div>

            </div>}

            {addSuccess && <div>

                <AddFormStyles>
                    <div>
                        <h1>Add Activity</h1>
                        <Form
                            onSubmit={onSubmit}
                            initialValues={{ ruralName: 'uma', date: format(new Date(), "dd-MM-yyyy") }}
                            render={({ handleSubmit, form, submitting, pristine, values }) => (
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label>RuralName</label>
                                        <Field name="ruralName" component="select">
                                            <option value="uma">Desa Uma</option>
                                            <option value="oogway">Desa Oogway</option>
                                            <option value="adip">Desa Adip</option>
                                        </Field>
                                    </div>
                                    <div>
                                        <label>Issues</label>
                                        <Field
                                            name="issues"
                                            component="input"
                                            type="text"
                                            placeholder=""
                                        />
                                    </div>
                                    <div>
                                    </div>
                                    <div>
                                        <label>Activity Date</label>
                                        <Field
                                            name="date"
                                            component={RenderDatePicker}
                                        />
                                    </div>
                                    <div>
                                        <label>Activity Description</label>
                                        <Field name="description" component="textarea" placeholder="Description..." />
                                    </div>
                                    <div className="buttons">
                                        <button type="submit" disabled={submitting || pristine}>
                                            Submit
                                        </button>
                                        <button
                                            type="button"
                                            onClick={form.reset}
                                            disabled={submitting || pristine}
                                        >
                                            Reset
                                        </button>
                                    </div>
                                    <pre>{JSON.stringify(values, 0, 2)}</pre>
                                </form>
                            )}
                        />
                    </div>
                </AddFormStyles>
            </div>}
        </div>
    )
}

export default AddForm