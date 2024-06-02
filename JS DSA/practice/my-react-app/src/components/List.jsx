import PropTypes from "prop-types";

function List(props) {
  const category = props.category;

  const itemList = props.items;

  const listItem = itemList.map((item) => (
    <li key={item.id}>
      {item.name} has {item.calories} Calories
    </li>
  ));
  return (
    <>
      <h3>{category}</h3>
      <ul>{listItem}</ul>
    </>
  );
}

List.defaultProps = {
  category: "Food",
  items: [],
};

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};
export default List;
