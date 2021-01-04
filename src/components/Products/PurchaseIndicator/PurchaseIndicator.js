import CanPurchase from './CanPurchase/CanPurchase';
import ActionButton from './ActionButton/ActionButton';
import WithUser from '../../HOC/WithUser';
import WithAbsoluteContainer from '../../HOC/WithAbsoluteContainer/WithAbsoluteContainer';
import './PurchaseIndicator.css';

const PurchsaseBalance = ({ cost, user, isHover, productId }) => {
  const difference = (user?.points ?? 0) - cost;
  // const difference = cost * -1;
  const hasEnough = difference >= 0;

  return isHover ? (
    <ActionButton
      cost={cost}
      hasEnough={hasEnough}
      productId={productId}
    />
  ) : (
      <CanPurchase
        hasEnough={hasEnough}
        hasUser={!!user}
        difference={difference}
      />
    );
};

export default WithUser(WithAbsoluteContainer(PurchsaseBalance));
