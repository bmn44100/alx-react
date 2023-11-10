import React from "react";
import propTypes from "prop-types";
import CourseListRow from './CourseListRow';
import './CourseList.css';
import CourseShape from "./CourseShape";

const CourseList = ({ listCourses }) => {
    return(
        <table id='CourseList'>
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


CourseList.defaultProps = {
    listCourses: []

}

CourseList.propTypes = {
    listCourses: propTypes.array
}

export default CourseList;