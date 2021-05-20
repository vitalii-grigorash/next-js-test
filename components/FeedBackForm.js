import React, { useState } from 'react'
import { Validation } from '../utils/Validation'
import SuccessPopup from '../components/SuccessPopup'
import * as FeedbackFormApi from '../utils/FeedbackFormApi'

export default function FeedBackForm () {

    const name = Validation();
    const number = Validation();

    const [isSuccessPopupOpen, setSuccessPopupOpen] = useState(false);
    const [submitButtonText, setSubmitButtonText] = useState('Send form');
    const [senderName, setSenderName] = useState('');

    function handleSuccessPopupOpen () {
        if (!isSuccessPopupOpen) {
            setSuccessPopupOpen(true);
        } else {
            setSuccessPopupOpen(false);
        }
    }

    function submitForm (evt) {
        evt.preventDefault();
        setSubmitButtonText('Sending...');
        FeedbackFormApi.sendForm(name.value, number.value)
        .then(() => {
            setSenderName(name.value);
            handleSuccessPopupOpen();
        })
        .catch((err) => {
            console.log(err.message);
        })
        .finally(() => {
            setSubmitButtonText('Send form');
            name.setValue('');
            number.setValue('');
        });
    }

    return (

        <>

            <form
                onSubmit={submitForm}
                className='form'
            >

                <h3 className="form__title">Feedback form</h3>

                <div className="form__input-container">
                    <input
                        type="text"
                        className="form__input"
                        id="name-input"
                        name="name"
                        value={name.value}
                        onChange={name.onChange}
                        minLength="2"
                        maxLength="50"
                        placeholder="Name"
                        pattern="[A-Za-zа-яёА-ЯЁ -]{1,}"
                        required
                    />
                    <span id="name-input-error" className="form__input_error">{name.errorMessage}</span>
                </div>

                <div className="form__input-container">
                    <input
                        type="text"
                        className="form__input"
                        id="number-input"
                        name="number"
                        value={number.value}
                        onChange={number.onChange}
                        minLength="3"
                        maxLength="20"
                        placeholder="Phone number"
                        pattern='^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$'
                        required
                    />
                    <span id="number-input-error" className="form__input_error">{number.errorMessage}</span>
                </div>

                <button type="submit" className="form__submit-button">{submitButtonText}</button>

            </form>

            <SuccessPopup
                isOpen={isSuccessPopupOpen}
                onClose={handleSuccessPopupOpen}
                name={senderName}
            />

        </>
    )
}