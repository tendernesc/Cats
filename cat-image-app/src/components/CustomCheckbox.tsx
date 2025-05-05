import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  cursor: pointer;
`;

const Input = styled.input`
  margin-right: 8px;
`;

type Props = {
  checked: boolean;
  onChange: () => void;
  label: string;
};

const CustomCheckbox: React.FC<Props> = ({ checked, onChange, label }) => (
  <Label>
    <Input type="checkbox" checked={checked} onChange={onChange} />
    {label}
  </Label>
);

export default CustomCheckbox;