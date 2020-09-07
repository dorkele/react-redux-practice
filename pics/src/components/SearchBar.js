import React from "react";

class SearchBar extends React.Component {
    state = { term: "" };

    onFormSubmit(e) {
        e.preventDefault();
        console.log(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        {/* on input change withouth parentheses because with means we would 
                        call it each time the component is rendered */}
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) =>
                                this.setState({
                                    term: e.target.value,
                                })
                            }
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
