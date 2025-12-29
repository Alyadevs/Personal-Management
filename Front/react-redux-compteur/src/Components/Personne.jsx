import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

export default function Personne() {
  const dispatch = useDispatch();
  const { liste, status, error } = useSelector((state) => state.personnes);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (status === "loading") return <p>Chargement...</p>;
  if (status === "failed") return <p>Erreur : {error}</p>;

  return (
    <ul>
      {liste.map((p) => (
        <li key={p._id}>{p.name}</li>
      ))}
    </ul>
  );
}
