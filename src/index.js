import React from "react";
import DarkColor from "./svg/dark_color.svg";
import DarkSolid from "./svg/dark_solid.svg";
import DarkTransparent from "./svg/dark_transparent.svg";
import LightColor from "./svg/light_color.svg";
import LightSolid from "./svg/light_solid.svg";
import LightTransparent from "./svg/light_transparent.svg";
import { StyleSheet, css } from 'aphrodite';

const title = "BREWERWALL";

const bebasNeueSemiRoundedRegular = {
    fontFamily: "BebasNeueSemiRoundedRegular",
    fontStyle: "normal",
    fontWeight: "bold",
    src: "url('./fonts/BebasNeueSemiRounded-Regular.eot?#iefix') format('embedded-opentype'), url('./fonts/BebasNeueSemiRounded-Regular.woff') format('woff'), url('./fonts/BebasNeueSemiRounded-Regular.ttf') format('truetype'), url('./fonts/BebasNeueSemiRounded-Regular.svg#BebasNeueSemiRounded-Regular') format('svg')",
    textRendering: "optimizeLegibility"
};

const styles = StyleSheet.create({
    wrapper: {
        lineHeight: '1.5'
    },
    logoTitleBase: {
        fontFamily: [bebasNeueSemiRoundedRegular],
        marginLeft: '.1em',
        lineHeight: '.95em',
        display: 'inline-block'
    },
    logoTitleExtraSmall: {
        paddingTop: '.38em',
        fontSize: "1.45em"
    },
    logoTitleSmall: {
        paddingTop: '.38em',
        fontSize: '1.8em'
    },
    logoTitleMedium: {
        paddingTop: '.30em',
        fontSize: '2.5em'
    },
    logoTitleHero: {
        paddingTop: '.27em',
        fontSize: '10em'
    },
    logoImageBase: {
        display: 'inline',
        verticalAlign: 'top',
        marginTop: 0,
    },
    logoImageExtraSmall: {
        width: 25
    },
    logoImageSmall: {
        width: 32
    },
    logoImageMedium: {
        width: 40
    },
    logoImageHero: {
        width: 150
    }
});

class Logo extends React.Component {
    static defaultProps = {
        type: "dark_color",
        textColor: "black",
        size: "small",
        showTitle: true
    };
    
    render() {
        return (
            <span className={css(styles.wrapper)}>
                {this.getLogoSVG()}
                {this.getLogoTitle()}
            </span>
        );
    }

    getLogoTitleStyle() {
        switch (this.props.size) {
            case "extra-small":
                return css(styles.logoTitleBase, styles.logoTitleExtraSmall, this.getColorStyle());
            case "small":
                return css(styles.logoTitleBase, styles.logoTitleSmall, this.getColorStyle());
            case "medium":
                return css(styles.logoTitleBase, styles.logoTitleMedium, this.getColorStyle());
            case "hero":
                return css(styles.logoTitleBase, styles.logoTitleHero, this.getColorStyle());
            default:
                return css(styles.logoTitleBase, styles.logoTitleExtraSmall, this.getColorStyle());
        }
    }

    getLogoTitle() {
        if(this.props.showTitle){
            return (
                <span className={this.getLogoTitleStyle()}>
                    {title}
                </span>
            );
        }
    }

    getLogoImageStyle() {
        switch (this.props.size) {
            case "extra-small":
                return css(styles.logoImageBase, styles.logoImageExtraSmall);
            case "small":
                return css(styles.logoImageBase, styles.logoImageSmall);
            case "medium":
                return css(styles.logoImageBase, styles.logoImageMedium);
            case "hero":
                return css(styles.logoImageBase, styles.logoImageHero);
            default:
                return css(styles.logoImageBase, styles.logoImageSmall);
        }
    }

    getLogoSVG() {
        switch (this.props.type) {
            case "light_color":
                return (<LightColor alt="logo" className={this.getLogoImageStyle()} />);
            case "light_transparent":
                return (<LightTransparent alt="logo" className={this.getLogoImageStyle()} />);
            case "light_solid":
                return (<LightSolid alt="logo" className={this.getLogoImageStyle()} />);
            case "dark_color":
                return (<DarkColor alt="logo" className={this.getLogoImageStyle()} />);
            case "dark_transparent":
                return (<DarkTransparent alt="logo" className={this.getLogoImageStyle()} />);
            case "dark_solid":
                return (<DarkSolid alt="logo" className={this.getLogoImageStyle()} />);
            default:
                return (<DarkColor alt="logo" className={this.getLogoImageStyle()} width={150} />);;
        }
    }

    getColorStyle() {
        var style = StyleSheet.create({
            myColor: {
                color: this.props.textColor || "black"
            }
        });

        return style.myColor;
    }
}

export default Logo;
