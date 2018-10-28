const styles = theme => ({
    root: {
        width: '100%',
        marginTop: 15,
        overflowX: 'auto',
        textAlign: 'center',
        justifyContent: 'center'
    },
    table: {
        minWidth: 700,
        margin: 'auto',
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
    h1: {
        padding: 15,
        textAlign: 'center',
        marginLeft: 20,
    }
});