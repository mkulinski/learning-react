var React = require('react');
var ReactDOM = require('react-dom');

var ChangeName = React.createClass({
    getInitialState: function(){
      return {
          username: '@michael'
      }
    },
    changeTheText: function(e){
        this.setState({
            username: e.target.value
        });
    },
    render: function(){
        return (
            <div>
                <h1>Hello {this.state.username}!!!!!</h1>
                <input type="text" value={this.state.username} onChange={this.changeTheText} />
            </div>
        );
    }
});

ReactDOM.render(<ChangeName />, document.getElementById('app'));