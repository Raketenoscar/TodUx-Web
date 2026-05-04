/*<div className="todo-window">
      <div className="todo-edit-window">
        <p className="todo-window-title">Todo Settings</p>
        <div className="todo-window-inputs">
          <input placeholder="Wash Dishes" className="todo-window-todo-name" />
          <input type="time" className="todo-window-todo-time" />
        </div>
        <div className="todo-window-buttons">
          <button className="todo-window-save-button">Save</button>
          <button className="todo-window-delete-button">Delete</button>
        </div>
      </div>
    </div>-->*/
import "../styles/todo-styles/calender.css";
import "../styles/todo-styles/scaling.css";
import "../styles/todo-styles/todo-sidebar.css";
import "../styles/todo-styles/todo-window.css";
export function Todos() {
  return (
    <>
      <div className="website">
        <div className="todo-sidebar">
          <p className="todo-sidebar-title">Daily Todos</p>
          <div className="todo-sidebar-todos">
            <div className="todo-sidebar-todo">
              <p className="todo-sidebar-todo-name">Wash Dishes</p>
              <p className="todo-sidebar-todo-time">12:00</p>
              <input type="checkbox" />
            </div>
            <div className="todo-sidebar-todo">
              <p className="todo-sidebar-todo-name">Wash Dishes</p>
              <p className="todo-sidebar-todo-time">12:00</p>
              <input type="checkbox" />
            </div>
            <div className="todo-sidebar-todo">
              <p className="todo-sidebar-todo-name">Wash Dishes</p>
              <p className="todo-sidebar-todo-time">12:00</p>
              <input type="checkbox" checked />
            </div>
            <div className="todo-sidebar-todo">
              <p className="todo-sidebar-todo-name">Wash Dishes</p>
              <p className="todo-sidebar-todo-time">12:00</p>
              <input type="checkbox" className="todo-sidebar-todo-check" />
            </div>
          </div>
        </div>
        <div className="calender">
          <div className="day-div">
            <p className="day">1</p>
            <div className="calender-todo">
              <p className="calender-todo-title">Wash Dishes</p>
              <p className="calender-todo-dueDate">12:00</p>
            </div>
          </div>
          <div className="day-div">
            <p className="day">2</p>
          </div>
          <div className="day-div">
            <p className="day">3</p>
          </div>
          <div className="day-div">
            <p className="day">4</p>
            <div className="calender-todo">
              <p className="calender-todo-title">Fly</p>
              <p className="calender-todo-dueDate">14:00</p>
            </div>
            <div className="calender-todo">
              <p className="calender-todo-title">Jump</p>
              <p className="calender-todo-dueDate">5:00</p>
            </div>
          </div>
          <div className="day-div">
            <p className="day">5</p>
            <div className="calender-todo">
              <p className="calender-todo-title">Wash Dishes</p>
              <p className="calender-todo-dueDate">13:00</p>
            </div>
          </div>
          <div className="day-div">
            <p className="day">6</p>
          </div>
          <div className="day-div">
            <p className="day">7</p>
          </div>
          <div className="day-div">
            <p className="day">8</p>
            <div className="calender-todo">
              <p className="calender-todo-title">Eat Dinner</p>
              <p className="calender-todo-dueDate">12:00</p>
            </div>
            <div className="calender-todo">
              <p className="calender-todo-title">React Course</p>
              <p className="calender-todo-dueDate">15:00</p>
            </div>
            <div className="calender-todo">
              <p className="calender-todo-title">Start Flying</p>
              <p className="calender-todo-dueDate">17:00</p>
            </div>
          </div>
          <div className="day-div">
            <p className="day">9</p>
            <div className="calender-todo">
              <p className="calender-todo-title">Wash Dishes</p>
              <p className="calender-todo-dueDate">12:00</p>
            </div>
          </div>
          <div className="day-div">
            <p className="day">10</p>
            <div className="calender-todo">
              <p className="calender-todo-title">Wash Dishes</p>
              <p className="calender-todo-dueDate">12:00</p>
            </div>
          </div>
          <div className="day-div">
            <p className="day">11</p>
            <div className="calender-todo">
              <p className="calender-todo-title">Wash Dishes</p>
              <p className="calender-todo-dueDate">12:00</p>
            </div>
          </div>
          <div className="day-div">
            <p className="day">12</p>
            <div className="calender-todo">
              <p className="calender-todo-title">Wash Dishes</p>
              <p className="calender-todo-dueDate">12:00</p>
            </div>
          </div>
          <div className="day-div">
            <p className="day">13</p>
            <div className="calender-todo">
              <p className="calender-todo-title">Wash Dishes</p>
              <p className="calender-todo-dueDate">12:00</p>
            </div>
          </div>
          <div className="day-div">
            <p className="day">14</p>
            <div className="calender-todo">
              <p className="calender-todo-title">Wash Dishes</p>
              <p className="calender-todo-dueDate">12:00</p>
            </div>
          </div>
          <div className="day-div">
            <p className="day">15</p>
            <div className="calender-todo">
              <p className="calender-todo-title">Wash Dishes</p>
              <p className="calender-todo-dueDate">12:00</p>
            </div>
          </div>
          <div className="day-div">
            <p className="day">16</p>
            <div className="calender-todo">
              <p className="calender-todo-title">Wash Dishes</p>
              <p className="calender-todo-dueDate">12:00</p>
            </div>
          </div>
          <div className="day-div">
            <p className="day">17</p>
            <div className="calender-todo">
              <p className="calender-todo-title">Wash Dishes</p>
              <p className="calender-todo-dueDate">12:00</p>
            </div>
          </div>
          <div className="day-div">
            <p className="day">18</p>
            <div className="calender-todo">
              <p className="calender-todo-title">Wash Dishes</p>
              <p className="calender-todo-dueDate">12:00</p>
            </div>
          </div>
          <div className="day-div">
            <p className="day">19</p>
            <div className="calender-todo">
              <p className="calender-todo-title">Wash Dishes</p>
              <p className="calender-todo-dueDate">12:00</p>
            </div>
          </div>
          <div className="day-div">
            <p className="day">20</p>
            <div className="calender-todo">
              <p className="calender-todo-title">Wash Dishes</p>
              <p className="calender-todo-dueDate">12:00</p>
            </div>
          </div>
          <div className="day-div">
            <p className="day">21</p>
            <div className="calender-todo">
              <p className="calender-todo-title">Wash Dishes</p>
              <p className="calender-todo-dueDate">12:00</p>
            </div>
          </div>
          <div className="day-div">
            <p className="day">22</p>
            <div className="calender-todo">
              <p className="calender-todo-title">Wash Dishes</p>
              <p className="calender-todo-dueDate">12:00</p>
            </div>
          </div>
          <div className="day-div">
            <p className="day">23</p>
            <div className="calender-todo">
              <p className="calender-todo-title">Wash Dishes</p>
              <p className="calender-todo-dueDate">12:00</p>
            </div>
          </div>
          <div className="day-div">
            <p className="day">24</p>
            <div className="calender-todo">
              <p className="calender-todo-title">Wash Dishes</p>
              <p className="calender-todo-dueDate">12:00</p>
            </div>
          </div>
          <div className="day-div">
            <p className="day">25</p>
            <div className="calender-todo">
              <p className="calender-todo-title">Wash Dishes</p>
              <p className="calender-todo-dueDate">12:00</p>
            </div>
          </div>
          <div className="day-div">
            <p className="day">26</p>
            <div className="calender-todo">
              <p className="calender-todo-title">Wash Dishes</p>
              <p className="calender-todo-dueDate">12:00</p>
            </div>
          </div>
          <div className="day-div">
            <p className="day">27</p>
            <div className="calender-todo">
              <p className="calender-todo-title">Wash Dishes</p>
              <p className="calender-todo-dueDate">12:00</p>
            </div>
          </div>
          <div className="day-div">
            <p className="day">28</p>
            <div className="calender-todo">
              <p className="calender-todo-title">Wash Dishes</p>
              <p className="calender-todo-dueDate">12:00</p>
            </div>
          </div>
          <div className="day-div">
            <p className="day">29</p>
            <div className="calender-todo">
              <p className="calender-todo-title">Wash Dishes</p>
              <p className="calender-todo-dueDate">12:00</p>
            </div>
          </div>
          <div className="day-div">
            <p className="day">30</p>
            <div className="calender-todo">
              <p className="calender-todo-title">Wash Dishes</p>
              <p className="calender-todo-dueDate">12:00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
