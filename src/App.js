import { Component } from "react";

import { v4 as uuidv4 } from "uuid";

import "./App.css";

import TodoListItem from "./Components/TodoListItem";

const example = [
  {
    input: "Cooking",
    category: "dailyWork",
  },
  {
    input: "Learning",
    category: "education",
  },
];

export default class Todo extends Component {
  state = { userInput: "", category: "dailyWork", todoList: [] };

  onSubmitHandler = (event) => {
    event.preventDefault();

    const { userInput, category } = this.state;

    this.setState((prevState) => ({
      todoList: [...prevState.todoList, { id: uuidv4(), userInput, category }],
    }));
  };

  onChangeUserinput = (event) => {
    const { value } = event.target;
    this.setState({
      userInput: value,
    });
  };

  onChangeCategory = (event) => {
    const { value } = event.target;
    this.setState({
      category: value,
    });
  };

  onRemoveItem = (id) => {
    const { todoList } = this.state;
    this.setState({
      todoList: todoList.filter((each) => each.id !== id),
    });
  };

  render() {
    const { userInput, category, todoList } = this.state;
    console.log(userInput, category, todoList);
    return (
      <div className="todo-main-container">
        <h1>TODO</h1>
        <form onSubmit={this.onSubmitHandler}>
          <input onChange={this.onChangeUserinput} value={userInput} />
          <select onClick={this.onChangeCategory}>
            <option value="dailyWork">Daily work</option>
            <option value="gym">Gym</option>
            <option value="education">Eduction</option>
          </select>
          <button type="submit">Submit</button>
        </form>
        <div>
          {todoList.length !== 0 ? (
            <TodoListItem
              todoList={todoList}
              onRemoveItem={this.onRemoveItem}
            />
          ) : (
            <p>your task is empty please add!!</p>
          )}
        </div>
        <div className="container">
          <div className="card-main-container">
            <div className="card-user-details">
              <img
                src="https://res.cloudinary.com/dy0mnmvem/image/upload/v1668017402/Movie-app-react-js/Avatarboy-avatar_ps7djs.png"
                className="card-image"
              />
              <div className="card-post">
                <h1 className="card-post-heading">Post</h1>
                <p>23</p>
              </div>
              <div className="card-post">
                <h1 className="card-post-heading">Followers</h1>
                <p>23</p>
              </div>
              <div className="card-post">
                <h1 className="card-post-heading">Followings</h1>
                <p>23</p>
              </div>
            </div>
            <div className="card-name-jobrole">
              <h1 className="user-name">Neelesh</h1>
              <p className="user-job-role">UI/UX Designer</p>
            </div>
            <div className="card-about-container">
              <h1 className="card-about">About</h1>
              <p className="about-text">
                nrvdfvdvkdkv wibibewkbwiebvib kjvbwbiuwnm bdbcbuydvcuywe bbb
                knskjdciuwebkwev kjbvbwbi
              </p>
            </div>
            <div className="card-button-container">
              <button type="button" className="message-btn">
                Message
              </button>
              <button type="button" className="connect-btn">
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
