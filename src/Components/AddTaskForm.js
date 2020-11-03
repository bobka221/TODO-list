import React, {Components} from 'react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  Input,
  Button,
 } from 'reactstrap';

const Example = (props) => {
 
  return (
    <div>
      <InputGroup>
        <InputGroupAddon addonType="prepend"><Button>I'm a button</Button></InputGroupAddon>
        <Input />
      </InputGroup>
    </div>

    export default Example;