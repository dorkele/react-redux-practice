import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    //lodash version of map function
    const userIds = _.uniq(_.map(getState().posts, "userId"));
    // we dont need async await bc we dont care
    // async await doesnt work with forEach
    userIds.forEach((id) => dispatch(fetchUser(id)));

    // optional refactor
    // _.chain(getState().posts)
    //    .map("userId")
    //      .uniq()
    //        .forEach(id=>dispatch(fetchUser(id)))
    //          .value()
};

export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: response.data });
};

// with this solution you can't refetch the data again - downside
// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: "FETCH_USER", payload: response.data });
// });

export const fetchUser = (id) => async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: "FETCH_USER", payload: response.data });
};
