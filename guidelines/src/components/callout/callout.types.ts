import React from "react";

export enum CalloutVariant {
    Success = 'success',
    Info = 'info',
    Warning = 'warning',
    Danger = 'danger',
}

export type CalloutProps = {
    children: React.ReactNode;
    variant?: CalloutVariant;
};

// TODO make sure the banner adheres to the theme
export const CALLOUT_STYLE_CONFIG: Record<CalloutVariant, {
    backgroundColor: string;
    borderColor: string;
    icon: string;
}> = {
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
