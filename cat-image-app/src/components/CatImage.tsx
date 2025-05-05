import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  margin-top: 10px;
`;

const Loader = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
  font-size: 18px;
  font-weight: bold;
`;

type Props = {
  url: string | null;
  loading: boolean;
};

const CatImage: React.FC<Props> = ({ url, loading }) => {
  if (loading) return <Loader>Loading...</Loader>;
  if (!url) return null;
  return <Img src={url} alt="A cat" />;
};

export default CatImage;
