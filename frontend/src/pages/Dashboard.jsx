import { useEffect, useState, useContext } from "react";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";
import TaskForm from "../components/TaskForm";

const Dashboard = () => {
  const { logout } = useAuth();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  const addTask = async (title) => {
    await api.post("/tasks", { title });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={logout}>Logout</button>

      <TaskForm onAdd={addTask} />

      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.title}
            <button onClick={() => deleteTask(task._id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
