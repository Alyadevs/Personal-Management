import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, deleteUser } from "./userSlice";
import UserForm from "./UserForm";
import "./UserList.css";
export default function UserList() {
  const dispatch = useDispatch();
  const { liste, status, error } = useSelector(state => state.users);

  const [editingUser, setEditingUser] = useState(null); 

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (status === "loading") return <p>Chargement...</p>;
  if (status === "failed") return <p>Erreur : {error}</p>;

  return (
   <div className="user-list">
  <h2>Liste des utilisateurs</h2>
  {editingUser && <UserForm user={editingUser} onClose={() => setEditingUser(null)} />}
  <ul>
    {liste.map(user => (
      <li key={user._id}>
        <span>{user.name} - {user.email}</span>
        <div>
          <button onClick={() => dispatch(deleteUser(user._id)).then(()=>dispatch(fetchUsers()))}>Supprimer</button>
          <button onClick={() => setEditingUser(user).then(()=>dispatch(fetchUsers()))}>Modifier</button>
        </div>
      
      </li>
    ))}
  </ul>
</div>
  );
}
