var WiProgressBar = React.createClass({
  percentVal: function() {
    return this.props.value.toString() + '%';
  },

  render: function () {
    var val = this.props.value;

    return (
      <div className='progress'>
        <div className='progress-bar'
             role='progressbar'
             aria-valuenow={val}
             aria-valuemin='0'
             aria-valuemax='100'
             style={{width: this.percentVal()}}
        >
          <span> {this.percentVal()} </span>
        </div>
      </div>
    );
  }
});

var IncrementButton = React.createClass({
  doIncrement: function() {
    this.props.doIncrement(this.props.value);
  },

  render: function () {
    return (
      <button className="btn btn-default"
              onClick = { this.doIncrement }>
        { this.props.value }
      </button>
    );
  }
});

var MainApp = React.createClass({
  getInitialState: function () {
    return {
      barValues: [10],
      activeBar: 0
    };
  },

  incrementActiveBar: function(value) {
    var idx = this.state.activeBar,
      barValues = this.state.barValues,
      newValue = barValues[idx] + parseInt(value)
      ;

    if(newValue < 0) {
      newValue = 0;
    } else if (newValue > 100) {
      newValue = 100;
    }

    barValues[idx] = newValue;

    this.setState({
      barValues: barValues
    });
  },

  render: function () {
    var p1 = (
      <WiProgressBar value={this.state.barValues[0]}/>
    );

    return (
      <div id="ThreeBars">
        <h1>Progress Bar Demo</h1>
        {p1}
        <hr/>
        <IncrementButton
          value='-25'
          doIncrement={this.incrementActiveBar}
        />&nbsp;
        <IncrementButton
          value='-10'
          doIncrement={this.incrementActiveBar}
        />&nbsp;
        <IncrementButton
          value='+10'
          doIncrement={this.incrementActiveBar}
        />&nbsp;
        <IncrementButton
          value='+25'
          doIncrement={this.incrementActiveBar}
        />&nbsp;
      </div>
    )
  }
});

React.render(
  <MainApp />,
  document.getElementById('container')
);
