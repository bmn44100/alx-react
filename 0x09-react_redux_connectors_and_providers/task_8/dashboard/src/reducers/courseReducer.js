import {
    FETCH_COURSES_SUCCESS,
    SELECT_COURSE,
    UNSELECT_COURSE,
} from '../actions/courseActionTypes';

import { Map } from 'immutable';
import coursesNormalizer from '../schema/courses';

export const initialState = [];

const courseReducer = (state = Map(initialState), action) => {
    switch (action.type) {
        case FETCH_COURSES_SUCCESS:
            let editedCourses = [];
            action.data.forEach((course) => {
                editedCourses.push({ ...course, isSelected: false });
            });
            editedCourses = coursesNormalizer(editedCourses);
            return state.merge(editedCourses);
        case SELECT_COURSE:
            return state.setIn([String(action.courseId), 'isSelected'], true);
        case UNSELECT_COURSE:
            return state.setIn([String(action.courseId), 'isSelected'], false);
        default:
            return state;
    };
};

export default courseReducer;