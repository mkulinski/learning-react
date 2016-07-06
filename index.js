var React = require('react');
var ReactDOM = require('react-dom');

var HelloUser = React.createClass({
    getInitialState: function() {
        return {
            username: 'AnnonymousUser'
        }
    },
    handleChange: function(e) {
      this.setState({
          username: e.target.value
      });
    },
    render: function() {
        return (
            <div>
                <h1>Hello {this.state.username}</h1><br />
                Change name: <input type="text" value={this.state.username} onChange={this.handleChange} />
            </div>
        )
    }
});

ReactDOM.render(<HelloUser />, document.getElementById('root'));
