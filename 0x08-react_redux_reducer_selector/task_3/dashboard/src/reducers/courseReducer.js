import {
    FETCH_COURSES_SUCCESS,
    SELECT_COURSE,
    UNSELECT_COURSE,
} from '../actions/courseActionTypes';

export const initialState = [];

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COURSES_SUCCESS:
            return action.data.map((course) => {
                return { ...course, isSelected: true };
            });
        case SELECT_COURSE:
            return state.map((course) => {
                if (course.id === action.courseId) {
                    return { ...course, isSelected: true };
                }
                return course;
            });
        case UNSELECT_COURSE:
            return state.map((course) => {
                if (course.id === action.courseId) {
                    return { ...course, isSelected: false };
                }
                return course;
            });
        default:
            return state;
    }
}

export default courseReducer;