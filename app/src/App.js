import { saveLocale } from './i18nInit';
import React, { Component } from 'react';
import GithubRibbon from './GithubRibbon';
import { t, jt } from 'ttag';
import logo from './logo.svg';
import './App.css';

const setLocale = (locale) => (ev) => {
  ev.preventDefault();
  saveLocale(locale);
  window.location.reload();
}

const LangSwitcher = () => (
  <div className="Lang-switch">
    <h2>{ t`Switch lang`}</h2>
    <a href='/' onClick={setLocale('uk')}>uk</a>
    <a href='/' onClick={setLocale('ru')}>ru</a>
    <a href='/' onClick={setLocale('en')}>en</a>
  </div>
)

class App extends Component {
  render() {
    const appLink = <code>src/App.js</code>;
    return (
      <div className="App">
        <header className="App-header">
          <LangSwitcher/>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            { jt`Edit ${ appLink } and save to reload.` }
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            { t`Learn React` }
          </a>
          <a
            className="App-link"
            href="https://ttag.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            { t`Learn ttag` }
          </a>
        </header>
        <GithubRibbon />
      </div>
    );
  }
}

export default App;
