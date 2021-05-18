import { Validation } from '../utils/Validation';

export default function FeedBackForm (props) {

    const {
        onSendForm,
        submitButtonText,
    } = props;

    const name = Validation();
    const number = Validation();

    function submitForm(evt) {
        evt.preventDefault();
        onSendForm(name.value, number.value);
        name.setValue('');
        number.setValue('');
    }

    return (

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
    )
}