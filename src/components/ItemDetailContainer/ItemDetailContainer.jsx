import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";
import { getDatabase, ref, get, forEachChild, child } from "firebase/database";

const ItemDetailContainer = () => {
  const [productDetails, setProductDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    const db = getDatabase();
    const itemsRef = ref(db, 'products');

    get(itemsRef)
      .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const product = childSnapshot.val();
          if (product.id == productId) {
            setProductDetails({ id: childSnapshot.key, ...product });
          }
        });
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
