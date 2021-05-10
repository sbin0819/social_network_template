import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

const Container = styled.div`
  .ql-editor {
    min-height: 18em;
  }
`;

const write = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <Container>
        <ReactQuill
          value={value}
          onChange={setValue}
          placeholder="Write Something..."
        />
      </Container>
    </div>
  );
};

export default write;
