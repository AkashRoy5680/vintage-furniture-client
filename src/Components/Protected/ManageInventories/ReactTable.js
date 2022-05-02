import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTable } from "react-table/dist/react-table.development";
import useInventory from "../../hooks/useInventory";
import { COLUMNS } from './columns';
import "./table.css"

const ReactTable = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useInventory();

  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => products, [])

    const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  })

  const handleDelete = (id) => {
    //Delete a Data from Server

    fetch(`http://localhost:5000/inventory/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    const remainingProducts = products.filter((product) => product._id !== id);
    setProducts(remainingProducts);
  };
  return (
    <div>
      <h2>All Inventories</h2>
      <div className="inventories w-50 mx-auto"></div>
      <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
                <button onClick={() => handleDelete(row._id)}>
                  Delete
                </button>
              </tr>
            )
          })}
        </tbody>
       
      </table>
    </>
      <button onClick={() => navigate("/additem")} className="m-3 p-3">
        Add New Item
      </button>
    </div>
  );
};

export default ReactTable;
