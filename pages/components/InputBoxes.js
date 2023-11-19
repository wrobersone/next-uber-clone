
import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Input = styled.input`
  background-color: #EFEFEF;
  padding: 4px;
  margin-bottom: 8px;
  border: 1px solid lightgray;
  border-radius: 5px;
  border: none;
  outline: none;
`;

const InputBoxes = ({ pickup, dropoff, onPickupChange, onDropoffChange }) => {
  return (
    <InputContainer>
      <Input
        type="text"
        placeholder="Enter Pickup Location"
        value={pickup}
        onChange={onPickupChange}
      />
      <Input
        type="text"
        placeholder="Where To?"
        value={dropoff}
        onChange={onDropoffChange}
      />
    </InputContainer>
  );
};

export default InputBoxes;
