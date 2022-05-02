import { format } from 'date-fns'

export const COLUMNS = [
  {
    Header: 'Name',
    accessor: 'name',
    disableFilters: true,
    sticky: 'left'
  },
  {
    Header: 'Description',
    accessor: 'description',
    sticky: 'left'
  },
  {
    Header: 'Price',
    accessor: 'price',
    sticky: 'left'
  },
  {
    Header: 'SoldItem',
    accessor: 'soldItem',
  },
  {
    Header: 'supplierName',
    accessor: 'supplierName'
  },
 
]

export const GROUPED_COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id'
  },
  {
    Header: 'Name',
    Footer: 'Name',
    columns: [
      {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name'
      },
      {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name'
      }
    ]
  },
  {
    Header: 'Info',
    Footer: 'Info',
    columns: [
      {
        Header: 'Date of Birth',
        Footer: 'Date of Birth',
        accessor: 'date_of_birth'
      },
      {
        Header: 'Country',
        Footer: 'Country',
        accessor: 'country'
      },
      {
        Header: 'Phone',
        Footer: 'Phone',
        accessor: 'phone'
      }
    ]
  }
]
