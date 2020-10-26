import React from "react";

class CommentList extends React.Component {
    renderComments() {
        return this.props.comments.map((comment) => {
            return (
                <div className="comment" key={comment.id}>
                    <div className="content">
                        <i className="large middle aligned icon user" />
                        <span className="author">{comment.username}</span>
                        {/* <div class="metadata">
        <span class="date">Today at 5:42PM</span>
      </div> */}
                        <div className="text">{comment.comment}</div>
                    </div>
                </div>
            );
        });
    }
    render() {
        console.log("this.props.comments: ", this.props.comments);

        return (
            <div className="ui comments">
                <h3 className="ui dividing header">Comments</h3>
                {this.renderComments()}
            </div>
        );
    }
}

export default CommentList;
