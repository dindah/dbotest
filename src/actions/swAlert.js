
export const OpenAlert = (title, body, onDismiss) => dispatch => {
    dispatch({
        type: 'ALERT_OPEN', 
        isMsgError: false, 
        body, 
        title, 
        onAction: {
            onConfirm: onDismiss
        }
    })
}

export const OpenErrorAlert = (title, body, onDismiss) => dispatch => {
    dispatch({
        type: 'ALERT_OPEN', 
        isMsgError: true, 
        body, 
        title, 
        onAction: {
            onConfirm: onDismiss
        }
    })
}

export const OpenConfirmAlert = (title, body, onConfirm, onCancel) => dispatch => {
    dispatch({
        type: 'ALERT_OPEN',
        isWarning: true,
        body,
        title,
        onAction: {
            onConfirm: onConfirm,
            onCancel: onCancel
        }
    })
}

export const CloseAlert = () => dispatch => {
    dispatch({ type: 'CLOSE_ALERT' })
}