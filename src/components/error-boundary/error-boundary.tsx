import { Component, ReactNode } from "react";
import "./error-boundary.scss";

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="pinkpanther-error-boundary" role="alert">
          <div>
            <h1 className="pinkpanther-error-title">Something went wrong</h1>
            <p className="pinkpanther-error-text">
              Please refresh the page to continue.
            </p>
            <button
              onClick={this.handleReload}
              className="pinkpanther-error-button"
            >
              Refresh
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
