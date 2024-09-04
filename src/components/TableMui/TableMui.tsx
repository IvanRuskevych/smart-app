import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { toast } from 'react-toastify';

import { UsersListProps } from '../../types';
import { Loader } from '../Loader/Loader.tsx';
import { containerStyle } from './TableMui.styles.ts';

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

export const TableMui: React.FC<UsersListProps> = ({
  users: rows,
  loading,
  error,
}) => {
  const columns: GridColDef<(typeof rows)[number]>[] = tableHeader;

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  return (
    <>
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

      {loading && <Loader loading={loading} />}
    </>
  );
};
