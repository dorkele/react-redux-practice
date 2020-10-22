import React from "react";
import { Field, reduxForm } from "redux-form";

class CommentForm extends React.Component {
    renderInput = ({ input, label, meta }) => {
        //console.log(formProps);
        //console.log(meta);
        return (
            <div className="field">
                <label>{label}</label>
                <input
                    autoComplete="off"
                    // onChange={formProps.input.onChange}
                    // value={formProps.input.value}
                    // umjesto toga, moze se ful skratiti u sljedece:
                    {...input}
                />
                <div>{meta.error}</div>
            </div>
        );
    };

    onSubmit = (formValues) => {
        console.log(formValues);
    };

    render() {
        //console.log(this.props);
        // field comp is only for hooking up all this stuff redux-form is doing for us
        // it doesn't know how to show an input/checkbox whatever, we have to give it to it
        // with component property
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="ui form"
            >
                <Field
                    name="username"
                    label="Username: "
                    component={this.renderInput}
                />
                <Field
                    name="comment"
                    label="Comment: "
                    component={this.renderInput}
                />
                <button className="ui button primary">Leave a Comment</button>
            </form>
        );
    }
}

//errirs object will be passed to matching renderInput component
const validate = (formValues) => {
    const errors = {};
    if (!formValues.username) {
        errors.username = "You must enter your username";
    }
    if (!formValues.comment) {
        errors.comment = "You must enter a comment";
    }
    return errors;
};

export default reduxForm({ form: "commentForm", validate })(CommentForm);
