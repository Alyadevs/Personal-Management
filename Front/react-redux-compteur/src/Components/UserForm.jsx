import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, updateUser ,fetchUsers } from "./userSlice";
import "./UserFrm.css";
export default function UserForm({ user, onClose }) {
  const dispatch = useDispatch();
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      dispatch(updateUser({ id: user._id, user: { name, email } })).then(() => {
        dispatch(fetchUsers()) });
      if (onClose) onClose(); 
    } else {
     dispatch(addUser({ name, email })).then(() => {
  dispatch(fetchUsers());
});
      setName("");
      setEmail("");
    }
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
  <input type="text" placeholder="Nom" value={name} onChange={e => setName(e.target.value)} required />
  <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
  <button type="submit">{user ? "Modifier" : "Ajouter"}</button>
  {user && onClose && <button onClick={onClose}>Annuler</button>}
</form>
  );
}
