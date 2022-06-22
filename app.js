
const Person = props => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, props.name),
        React.createElement('p', {}, props.occupation)
    ])
};

const App = () => {
    return React.createElement('div', {}, [
        React.createElement('h1', { class: 'title' }, 'React IS rendered.'),
        React.createElement(Person, { name: 'Christopher Nolan', occupation: 'movie director' }, null),
        React.createElement(Person, { name: 'Leonardo DiCaprio', occupation: 'actor' }, null),
        React.createElement(Person, { name: 'Amy Adams', occupation: 'actress' }, null)
    ]);
};

// ReactDOM.render(React.createElement(App), document.getElementById('root'));

// ReactDOM v18
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));  // root.render(<App />));  
