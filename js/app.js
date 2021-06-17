class BoxForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            height: 400,
            width: 400,
            colour: '#0000ff',
        }

        this.handleHeightChange = this.handleHeightChange.bind(this);
        this.handleWidthChange = this.handleWidthChange.bind(this);
    }

    handleSizePropertyChange(property, newSize) {
        /*
        * For changing the height and width
        * Will either return the new value, or if not a number, will maintain the current value.
        */
        if (!isNaN(newSize) && newSize > 0) {
            this.setState({[property]: parseInt(newSize)});
        } else {
            this.setState({[property]: this.state[property]});
        }
    }

    handleHeightChange(newHeight) {
        this.handleSizePropertyChange('height', newHeight);
    }

    handleWidthChange(newWidth) {
        this.handleSizePropertyChange('width', newWidth);
    }

    render() {
        return (
            <div className='app2'>
            <BoxNumericPropertySetter
                propertyName='Height'
                propertyValue={this.state.height}
                onChange={this.handleHeightChange}
            />
            <BoxNumericPropertySetter
                propertyName='Width'
                propertyValue={this.state.width}
                onChange={this.handleWidthChange}
            />
            <ColourBox
                height={this.state.height}
                width={this.state.width}
                colour={this.state.colour}
            />
            </div>
        );
    }
}


class BoxNumericPropertySetter extends React.Component {
    /*
    * Form to set height or width or other numeric properties.
    * */
    constructor(props) {
        super(props);

        this.handleSizeChange = this.handleSizeChange.bind(this);
    }

    handleSizeChange(event) {
        this.props.onChange(event.target.value);
    }

    render() {
        return (
            <label>{this.props.propertyName} :
                <input type='number' min='1' value={this.props.propertyValue} onChange={this.handleSizeChange}/>
            </label>
        )
    }
}


class ColourBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const style = {
            height: this.props.height,
            width: this.props.width,
            backgroundColor: this.props.colour
        }

        return (
            <div style={style} />
        );
    }
}


ReactDOM.render(
    <BoxForm />,
    document.getElementById('app')
)