const AllIngredients = ({ingredients, onAddIngredients=f => f }) => <div className='all-ingredients'>
                                                                      <h1>All Ingredients</h1>
                                                                      <ul>
                                                                        {ingredients.map((ingredient,i )=> <li key={i}>
                                                                                                         {ingredient.name}
                                                                                                       </li>)}
                                                                      </ul>
                                                                    </div>;

export default AllIngredients;
