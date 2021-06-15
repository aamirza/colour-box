class BoxForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            height: 400,
            width: 400,
            colour: '#0000ff',
        }

        this.handleHeightChange = this.handleHeightChange.bind(this);
    }

    handleHeightChange(event) {
        const newValue = parseInt(event.target.value);
        if (!isNaN(newValue) && newValue > 0) {
            this.setState({height: parseInt(event.target.value)});
        } else {
            this.setState({height: this.state.height})
        }
    }

    render() {
        return (
            <div className='app2'>
                <div className='box-form'>
                    <label>Height:
                        <input type='number' min='1' value={this.state.height} onChange={this.handleHeightChange}/>
                    </label>
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