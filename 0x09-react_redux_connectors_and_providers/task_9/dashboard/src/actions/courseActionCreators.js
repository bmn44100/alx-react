import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from "./courseActionTypes";
import 'node-fetch';

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

export const setCourses = (data) => {
    return {
        type: FETCH_COURSE_SUCCESS,
        data
    };
};

export const fetchCourses = () => {
    return (dispatch) => {
        fetch('../dist/courses.json')
            .then((response) => response.json())
            .then((data) => dispatch(setCourses(data)));
    
    };
};