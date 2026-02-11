"use client";

import { useGetUsersQuery } from "@/app/state/api";
import Header from "@/app/components/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "userId", headerName: "ID", width: 90 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
];

const Users = () => {
  const { data: users, isError, isLoading } = useGetUsersQuery();

  if (isLoading) {
    return (
      <div className="py-4 text-gray-700 dark:text-gray-200">Loading...</div>
    );
  }

  if (isError || !users) {
    return (
      <div className="text-center text-red-500 dark:text-red-400 py-4">
        Failed to fetch users
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <Header name="Users" />
      <DataGrid
        rows={users}
        columns={columns}
        getRowId={(row) => row.userId}
        checkboxSelection
        initialState={{
          pagination: {
            paginationModel: { pageSize: 5, page: 0 },
          },
        }}
        pageSizeOptions={[5, 10, 25]}
        className="shadow rounded-lg border border-gray-200 mt-5 dark:border-gray-700"
        sx={{
          backgroundColor: "#ffffff",
          color: "#374151",
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#f9fafb",
            color: "#374151",
            borderBottomColor: "#e5e7eb",
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: "#f9fafb",
          },
          "& .MuiDataGrid-filler": {
            backgroundColor: "#f9fafb",
            borderBottomColor: "#e5e7eb",
          },
          "& .MuiDataGrid-main": {
            backgroundColor: "#ffffff",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "#ffffff",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.02em",
          },
          "& .MuiDataGrid-menuIconButton": {
            color: "#4b5563",
          },
          "& .MuiDataGrid-menuIconButton:hover": {
            color: "#111827",
          },
          "& .MuiCheckbox-root": {
            color: "#6b7280",
          },
          "& .MuiCheckbox-root.Mui-checked": {
            color: "#111827",
          },
          "& .MuiDataGrid-cell": {
            borderBottomColor: "#f3f4f6",
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: "#f9fafb",
            color: "#374151",
            borderTopColor: "#e5e7eb",
          },
          "& .MuiTablePagination-root": {
            color: "#374151",
          },
          "& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows":
            {
              color: "#4b5563",
            },
          "& .MuiTablePagination-actions .MuiIconButton-root": {
            color: "#374151",
          },
          "& .MuiTablePagination-select .MuiSelect-icon": {
            color: "#374151",
          },
          "& .MuiDataGrid-row.Mui-selected": {
            backgroundColor: "#e5e7eb",
          },
          "& .MuiDataGrid-row.Mui-selected:hover": {
            backgroundColor: "#d1d5db",
          },
          ".dark &": {
            backgroundColor: "#111827",
            color: "#e5e7eb",
            borderColor: "#374151",
            colorScheme: "dark",
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#0f172a",
              color: "#e5e7eb",
              borderBottomColor: "#1f2937",
            },
            "& .MuiDataGrid-columnHeader": {
              backgroundColor: "#0f172a",
            },
            "& .MuiDataGrid-filler": {
              backgroundColor: "#0f172a",
              borderBottomColor: "#1f2937",
            },
            "& .MuiDataGrid-main": {
              backgroundColor: "#111827",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: "#111827",
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.02em",
            },
            "& .MuiDataGrid-menuIconButton": {
              color: "#cbd5f5",
            },
            "& .MuiDataGrid-menuIconButton:hover": {
              color: "#e5e7eb",
            },
            "& .MuiCheckbox-root": {
              color: "#94a3b8",
            },
            "& .MuiCheckbox-root.Mui-checked": {
              color: "#e5e7eb",
            },
            "& .MuiDataGrid-cell": {
              color: "#e5e7eb",
              borderBottomColor: "#1f2937",
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: "#0f172a",
              color: "#e5e7eb",
              borderTopColor: "#1f2937",
            },
            "& .MuiTablePagination-root": {
              color: "#e5e7eb",
            },
            "& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows":
              {
                color: "#cbd5f5",
              },
            "& .MuiTablePagination-actions .MuiIconButton-root": {
              color: "#e5e7eb",
            },
            "& .MuiTablePagination-select .MuiSelect-icon": {
              color: "#e5e7eb",
            },
            "& .MuiDataGrid-row:hover": {
              backgroundColor: "#111827",
            },
            "& .MuiDataGrid-row.Mui-selected": {
              backgroundColor: "#1f2937",
            },
            "& .MuiDataGrid-row.Mui-selected:hover": {
              backgroundColor: "#334155",
            },
          },
        }}
      />
    </div>
  );
};

export default Users;