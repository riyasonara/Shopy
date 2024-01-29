import { useDispatch, useSelector } from "react-redux";
import { decrementQ, incrementQ, removeFromCart } from "../../Redux/cartSlice";
import styles from "./Cart.module.css"; // Import CSS module

export default function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="row my-4">
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            <table className={`${styles.table} table`}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className={`fluid rounded ${styles.image}`}
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>
                      <i
                        onClick={() => dispatch(incrementQ(item))}
                        className={`bi bi-caret-up ${styles.icon}`}
                      ></i>
                      <span className="mx-2">{item.quantity}</span>
                      <i
                        onClick={() => dispatch(decrementQ(item))}
                        className={`bi bi-caret-down ${styles.icon}`}
                      ></i>
                    </td>
                    <td>${item.price}</td>
                    <td>${item.price * item.quantity}</td>
                    <td>
                      <i
                        onClick={() => dispatch(removeFromCart(item))}
                        className={`bi bi-cart-x text-danger ${styles.icon}`}
                      ></i>
                    </td>
                  </tr>
                ))}
                <tr>
                  <th colSpan={3} className="text-center">
                    Total
                  </th>
                  <td colSpan={3} className="text-center">
                    <span
                      className={`badge bg-danger rounded-pill ${styles.total}`}
                    >
                      $
                      {cartItems.reduce(
                        (acc, item) => (acc += item.price * item.quantity),
                        0
                      )}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
