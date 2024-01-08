import React from 'react';
import ReactDOM from 'react-dom';
const withLoading = (WrappedComponent) => {
  class WithLoading extends React.Component {
    state = {
      isLoading: true,
    };

    componentDidMount() {
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 2000);
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          loading={this.state.isLoading}
        />
      );
    }
  }

  WithLoading.displayName = `withLoading(${WrappedComponent.displayName || WrappedComponent.name})`;

  return WithLoading;
};

const MyComponent = ({ loading }) => (
  <div>
    {loading ? <p>Loading...</p> : <p>Hello, world!</p>}
  </div>
);

const MyComponentWithLoading = withLoading(MyComponent);

ReactDOM.render(
  <MyComponentWithLoading />,
  document.getElementById("root")
);