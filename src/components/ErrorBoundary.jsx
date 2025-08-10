import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(_error, info) {
    console.error("ErrorBoundary capturó un error:", _error, info);
  }
  render() {
    if (this.state.hasError) {
      return <h2>Algo salió mal. Por favor recarga la página.</h2>;
    }
    return this.props.children;
  }
}