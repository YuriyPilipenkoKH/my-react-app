import PropTypes from 'prop-types';
import { Table, Thead, Td , Tr} from './TransactionHistory.styled';

export const TransactionTable = ({transactions}) => {

    return (
        <Table>
  <Thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </Thead>

  <tbody className='tbody'>

  {transactions.map(({id,type,amount,currency}) => (
     <tr
      key = {id}
      type = {type}
      amount = {amount}
      currency = {currency}
      >
     <td>{type}</td>
     <td>{amount}</td>
     <td>{currency}</td>    
   </tr>

))}
   
  
  </tbody>
</Table>
    )
}