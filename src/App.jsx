import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

// get "tasks" with props in React component

const App = ({ data: { loading, tasks, error }}) => {

    function render() {
        if(loading) return <p>loading...</p>;
        if(error) return <div className="alert alert-danger" role="alert">{error.message}</div>;

        return (tasks.map(task => <p key={task.id}>{task.name}</p>));
    }

    return (
        <div className='container'>
            <h1>Camunda GraphQL Client Example</h1>
            <h2>Tasks</h2>
            { render() }
        </div>
    );
};

// GraphQL query "tasks"

const query = gql`
    query Query {
        tasks {
            id
            name
        }
    }
`;

// wrap App component with Data component (Apollo Client)

export default graphql(query)(App);