import css from './Tpansaction.module.css'; 
import  PropTypes  from 'prop-types';


export const TransactionHistory = ({ items }) => {
  return (
    <table key={items.id} className={css.transactionHistory}>
        <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
          <th>Currency</th>
          
    </tr>
  </thead>
        
            <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody> 
        
</table>
  )
}

TransactionHistory.propTypes = {
  props: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,

  }))
}
