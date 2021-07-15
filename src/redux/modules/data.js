import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { firestore, storage } from "../../shared/firebase";
import "moment";
import moment from "moment";

import { actionCreators as imageActions } from "./image";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST";
const LOADING = "LOADING";


const setPost = createAction(SET_POST, (post_list, paging) => ({
    post_list,
    paging,
}));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (post_id, post) => ({
    post_id,
    post,
}));
const deletePost = createAction(DELETE_POST, (post_id) => ({ post_id }));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));
  
  // 좋아요 토글 액션 생성자
const likeToggle = createAction(LIKE_TOGGLE, (post_id, is_like = null) => ({
    post_id,
    is_like,
}));
  
const initialState = {
    list: [],
    paging: { start: null, next: null, size: 3 },
    is_loading: false,
};




export default handleActions(
{
    [LOG_IN]: (state, action) =>
    produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.user = action.payload.user;
                draft.is_login = true;
    }),
        [LOG_OUT]: (state, action) =>
    produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
                draft.is_login = false;
    }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
},
initialState
);



const actionCreators = {
    logIn,
    getUser,
    logOut,
};
  
export { actionCreators };