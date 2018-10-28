import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import logo from '../../assets/images/tsh-chem.jpg'


class TableComponent extends React.Component {

    componentDidMount() {
        this.props.fetchList();
    }

    render() {
        const {classes, data} = this.props;
        console.log(classes);

        return (
            <Paper className={classes.root}>
                <img src={logo} alt="TSH Chemistry" className={classes.logo}/>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <CustomTableCell>Name</CustomTableCell>
                            <CustomTableCell numeric>Atomic Weight</CustomTableCell>
                            <CustomTableCell numeric>Atomic Number</CustomTableCell>
                            <CustomTableCell numeric>Group</CustomTableCell>
                            <CustomTableCell numeric>Period</CustomTableCell>
                            <CustomTableCell>Finder</CustomTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(row => {
                            return (
                                <TableRow className={classes.row} key={row.id}>
                                    <CustomTableCell component="th" scope="row">
                                        {row.name}
                                    </CustomTableCell>
                                    <CustomTableCell numeric>{row.atomic_weight}</CustomTableCell>
                                    <CustomTableCell numeric>{row.atomic_number}</CustomTableCell>
                                    <CustomTableCell numeric>{row.group}</CustomTableCell>
                                    <CustomTableCell numeric>{row.period}</CustomTableCell>
                                    <CustomTableCell>{row.finder}</CustomTableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );

    }


}

TableComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    fetchList: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
};

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: 15,
        overflowX: 'auto',
        textAlign: 'center',
        justifyContent: 'center'
    },
    table: {
        minWidth: 1000,
        margin: 'auto',
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
    logo: {
        textAlign: 'center',
        width: 200,
        height: 'auto',
    }
});

export default withStyles(styles)(TableComponent);