import React from "react";
import DarkColor from "./svg/dark_color.svg";
import DarkSolid from "./svg/dark_solid.svg";
import DarkTransparent from "./svg/dark_transparent.svg";
import LightColor from "./svg/light_color.svg";
import LightSolid from "./svg/light_solid.svg";
import LightTransparent from "./svg/light_transparent.svg";

class Logo extends React.Component {
    static defaultProps = {
        type: "dark_color",
        textColor: "black",
        size: "small",
        showTitle: true
    };
    
    render() {
        var wrapperStyle = {
            lineHeight: '1.5'
        }

        return (
            <span style={wrapperStyle}>
                {this.getLogoSVG()}
                {this.getLogoTitle()}
            </span>
        );
    }

    getLogoTitleStyle() {
        var baseStyle = {
            fontFamily: 'BebasNeueSemiRoundedRegular',
            marginLeft: '.1em',
            lineHeight: '.95em',
            paddingTop: '.25em',
            display: 'inline-block',
            color: this.props.textColor || "black"
        };

        switch (this.props.size) {
            case "extra-small":
                return {
                    ...baseStyle,
                    ...{fontSize: 22}
                };
            case "small":
                return {
                    ...baseStyle,
                    ...{fontSize: '2.5em'}
                };
            case "hero":
                return {
                    ...baseStyle,
                    ...{fontSize: '10em'}
                };
            default:
                return {
                    ...baseStyle,
                    ...{fontSize: 36}
                };
        }
    }

    getLogoTitle() {
        if(this.props.showTitle){
            return (
                <span
                    textColor={this.props.textColor}
                    style={this.getLogoTitleStyle()}
                >
                    BREWERWALL
                </span>
            );
        }
    }

    getLogoImageStyle() {
        var baseStyle = {
            display: 'inline',
            verticalAlign: 'top',
            marginTop: 0,
        };

        switch (this.props.size) {
            case "extra-small":
                return {
                    ...baseStyle,
                    ...{width: 25}
                };
            case "small":
                return {
                    ...baseStyle,
                    ...{width: 40}
                };
            case "hero":
                return {
                    ...baseStyle,
                    ...{width: 150}
                };
            default:
                return {
                    ...baseStyle,
                    ...{width: 40}
                };
        }
    }

    getLogoSVG() {
        switch (this.props.type) {
            case "light_color":
                return (<LightColor alt="logo" style={this.getLogoImageStyle()} />);
            case "light_transparent":
                return (<LightTransparent alt="logo" style={this.getLogoImageStyle()} />);
            case "light_solid":
                return (<LightSolid alt="logo" style={this.getLogoImageStyle()} />);
            case "dark_color":
                return (<DarkColor alt="logo" style={this.getLogoImageStyle()} />);
            case "dark_transparent":
                return (<DarkTransparent alt="logo" style={this.getLogoImageStyle()} />);
            case "dark_solid":
                return (<DarkSolid alt="logo" style={this.getLogoImageStyle()} />);
            default:
                return (<DarkColor alt="logo" style={this.getLogoImageStyle()} width={150} />);;
        }
    }
}

export default Logo;
