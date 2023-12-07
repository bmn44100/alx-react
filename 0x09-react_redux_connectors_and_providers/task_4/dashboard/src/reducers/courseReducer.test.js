import courseReducer from "./courseReducer";
import { SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";
import { fetchCourseSuccess } from "../actions/courseActionCreators";

describe("courseReducer", () => {
    it("tests that the default state returns an empty array", () => {
        const state = courseReducer(undefined, {});
        expect(state).toEqual([]);
    });
    
    it("tests that the FETCH_COURSES_SUCCESS action modifies the state correctly", () => {
        const courses = [
        {
            id: 1,
            name: "ES6",
            isSelected: false,
        },
        {
            id: 2,
            name: "Webpack",
            isSelected: false,
        },
        {
            id: 3,
            name: "React",
            isSelected: false,
        },
        ];
        const action = fetchCourseSuccess(courses);
        const state = courseReducer(undefined, action);
        expect(state).toEqual(courses);
    });
    
    it("tests that the SELECT_COURSE action modifies the state correctly", () => {
        const courses = [
        {
            id: 1,
            name: "ES6",
            isSelected: false,
        },
        {
            id: 2,
            name: "Webpack",
            isSelected: false,
        },
        {
            id: 3,
            name: "React",
            isSelected: false,
        },
        ];
        const action = fetchCourseSuccess(courses);
        const state = courseReducer(undefined, action);
        const action2 = {
        type: SELECT_COURSE,
        index: 1,
        };
        const state2 = courseReducer(state, action2);
        expect(state2[1].isSelected).toEqual(true);
    });
    
    it("tests that the UNSELECT_COURSE action modifies the state correctly", () => {
        const courses = [
        {
            id: 1,
            name: "ES6",
            isSelected: false,
        },
        {
            id: 2,
            name: "Webpack",
            isSelected: false,
        },
        {
            id: 3,
            name: "React",
            isSelected: false,
        },
        ];
        const action = fetchCourseSuccess(courses);
        const state = courseReducer(undefined, action);
        const action2 = {
        type: UNSELECT_COURSE,
        index: 1,
        };
        const state2 = courseReducer(state, action2);
        expect(state2[1].isSelected).toEqual(false);
    });
});