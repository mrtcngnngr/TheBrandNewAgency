import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState((s) => ({ ...s, errorInfo }));
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: '2rem',
          textAlign: 'center',
          fontFamily: 'Satoshi-Regular, sans-serif'
        }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#000' }}>
            Bir hata oluştu
          </h1>
          <p style={{ fontSize: '1rem', color: '#666', marginBottom: '0.5rem' }}>
            Üzgünüz, beklenmeyen bir hata meydana geldi. Lütfen sayfayı yenileyin.
          </p>
          {this.state.error && (
            <pre style={{ fontSize: '0.75rem', color: '#999', textAlign: 'left', maxWidth: '90%', overflow: 'auto', marginBottom: '1rem', padding: '1rem', background: '#f5f5f5', borderRadius: '4px' }}>
              {this.state.error.toString()}
            </pre>
          )}
          {this.state.errorInfo?.componentStack && (
            <pre style={{ fontSize: '0.7rem', color: '#999', textAlign: 'left', maxWidth: '90%', overflow: 'auto', marginBottom: '2rem', padding: '1rem', background: '#f0f0f0', borderRadius: '4px' }}>
              {this.state.errorInfo.componentStack}
            </pre>
          )}
          <button
            onClick={() => {
              this.setState({ hasError: false, error: null });
              window.location.href = '/';
            }}
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              backgroundColor: '#000',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontFamily: 'Satoshi-Regular, sans-serif'
            }}
          >
            Ana Sayfaya Dön
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

