import React from 'react';
import Dialog, {DialogTitle, DialogActions, DialogContent} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import {EditInCircle} from '../assets/icons';
import AddCircle from 'material-ui-icons/AddCircle'
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    header: {
        display:'flex', 
        justifyContent:'flex-start', 
        flexDirection: 'row',
        alignItems:'center',
        padding: '16 16 0 16',
    },

    content: {
        display:'flex', 
        justifyContent:'flex-start', 
        flexDirection: 'column',
        alignItems:'flex-start',
        padding: '0 24 8 24',
    },

    contentItem: {
        marginTop: 16,
    },

    checkboxSetting: {
        width: 24,
        marginRight: 8,
    },

    editIcon: {
        margin: '0 8 0 0',
        height:40, 
        width:40, 
        color:'#FFB300'
    },

    addIcon: {
        margin: '0 8 0 0',
        height:40, 
        width:40, 
        color:'#03A9F4'
    },
})

class CreateRedactDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: false,
          item: this.props.item !== null 
          ? 
          this.props.item 
          : 
            {
                name: '',
                phone: '',
                email: '',
                address: '',
            },
        };
    }

    handleAddClick = () => {
      if (this.state.item.name !== '') {
          
        fetch('http://retailportal/api/suppliers/add', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(this.state.item),
        }).then(res => this.handleClose());
      }
      else {
        this.setState({error:true})
      }
    };

    handleSaveClick = () => {
        if (this.state.item.name !== '') {
            fetch(`http://retailportal/api/suppliers/update/${this.state.item.id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(this.state.item),
        }).then(res => this.handleClose());
        }
        else {
          this.setState({error:true})
        }
      };

    handleClose = () => {
      this.setState({error:false});
      this.props.onClose();
    };

    onEnter = (e) => {
      if (e.key === 'Enter') {
        this.props.type === 'redact' ? this.handleSaveClick() : this.handleAddClick();
      }
    }

  render() {
      
    return (
        <div>
            <Dialog 
                open={this.props.open} 
                onClose={this.handleClose} 
                fullWidth
            >
                <DialogTitle disableTypography={true} style={{padding: 0}}>
                    <div className={this.props.classes.header}>
                        {this.props.type === 'redact' 
                        ?
                            <EditInCircle className={this.props.classes.editIcon}/>
                        :
                            <AddCircle className={this.props.classes.addIcon}/>
                        }
                        <Typography variant='title'>
                            {this.props.type === 'redact'
                            ?
                                `Change supplier`
                            :
                                'Add supplier'
                            }
                        </Typography>
                    </div>
                </DialogTitle>

                <DialogContent style={{padding: 0}}>
                    <div className={this.props.classes.content}>
                        {Object.keys(this.state.item).filter(field => field !== 'id').map((field) => (
                            <TextField
                                key={field}
                                margin="normal"
                                error={field === 'name' ? this.state.error : false}
                                className={this.props.classes.contentItem}
                                fullWidth
                                label={field}
                                placeholder={field}

                                onChange={(e) => this.setState({item: {...this.state.item, [field]: e.target.value}})}

                                onKeyPress={(e) => this.onEnter(e)}
                                value={this.state.item[field]}
                            />
                        ))}
                    </div>
                </DialogContent>

                <DialogActions style={{padding: 0}}>
                    <Button color='primary' onClick={this.handleClose}>
                        Cancel
                    </Button>
                    {this.props.type === 'redact' 
                    ?
                        <Button color='primary' onClick={this.handleSaveClick}>
                            Save
                        </Button>
                    :
                        <Button color='primary' onClick={this.handleAddClick}>
                            Add
                        </Button>
                    }
                    
                </DialogActions>
            </Dialog>
        </div>
    );
  }
}

export default withStyles(styles)(CreateRedactDialog);
