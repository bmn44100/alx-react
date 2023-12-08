import { selectCourse, unSelectCourse } from "./courseActionCreators";

describe('selectCourse', () => {
    it('verifies that selectCourse returns the correct course with 1 as the argument', () => {
        const expected = {
            type: 'SELECT_COURSE',
            index: 1
        };

        expect(selectCourse(1)).toEqual(expected);
    });
});