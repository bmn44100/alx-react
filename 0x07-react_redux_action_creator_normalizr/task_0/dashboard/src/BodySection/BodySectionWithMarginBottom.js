import react, { Component } from "react";
import propTypes from "prop-types";
import BodySection from "./BodySection";
import { StyleSheet, css } from "aphrodite";

class BodySectionWithMarginBottom extends Component {
    render() {
        return(
            <div className={css(bodyStyles.bodySectionWithMargin)}>
                <BodySection {...this.props} />
            </div>
        )
    }
}

const bodyStyles = StyleSheet.create({
    bodySectionWithMarginBottom: {
        marginBottom: "40px"
    }
})

BodySectionWithMarginBottom.propTypes = {
    title: propTypes.string.isRequired,
    children: propTypes.oneOfType([
        propTypes.string,
        propTypes.element
    ])
}

BodySectionWithMarginBottom.defaultProps = {
    children: <React.Fragment />
}

export default BodySectionWithMarginBottom;