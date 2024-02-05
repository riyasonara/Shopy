import { useSelector } from 'react-redux';
import WishListHeader from "../Header/WishListHeader";

const WishList = () => {
  const state = useSelector((state) => state); // Add this line to access the entire Redux state
  console.log(state); // Log the entire Redux state for debugging purposes

  const favorites = useSelector((state) => state.favorites.list);

  return (
    <>
      <WishListHeader />
      <div>
        <h2>WishList</h2>
        {favorites.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          <ul>
            {favorites.map((itemId) => (
              <li key={itemId}></li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default WishList;
