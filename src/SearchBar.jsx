import React from 'react';
import {Input, Icon} from '@ui5/webcomponents-react';
class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e){
        this.props.onFilterTextChange(e.target.value);
    }

    render(){
        return (
            <Input
                icon={<Icon name="search" />}
                onChange={this.handleInputChange}
                onInput={function noRefCheck(){}}
                onSuggestionItemPreview={function noRefCheck(){}}
                onSuggestionItemSelect={function noRefCheck(){}}
                onSuggestionScroll={function noRefCheck(){}}
            />
        )
    }
}

export default SearchBar