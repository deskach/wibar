var WiProgressBar = React.createClass({
  getInitialState: function() {
    return {
      value: 40
    };
  },

  percentVal: function() {
    return this.state.value.toString() + '%';
  },

  increment: function(increment) {
    var newVal = this.state.value + increment;

    if (newVal < 0) {
      newVal = 0;
    } else if(newVal > 100) {
      newVal = 100;
    }

    this.setState({
      value: newVal
    });
  },

  render: function () {
    var val = this.state.value;

    return (
      <div className='progress'>
        <div className='progress-bar'
             role='progressbar'
             aria-valuenow={val}
             aria-valuemin='0'
             aria-valuemax='100'
             style={{width: this.percentVal()}}
        >
          {this.percentVal()}
        </div>
      </div>
    );
  }
});

var IncrementButton = React.createClass({
  getInitialState: function () {
    return {
      value: 10
    };
  },

  render: function () {

  }
});

var MainApp = React.createClass({
  getInitialState: function () {
    var p1 = (<WiProgressBar />);

    return {
      p1: p1,
      activeBar: p1
    };
  },

  incrementActiveBar: function(value) {
    this.state.activeBar.increment(value);
  },

  render: function () {
    var p1 = this.state.p1;

    return (
      <div id="ThreeBars">
        <h1>Progress Bar Demo</h1>
        {p1}
      </div>
    )
  }
});

React.render(
  <MainApp />,
  document.getElementById('container')
);
