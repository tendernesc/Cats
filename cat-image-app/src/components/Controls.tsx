import React from 'react';
import styled from 'styled-components';
import CustomCheckbox from './CustomCheckbox';

const Button = styled.button`
  margin: 10px 0;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

type Props = {
  enabled: boolean;
  autoRefresh: boolean;
  onToggleEnabled: () => void;
  onToggleAutoRefresh: () => void;
  onGetCat: () => void;
};

const Controls: React.FC<Props> = ({
  enabled,
  autoRefresh,
  onToggleEnabled,
  onToggleAutoRefresh,
  onGetCat,
}) => (
  <div>
    <CustomCheckbox checked={enabled} onChange={onToggleEnabled} label="Enabled" />
    <CustomCheckbox checked={autoRefresh} onChange={onToggleAutoRefresh} label="Auto-refresh every 5 second" />
    <Button onClick={onGetCat} disabled={!enabled}>Get cat</Button>
  </div>
);

export default Controls;