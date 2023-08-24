// src/App.js
import React from 'react';
import ApolloClient from './apollo';
import { ApolloProvider } from '@apollo/client';
import ExpensesList from './components/ExpensesList';
import AddExpenseForm from './components/AddExpenseForm';
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

function App() {
  loadDevMessages();
  loadErrorMessages();
  return (
    <ApolloProvider client={ApolloClient}>
      <div>
        <h1>Personal Money Management App</h1>
        <AddExpenseForm />
        <ExpensesList />
      </div>
    </ApolloProvider>
  );
}

export default App;
