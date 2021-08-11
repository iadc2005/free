import {
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  Link,
  List,
  Table,
  LinkDesign,
  ShellBar,
  Label,
  TableColumn,
  ThemeProvider,
  StandardListItem
} from '@ui5/webcomponents-react';
import React from 'react';
import './App.css';
import data from './xy.json';
import Row from './Row';
import SearchBar from './SearchBar';
import { render } from '@testing-library/react';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {filterText: ''}
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(text){
    this.setState({filterText: text});
  }

  render(){
    return (
      <ThemeProvider>
        <SearchBar onFilterTextChange={this.handleFilterTextChange}></SearchBar>
        <Table
        columns={<><TableColumn style={{width: '12rem'}}><Label>Defect Comment</Label></TableColumn>
        <TableColumn minWidth={800} popinText="L Code"><Label>L Code</Label></TableColumn>
        <TableColumn demandPopin minWidth={600} popinText="G Code 1"><Label>G Code 1</Label></TableColumn>
        <TableColumn demandPopin minWidth={600} popinText="G Code 2"><Label>G Code 2</Label></TableColumn>
        <TableColumn demandPopin minWidth={600} popinText="G Code 3"><Label>G Code 3</Label></TableColumn></>}
        >
          {
            data.map((item) => {
             return item["Defect Comment"].indexOf(this.state.filterText) === -1 ?
               null:
              <Row item={item}></Row>
            })
          }
        </Table>
  
      </ThemeProvider>
    );
  }
  
}

export default App;
