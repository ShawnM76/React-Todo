import React from 'react';
import Todolist from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

// const taskData = [
//   {
//         task: 'Organize Garage',
// id: 1528817077286,
// completed: false
//   }
// ]

const taskData = [
  {
    task: '',
    id: Date.now(),
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      taskData,
    };
  }

  toggleItem = id => {
    this.setState({
      taskData: this.state.taskData.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    });
  };

  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      purchased: false,
    };
    this.setState({
      taskData: [...this.state.taskData, newItem],
    });
  };

  clearCompleted = () => {
    this.setState({
      taskData: this.state.taskData.filter(item => !item.completed),
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} clearCompleted={this.clearCompleted} />
        <Todolist taskData={this.state.taskData} toggleItem={this.toggleItem} />
      </div>
    );
  }
}

export default App;
