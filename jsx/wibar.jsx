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

var ProgressBarSelect = React.createClass({
  onChange: function(event) {
    this.props.setActiveBar(event.target.value);
  },

  render: function () {
    var options = [];

    for(var i = 0; i < this.props.barCount; i++) {
      var name = '#progress' + (i + 1);

      options.push((
        <option value={i}>{name}
        </option>
      ));
    }

    return (
      <select onChange={ this.onChange }>
        { options }
      </select>
    );
  }
});

var MainApp = React.createClass({
  getInitialState: function () {
    return {
      barValues: [25, 50, 75],
      activeBar: 0
    };
  },

  setActiveBar: function (value) {
    if (value >= 0 && value < this.state.barValues.length) {
      this.setState({
        activeBar: value
      });
    }
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
    return (
      <div id="ThreeBars">
        <h1>Progress Bar Demo</h1>
        <WiProgressBar value={this.state.barValues[0]}/>
        <WiProgressBar value={this.state.barValues[1]}/>
        <WiProgressBar value={this.state.barValues[2]}/>
        <hr/>
        <ProgressBarSelect
          barCount={ this.state.barValues.length }
          setActiveBar = { this.setActiveBar }
        />&nbsp;
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
