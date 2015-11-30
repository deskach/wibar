var WiProgressBar=React.createClass({displayName:"WiProgressBar",percentVal:function(){return this.props.value.toString()+"%"},render:function(){var a=this.props.value;return React.createElement("div",{className:"progress"},React.createElement("div",{className:"progress-bar",role:"progressbar","aria-valuenow":a,"aria-valuemin":"0","aria-valuemax":"100",style:{width:this.percentVal()}},React.createElement("span",null," ",this.percentVal()," ")))}}),IncrementButton=React.createClass({displayName:"IncrementButton",doIncrement:function(){this.props.doIncrement(this.props.value)},render:function(){return React.createElement("button",{className:"btn btn-default",onClick:this.doIncrement},this.props.value)}}),ProgressBarSelect=React.createClass({displayName:"ProgressBarSelect",onChange:function(a){this.props.setActiveBar(a.target.value)},render:function(){for(var a=[],b=0;b<this.props.barCount;b++){var c="#progress"+(b+1);a.push(React.createElement("option",{value:b,key:b},c))}return React.createElement("select",{className:"selectpicker",onChange:this.onChange},a)}}),MainApp=React.createClass({displayName:"MainApp",getInitialState:function(){return{barValues:[25,50,75],activeBar:0}},setActiveBar:function(a){a>=0&&a<this.state.barValues.length&&this.setState({activeBar:a})},incrementActiveBar:function(a){var b=this.state.activeBar,c=this.state.barValues,d=c[b]+parseInt(a);0>d?d=0:d>100&&(d=100),c[b]=d,this.setState({barValues:c})},render:function(){return React.createElement("div",{id:"ThreeBars"},React.createElement("h1",null,"Progress Bar Demo"),React.createElement(WiProgressBar,{value:this.state.barValues[0]}),React.createElement(WiProgressBar,{value:this.state.barValues[1]}),React.createElement(WiProgressBar,{value:this.state.barValues[2]}),React.createElement("hr",null),React.createElement(ProgressBarSelect,{barCount:this.state.barValues.length,setActiveBar:this.setActiveBar})," ",React.createElement(IncrementButton,{value:"-25",doIncrement:this.incrementActiveBar})," ",React.createElement(IncrementButton,{value:"-10",doIncrement:this.incrementActiveBar})," ",React.createElement(IncrementButton,{value:"+10",doIncrement:this.incrementActiveBar})," ",React.createElement(IncrementButton,{value:"+25",doIncrement:this.incrementActiveBar})," ")}});React.render(React.createElement(MainApp,null),document.getElementById("container"));