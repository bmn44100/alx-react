import React from "react";
import propTypes from "prop-types";
import './CourseList.css';


const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {

    const row_background_color = { backgroundColor: '#f5f5f5ab' };
    const row_header_background_color = { backgroundColor: '#deb5b545' };

    let node;
    let style;

    if (isHeader) {
        style = row_header_background_color;

        if (!textSecondCell){
            node = <tr><th colSpan="2"> {textFirstCell} </th></tr>;
        }
        else {
            node = 
            <React.Fragment>
                    <th> {textFirstCell} </th>
                    <th> {textSecondCell} </th>
            </React.Fragment>;
        }
    }
    else {
        style = row_background_color;
        node = 
        <React.Fragment>
                <td> {textFirstCell} </td>
                <td> {textSecondCell} </td>
        </React.Fragment>;
    }
    return (
        <tr style={style}>
            {node}
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