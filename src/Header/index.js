//libraries
import React from 'react'
import convert from 'color-convert'

//assets
import picker from '../app/img/picker.svg'
import picker2 from '../app/img/picker2.svg'
import question from '../app/img/question.svg'
import question2 from '../app/img/question2.svg'

class HeaderComponent extends React.Component {

    isBaseColorDark() {
        let darkColor = false
        if (this.props.baseColor.length >= 3 && this.props.schemesCombinations.length > 0 && !this.props.loading) {
            let color  = convert.hex.hsl(this.props.baseColor)
            if (color[2] < 60) darkColor = true
        }
        return darkColor
    }

    render() {

        let baseColor = this.props.schemes && this.props.baseColor.length >= 3 && !this.props.loading ? this.props.baseColor : null

        let textColor = this.isBaseColorDark() ? '#ffffff' : '#333333'

        return (
            <div className='HeaderComponent' style={{color: textColor, background: baseColor}}>
                <div className='picker'>
                    <img onClick={this.props.openPicker} src={this.isBaseColorDark() ? picker2 : picker} />
                    <span onClick={this.props.openPicker} style={{color: textColor}}>Picker</span>
                </div>
                <h1 className='title'>
                Rangi Bora
                </h1>
                <a className='q'>
                    <img onClick={this.props.openAbout} src={this.isBaseColorDark() ? question2 : question}/>
                </a>
            </div>
        )
    }

} // HeaderComponent

export default HeaderComponent
