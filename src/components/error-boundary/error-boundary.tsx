import React, { Component, ReactNode } from "react";

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
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#fff",
            color: "#111",
            textAlign: "center",
            padding: "2rem",
          }}
        >
          <div>
            <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
              Something went wrong
            </h1>
            <p style={{ marginBottom: "1.5rem", opacity: 0.7 }}>
              Please refresh the page to continue.
            </p>
            <button
              onClick={this.handleReload}
              style={{
                padding: "0.75rem 1.5rem",
                border: "1px solid #111",
                background: "transparent",
                cursor: "pointer",
              }}
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
