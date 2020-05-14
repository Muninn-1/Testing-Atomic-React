import PropTypes from 'prop-types'
import { DEFAULT_FONTSIZE, CLASSNAME_PROPS } from 'constants/styles/styles';




/**
 * Calculate fontSize value using a multiplicator
 * @param x The multiplicator to customise fontSize (Default fontSize => 15px)
 * @returns (string) The final value of fontSize
 */
export const multiplicateFontSize = x => `${ x * DEFAULT_FONTSIZE }px`;

multiplicateFontSize.propTypes = { x: PropTypes.number.isRequired };





export const addClassNames = ( styles, props ) => Object.keys(props).filter(p => CLASSNAME_PROPS.includes(p) && props[p]).map(p => styles[p]).join(' ');

addClassNames.propTypes = { 
    styles: PropTypes.object.isRequired, 
    props: PropTypes.array.isRequired 
};






export function removeClassNamesProps(props) {
    const finalProps = props;
    
    Object.keys(props).forEach(
        function(prop) {
            if( CLASSNAME_PROPS.includes(prop) ) {
                delete finalProps[prop];
            }
        }
    );

    return finalProps;
};

removeClassNamesProps.PropTypes = { props: PropTypes.object.isRequired };










/**
 * Calculate brightness value by RGB or HEX color.
 * @param color (String) The color value in RGB or HEX (for example: #000000 || 0,0,0)
 * @returns (Number) The brightness value (dark) 0 ... 255 (light)
 */
export function brightnessByColor (color) {
    const isHEX = color.indexOf("#") === 0;
    const isRGB = color.indexOf("rgb") === 0;
    let r = null;
    let g = null;
    let b = null;

    if (isHEX) {
        const hasFullSpec = color.length === 7;
        const rgbArray = color.substr(1).match(hasFullSpec ? /(\S{2})/g : /(\S{1})/g);
        if (rgbArray) {
            r = parseInt(rgbArray[0] + (hasFullSpec ? '' : rgbArray[0]), 16);
            g = parseInt(rgbArray[1] + (hasFullSpec ? '' : rgbArray[1]), 16);
            b = parseInt(rgbArray[2] + (hasFullSpec ? '' : rgbArray[2]), 16);
        }
    }
    if (isRGB) {
        const rgbArray = color.match(/(\d+){3}/g);
        if (rgbArray) {
            r = rgbArray[0];
            g = rgbArray[1];
            b = rgbArray[2];
        }
    }
    
    if (typeof r != "undefined") {
        return ((r*299)+(g*587)+(b*114))/1000;
    }
};

