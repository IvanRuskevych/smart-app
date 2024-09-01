import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { useAppDispatch } from '../../redux/store.ts';
import { fetchUsers, usersSelector } from '../../redux/users';

const tableHeader = [
  { field: 'name', headerName: 'Name', flex: 1 },
  { field: 'username', headerName: 'Lastname', flex: 1 },
  { field: 'email', headerName: 'Email', flex: 1 },
  { field: 'phone', headerName: 'Phone', flex: 1 },
];

export const TableMui = () => {
  const dispatch = useAppDispatch();
  const rows = useSelector(usersSelector);
  const columns: GridColDef<(typeof rows)[number]>[] = tableHeader;

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        autoHeight
      />
    </Box>
  );
};
