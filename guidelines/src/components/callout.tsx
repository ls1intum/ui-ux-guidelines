import React from 'react';

export type CalloutProps = {
    children: React.ReactNode;
    content: string;
    variant?: 'success' | 'info' | 'warning' | 'danger';
};

const styleConfig = {
    success: {
        backgroundColor: '#e6f7e6',
        borderColor: '#5cb85c',
        icon: '✅',
    },
    info: {
        backgroundColor: '#e7f3fe',
        borderColor: '#2196f3',
        icon: 'ℹ️',
    },
    warning: {
        backgroundColor: '#fffbe5',
        borderColor: '#ffc107',
        icon: '⚠️',
    },
    danger: {
        backgroundColor: '#fdecea',
        borderColor: '#f44336',
        icon: '🚫',
    },
};

const Callout: React.FC<CalloutProps> = ({ children, content, variant = 'success' }) => {
    const currentStyle = styleConfig[variant];

    const bannerStyle: React.CSSProperties = {
        backgroundColor: currentStyle.backgroundColor,
        borderLeft: `5px solid ${currentStyle.borderColor}`,
        padding: '15px',
        margin: '15px 0',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
    };

    return (
        <div style={bannerStyle} role="alert">
            <span style={{ fontSize: '1.2em' }}>{currentStyle.icon}</span>
            {children}
        </div>
    );
};

export default Callout;