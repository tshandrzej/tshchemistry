import React, {Component, Fragment} from 'react';
import Grid from "@material-ui/core/Grid/Grid";
import {TableContainer} from "../table/table.container";


class HomeComponent extends Component {
    render() {
        return (
            <Fragment>
                <Grid container justify="center">
                    <Grid item>
                        <TableContainer/>
                    </Grid>
                </Grid>
            </Fragment>
        )

    }
}

export default HomeComponent;
