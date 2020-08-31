// Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

// Create a React component
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning!</h4>
                <div>Are you sure you want to do this?</div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Yesterday at 5PM"
                    commentText="Good point!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Dora"
                    timeAgo="Today at 2AM"
                    commentText="This means a lot!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Maja"
                    timeAgo="Today at 4.45PM"
                    commentText="Subscribed!!!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

// Take the React component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
