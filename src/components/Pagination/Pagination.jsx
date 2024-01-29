/* eslint-disable react/prop-types */
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationRounded = ({ onPageChange, pageCount }) => {
  const handleChange = (event, value) => {
    onPageChange(value);
  };

  return (
    <Stack spacing={2} justifyContent="center">
      <Pagination count={pageCount} shape="rounded" onChange={handleChange} />
    </Stack>
  );
};

export default PaginationRounded;
