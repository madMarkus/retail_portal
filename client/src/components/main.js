import React from 'react';
import PortalBar from './portalBar';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import CreateRedactDialog from './createRedactDialog';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import {connect} from 'react-redux';
import {fetchSuppliers} from '../actions'
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';

//import '../assets/main.css'

const styles = theme => ({
    root: {
      width: 'auto',
      marginTop: theme.spacing.unit * 3,
      marginLeft: theme.spacing.unit * 2,
      marginRight: theme.spacing.unit * 2,
    },
    table: {
      minWidth: 700,
    },
    button: {
        position: 'absolute',
        right: 16,
        bottom: 16,
    },
  });

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            suppliersArray: [],
            item: null,
            createRedactDialogType: '',
            createRedactDialogOpen: false,
        }
    }

    componentWillMount(){
        this.props.fetchSuppliers();
    }

    handleRowClick = (item) => {
        this.setState({
            createRedactDialogOpen: true, 
            createRedactDialogType: 'redact', 
            item: item,
        });
    }

    handleDeleteClick = (event, item) => {
        event.preventDefault();
        event.stopPropagation();
        fetch(`http://retailportal/api/suppliers/delete/${item.id}`, {
            method: 'DELETE',
            headers: {},
            body: '',
        }).then(res => this.props.fetchSuppliers());
    }

    render() {

        return (
            <div>
                <PortalBar />

                <Paper className={this.props.classes.root}>
                    <Table className={this.props.classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Phone</TableCell>
                                <TableCell>E-mail</TableCell>
                                <TableCell>Address</TableCell>
                                <TableCell padding='none'></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {this.props.suppliers.map(supplier => {
                            return (
                            <TableRow key={supplier.id} onClick={() => this.handleRowClick(supplier)}>
                                <TableCell>{supplier.name}</TableCell>
                                <TableCell>{supplier.phone}</TableCell>
                                <TableCell>{supplier.email}</TableCell>
                                <TableCell>{supplier.address}</TableCell>
                                <TableCell padding='none'>
                                    <IconButton onClick={(event)=>this.handleDeleteClick(event, supplier)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                            );
                        })}
                        </TableBody>
                    </Table>
                </Paper>

                <Button variant="fab" color="secondary" className={this.props.classes.button}
                onClick={()=>this.setState({createRedactDialogOpen: true, createRedactDialogType: 'add', item: null})}>
                    <AddIcon />
                </Button>
                

                <CreateRedactDialog 
                    key={Date.now()}
                    item={this.state.item}
                    type={this.state.createRedactDialogType}
                    open={this.state.createRedactDialogOpen}
                    onClose={()=> {
                        this.setState({createRedactDialogOpen: false});
                        this.props.fetchSuppliers();
                        console.log("onClose");
                    }}
                />
            </div>
          );
    }
}

const mapStateToProps = (state) => (
    {
        suppliers: state.suppliers.items,
        isFetching: state.suppliers.isFetching,
    }
)

export default connect(mapStateToProps, {fetchSuppliers})(withStyles(styles)(Main));
