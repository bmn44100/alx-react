import React from "react";
import propTypes from "prop-types";
import './CourseList.css';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
    if (isHeader) {
        if (textSecondCell===null){
            return <tr><th colSpan="2"> {textFirstCell} </th></tr>;
        }
        else {
            return (
                <tr>
                    <th> {textFirstCell} </th>
                    <th> {textSecondCell} </th>
                </tr>
            );
        }
    }
    return (
        <tr>
            <td> {textFirstCell} </td>
            <td> {textSecondCell} </td>
        </tr>
    );
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
}

CourseListRow.PropTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([
        PropTypes,string,
        PropTypes.number
    ])
}

export default CourseListRow;