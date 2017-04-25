import React from 'react';
import './Palette.css';

const defaultHeight = '100%';

const Palette = ({ height = defaultHeight }) => (
  <div className="palette" style={{ height }}/>
);

export default Palette;
