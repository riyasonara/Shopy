import Typography from "@mui/material/Typography";
import styles from "./WishListHeader.module.css";
import { HiViewList } from "react-icons/hi";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import SearchComponent from "./Search";

const WishListHeader = () => {
  return (
    <>
      <div>
        <div className={styles.mainContainer}>
          <div>
            <Typography variant="h6" gutterBottom>
              Your Shopping List
            </Typography>

          </div>
          <div>
            <SearchComponent />
          </div>
        </div>
        <div>
          <HiViewList />
          <BsFillGrid3X3GapFill />
        </div>
      </div>
    </>
  );
};

export default WishListHeader;
