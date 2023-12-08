import { Map } from 'Immutable';
import { getLIstCourses } from './courseSelector';

describe('courses selector tests', () => {
    it('verifies that the selector is working correctly', () => {
        const state = {
            courses: Map({
                1: {
                    id: 1,
                    title: 'Test title',
                    description: 'Test description',
                    duration: 60,
                    authors: ['Test author'],
                    date: '2020-01-01',
                    topRated: false,
                },
            }),
        };
        const courses = getLIstCourses(state);
        expect(courses).toEqual([{
            id: 1,
            title: 'Test title',
            description: 'Test description',
            duration: 60,
            authors: ['Test author'],
            date: '2020-01-01',
            topRated: false,
        }]);
    });
});