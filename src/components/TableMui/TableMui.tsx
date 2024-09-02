import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { IUser } from '../../types';
import { useAppDispatch } from '../../redux/store.ts';
import { fetchUsers } from '../../redux/users';
import { containerStyle } from './TableMui.styles.ts';

interface TableMuiProps {
  rows: IUser[];
}

const tableHeader: GridColDef[] = [
  { field: 'name', headerName: 'Name', flex: 1 },
  { field: 'username', headerName: 'Lastname', flex: 1 },
  {
    field: 'email',
    headerName: 'Email',
    flex: 1,
    renderCell: params => <a href={`mailto:${params.value}`}>{params.value}</a>,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    flex: 1,
    renderCell: params => <a href={`tel:${params.value}`}>{params.value}</a>,
  },
];

export const TableMui: React.FC<TableMuiProps> = ({ rows }) => {
  const dispatch = useAppDispatch();
  const columns: GridColDef<(typeof rows)[number]>[] = tableHeader;

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className={containerStyle}>
      <Box
        sx={{
          height: 400,
          width: '100%',
          backgroundColor: 'white',
          borderRadius: '5px',
        }}
      >
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
    </div>
  );
};
