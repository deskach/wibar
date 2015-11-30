var WiProgressBar = React.createClass({displayName: "WiProgressBar",
  getInitialState: function() {
    return {
      value: 40
    };
  },

  percentVal: function() {
    return this.state.value.toString() + '%';
  },

  changeVal: function(increment) {
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
      React.createElement("div", {className: "progress"}, 
        React.createElement("div", {className: "progress-bar", 
             role: "progressbar", 
             "aria-valuenow": val, 
             "aria-valuemin": "0", 
             "aria-valuemax": "100", 
             style: {width: this.percentVal()}
        }, 
          this.percentVal()
        )
      )
    );
  }
});

var MainApp = React.createClass({displayName: "MainApp",
  getInitialState: function () {
    var p1 = (React.createElement(WiProgressBar, null));

    return {
      p1: p1
    };
  },

  render: function () {
    var p1 = this.state.p1;

    return (
      React.createElement("div", {id: "ThreeBars"}, 
        React.createElement("h1", null, "Progress Bar Demo"), 
        p1
      )
    )
  }
});

React.render(
  React.createElement(MainApp, null),
  document.getElementById('container')
);
