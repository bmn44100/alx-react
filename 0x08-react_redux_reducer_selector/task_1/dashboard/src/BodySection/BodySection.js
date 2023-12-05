import react, { Component } from "react";
import propTypes from "prop-types";

class BodySection extends Component {
    render() {

        const { title } = this.props;
        return(
            <div className="bodySection">
                <h2>
                    {title}
                </h2>
                {this.props.children}
            </div>
        )
    }
}

BodySection.propTypes = {
    title: propTypes.string.isRequired,
    children: propTypes.oneOfType([
        propTypes.string,
        propTypes.element
    ])
}

BodySection.defaultProps = {
    children: <React.Fragment />
}

export default BodySection;