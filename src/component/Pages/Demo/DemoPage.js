import React from 'react';
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({

    root: {
        display: "flex"
    },

    toolbar: {
        display: "flex",
        alignItems: "center",
        marginTop: theme.spacing.unit,
        justifyContent: "flex-end",
        padding: "0 8px",
        ...theme.mixins.toolbar
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3
    },
}));


function DemoPage() {
    const classes = useStyles();
    return (
        <React.Fragment>

            <div className={classes.root}>
                <main className={classes.content}>
                    <div className={classes.toolbar} />

                    <p>Users</p>
                    <Typography paragraph>
                        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
                        ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
                        elementum integer enim neque volutpat ac tincidunt. Ornare
                        suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
                        volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
                        Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
                        ornare massa eget egestas purus viverra accumsan in. In hendrerit
                        gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
                        aliquam sem et tortor. Habitant morbi tristique senectus et.
                        Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean
                        euismod elementum nisi quis eleifend. Commodo viverra maecenas
                        accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
                        ultrices sagittis orci a.
                  </Typography>
                    <Typography paragraph>foo</Typography>
                </main>
            </div>
        </React.Fragment>
    )
}

export default DemoPage
