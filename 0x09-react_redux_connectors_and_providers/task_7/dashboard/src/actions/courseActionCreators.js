import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

export const selectCourse = (courseId) => (dispatch) => {
    dispatch({
        type: SELECT_COURSE,
        courseId
    });
}

export const unselectCourse = (courseId) => (dispatch) => {
    dispatch({
        type: UNSELECT_COURSE,
        courseId
    });
}

