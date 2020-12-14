import { message } from "antd";
import PropTypes from "prop-types";
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorInfo: "",
    };
  }

  static getDerivedStateFromError(error) {
    // eslint-disable-next-line no-console
    console.log(error);
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: error };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      message.error(
        `Something went wrong. This is not you. Please try to login again.`
      );
      return <div>Something went wrong. Refresh the page.</div>;
    } else {
      return this.props.children;
    }
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
};
export default ErrorBoundary;
