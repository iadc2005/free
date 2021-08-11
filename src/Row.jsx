import React from 'react';
import { TableRow, TableCell, Label } from '@ui5/webcomponents-react';

class Row extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <TableRow>
                <TableCell>
                    <Label>
                        {this.props.item["Defect Comment"]}
                    </Label>
                </TableCell>
                <TableCell>
                    <Label>
                        {this.props.item["L Code"]}
                    </Label>
                </TableCell>
                <TableCell>
                    <Label>
                        {this.props.item["G Code 1"]}
                    </Label>
                </TableCell>
                <TableCell>
                    <Label>
                        {this.props.item["G Code2"]}
                    </Label>
                </TableCell>
                <TableCell>
                    <Label>
                        {this.props.item["G Code 3"]}
                    </Label>
                </TableCell>
            </TableRow>
        );
    }
}

export default Row