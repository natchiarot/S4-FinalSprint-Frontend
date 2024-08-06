import { render, screen } from '@testing-library/react';
import App from './App';
import Error404 from './components/Error404';
import FrontPage from './components/FrontPage';
import Signin from './components/SigninPage';
import Signup from './components/SignupPage';
import SearchPage from './components/SearchPage';
import ResultsPage from './components/ResultsPage';

test('renders Header', () => {
  render(<App />);
  const linkElement = screen.getByText(/“Welcome to efficient hiring!”/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders FrontPage', () => {
  render(<FrontPage />);
  const linkElement = screen.getByText(/Key Features/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Footer', () => {
  render(<App />);
  const linkElement = screen.getByText(/Money4Lifeforce Ltd. All rights are reserved/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Error404', () => {
  render(<Error404 />);
  const linkElement = screen.getByText(/404/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders SigninPage', () => {
  render(<Signin />);
  const linkElement = screen.getByText(/Don't have an account/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders SignupPage', () => {
  render(<Signup />);
  const linkElement = screen.getByText(/New User Sign Up/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders SearchPage', () => {
  render(<SearchPage />);
  const linkElement = screen.getByText(/Search by keyword:/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders ResultsPage', () => {
  render(<ResultsPage />);
  const linkElement = screen.getByText(/Resumé Search Results:/i);
  expect(linkElement).toBeInTheDocument();
});
