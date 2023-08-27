import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";
import "./ItemDetailContainer.css";
import { getDatabase, ref, get, child } from "firebase/database";

const ItemDetailContainer = () => {
  const [productDetails, setProductDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    const db = getDatabase();
    const itemsRef = ref(db, 'products'); // Change to your Realtime Database reference

    get(child(itemsRef, productId))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProductDetails({ id: snapshot.key, ...snapshot.val() });
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [productId]);

  return (
    <div>
      {loading ? <Loader /> : <ItemDetail productDetails={productDetails} />}
    </div>
  );
};

export default ItemDetailContainer;