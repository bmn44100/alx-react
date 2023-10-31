import React from 'react';
import './Footer.css'
import { getFullYear, getFooterCopy } from '../utils/utils';

export default function Footer(props) {
    return (
        <footer className="App-footer">
          <p>Copyright {getFullYear} - {getFooterCopy(true)}</p>
        </footer>
    );
  }