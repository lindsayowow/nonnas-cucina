export default function RemoveIngredientButton({ onRemove }) {
  return (
    <button className="removeIngredientButton" onClick={onRemove}>
      x
    </button>
  );
}
