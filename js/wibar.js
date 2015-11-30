var WiProgressBar = React.createClass({displayName: "WiProgressBar",
  percentVal: function() {
    return this.props.value.toString() + '%';
  },

  render: function () {
    var val = this.props.value;

    return (
      React.createElement("div", {className: "progress"}, 
        React.createElement("div", {className: "progress-bar", 
             role: "progressbar", 
             "aria-valuenow": val, 
             "aria-valuemin": "0", 
             "aria-valuemax": "100", 
             style: {width: this.percentVal()}
        }, 
          React.createElement("span", null, " ", this.percentVal(), " ")
        )
      )
    );
  }
});

var IncrementButton = React.createClass({displayName: "IncrementButton",
  doIncrement: function() {
    this.props.doIncrement(this.props.value);
  },

  render: function () {
    return (
      React.createElement("button", {className: "btn btn-default", 
              onClick:  this.doIncrement}, 
         this.props.value
      )
    );
  }
});

var MainApp = React.createClass({displayName: "MainApp",
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
      React.createElement(WiProgressBar, {value: this.state.barValues[0]})
    );

    return (
      React.createElement("div", {id: "ThreeBars"}, 
        React.createElement("h1", null, "Progress Bar Demo"), 
        p1, 
        React.createElement("hr", null), 
        React.createElement(IncrementButton, {
          value: "-25", 
          doIncrement: this.incrementActiveBar}
        ), " ", 
        React.createElement(IncrementButton, {
          value: "-10", 
          doIncrement: this.incrementActiveBar}
        ), " ", 
        React.createElement(IncrementButton, {
          value: "+10", 
          doIncrement: this.incrementActiveBar}
        ), " ", 
        React.createElement(IncrementButton, {
          value: "+25", 
          doIncrement: this.incrementActiveBar}
        ), " "
      )
    )
  }
});

React.render(
  React.createElement(MainApp, null),
  document.getElementById('container')
);
