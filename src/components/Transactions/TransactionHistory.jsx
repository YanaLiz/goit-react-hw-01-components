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
      {items.map(({ id, type, amount, currency }) => {
        return (
            <tbody>
            <tr
              key={id}
              id={id}
              type={type}
              amount={amount}
              currency={currency}
            >
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  </tbody>
        )
      })}
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
