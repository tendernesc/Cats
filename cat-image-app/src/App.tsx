import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import CatImage from './components/CatImage';
import Controls from './components/Controls';

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
`;

const App: React.FC = () => {
  const [enabled, setEnabled] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [catUrl, setCatUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const fetchCat = async () => {
    setLoading(true);
    const res = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await res.json();
    setCatUrl(data[0]?.url);
    setLoading(false);
  };

  useEffect(() => {
    if (autoRefresh && enabled) {
      intervalRef.current = setInterval(fetchCat, 5000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoRefresh, enabled]);

  return (
    <Container>
      <Controls
        enabled={enabled}
        autoRefresh={autoRefresh}
        onToggleEnabled={() => setEnabled(!enabled)}
        onToggleAutoRefresh={() => setAutoRefresh(!autoRefresh)}
        onGetCat={fetchCat}
      />
      <CatImage url={catUrl} loading={loading} />
    </Container>
  );
};

export default App;
