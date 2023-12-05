import React from "react";
import propTypes from "prop-types";
import CourseListRow from './CourseListRow';
import { StyleSheet, css } from "aphrodite";
import CourseShape from "./CourseShape";

const CourseList = ({ listCourses }) => {
    return(
        <table id='CourseList' className={css(courseStyles.table)}>
            <thead>
                <CourseListRow isHeader={true} textFirstCell="Available courses" />
                <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
            </thead>
            <tbody id="CourseBody">
                {listCourses.length === 0 && (
                    <tr>
                        <td>No course available yet</td>
                    </tr>
                )}

                {listCourses.map((course => {
                    <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} />
                }))}
            </tbody>
        </table>
    )
}

const courseStyles = StyleSheet.create({
    table: {
        display: 'table',
        width: '90%',
        margin: '2rem auto 0 auto',
        border: '1px solid',
        borderCollapse: 'collapse'
    }
});

CourseList.defaultProps = {
    listCourses: []

}

CourseList.propTypes = {
    listCourses: propTypes.array
}

export default CourseList;