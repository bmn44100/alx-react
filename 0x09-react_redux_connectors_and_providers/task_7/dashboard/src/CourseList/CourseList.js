import React, { Component } from "react";
import propTypes from "prop-types";
import CourseListRow from './CourseListRow';
import { StyleSheet, css } from "aphrodite";
import CourseShape from "./CourseShape";
import { connect } from "react-redux";
import { fetchCourses, selectCourse, unSelectCourse } from "../actions/courseActionCreators";


export class CourseList extends Component {

    constructor(props) {
        super(props);
        this.onChangeRow = this.onChangeRow.bind(this);
    }

    componentDidMount() {
        this.props.fetchCourses();
    }

    onChangeRow(isChecked, courseId) {
        if (isChecked) {
            this.props.selectCourse(courseId);
        } else {
            this.props.unSelectCourse(courseId);
        }
    }

    render() {
        const { listCourses } = this.props;
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
                        <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false} isChecked={course.isSelected} onChangeRow={this.onChangeRow} />
                    }))}
                </tbody>
            </table>
        )
    }
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
    listCourses: null,
    fetchCourses: () => {},
    selectCourse: () => {},
    unSelectCourse: () => {}
}

CourseList.propTypes = {
    listCourses: propTypes.oneOfType([propTypes.array, propTypes.object]),
    fetchCourses: propTypes.func,
    selectCourse: propTypes.func,
    unSelectCourse: propTypes.func
}

export const mapStateToProps = (state) => {
    const coursesList = getLIstCourses(state);
    return { listCourses: coursesList };
};

export const mapDispatchToProps = {
    fetchCourses,
    selectCourse,
    unSelectCourse
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);