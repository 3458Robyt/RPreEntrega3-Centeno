import "./ItemsListContainer.css";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDatabase, ref, query, orderByChild, equalTo, get } from "firebase/database";

const ItemsListContainer = () => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getDatabase();
    const itemsRef = ref(db, 'products'); 

    const itemsQuery = categoryId
      ? query(itemsRef, orderByChild('category'), equalTo(categoryId))
      : itemsRef;
    get(itemsQuery)
      .then((snapshot) => {
        const data = [];
        snapshot.forEach((childSnapshot) => {
          data.push({ id: childSnapshot.key, ...childSnapshot.val() });
        });
        setProductsList(data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <div className="itemsContainer">
      {loading ? <Loader /> : <ItemList productsList={productsList} />}
    </div>
  );
};

export default ItemsListContainer;