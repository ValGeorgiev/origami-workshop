import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)

    this.state =  {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log('Component Did Catch is triggered', errorInfo)
  }


  render() {
    if (this.state.hasError) {
      window.location.href = '/error'
      return null
    }

    return (this.props.children)
  }
}

export default ErrorBoundary