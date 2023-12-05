import React, { useState } from "react";
import propTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";


const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {

    const row_background_color = { backgroundColor: '#f5f5f5ab' };
    const row_header_background_color = { backgroundColor: '#deb5b545' };
    const rowChecked = { backgroundColor: '#e6e4e4'};
    const [isChecked, setIsChecked] = useState(false);
    let node;
    let style;

    if (isHeader) {
        style = row_header_background_color;

        if (!textSecondCell){
            node = <th colSpan="2" className={css(rowStyles.th)}> {textFirstCell} </th>;
        }
        else {
            node = 
            <React.Fragment>
                    <th className={css(rowStyles.NOTth)}> {textFirstCell} </th>
                    <th className={css(rowStyles.NOTth)}> {textSecondCell} </th>
            </React.Fragment>;
        }
    }
    else {
        style = row_background_color;
        node = 
        <React.Fragment>
                <td> 
                    <input type="checkbox" onClick={() => {
                        setIsChecked(!isChecked);
                    }} />
                    {textFirstCell}
                </td>
                <td> {textSecondCell} </td>
        </React.Fragment>;
    }
    if (isChecked) style = rowChecked;
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

const rowStyles = StyleSheet.create({
    th: {
        textAlign: 'center',
        border: '1px solid',
        paddingBottom: '0.5rem'
    },

    NOTth: {
        textAlign: 'start',
        borderBottom: '1px solid'
    }
})

export default CourseListRow;