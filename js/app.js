class BoxForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            height: 200,
            width: 200,
            colour: '#0000ff',
        }

        this.handleHeightChange = this.handleHeightChange.bind(this);
        this.handleWidthChange = this.handleWidthChange.bind(this);
        this.handleColourChange = this.handleColourChange.bind(this);
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

    handleColourChange(event) {
        this.setState({colour: event.target.value});
        document.getElementById('title').style.color = event.target.value;
    }

    render() {
        return (
            <div className='app2'>
                <div className='row d-flex justify-content-center'>
                    <BoxNumericPropertySetter
                        className='form-control'
                        propertyName='Height'
                        propertyValue={this.state.height}
                        onChange={this.handleHeightChange}
                    />
                    <BoxNumericPropertySetter
                        className='form-control'
                        propertyName='Width'
                        propertyValue={this.state.width}
                        onChange={this.handleWidthChange}
                    />
                </div>
                <div className='input-group mt-3 d-flex justify-content-center'>
                    <label className='col-form-label-lg mx-2' htmlFor='colour'>Colour</label>< br />
                    <input className='form-control-color' id='colour' type='color' value={this.state.colour} onInput={this.handleColourChange}/>
                </div>
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
            <div className='col-auto'>
                <label className='col-form-label-lg' htmlFor={'size-' + this.props.propertyName}>{this.props.propertyName}</label>
                <div className='input-group'>
                    <span className='input-group-text'>px</span>
                    <input className={this.props.className} id={'size-' + this.props.propertyName} type='number' min='1' value={this.props.propertyValue} onChange={this.handleSizeChange}/>
                </div>
            </div>
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
            <div style={style} className='mt-5 mx-auto'/>
        );
    }
}


ReactDOM.render(
    <BoxForm />,
    document.getElementById('app')
)