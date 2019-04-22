import React, { Component } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./../RecipeCard/RecipeCard";
import "./Home.css";
import store, {DELETE} from "./../../store"

class Home extends Component {
  constructor(props) {
    const reduxState = store.getState()
    super(props);
    this.state = {
      recipes: reduxState.recipes
    };
  }

  componentDidMount(){
    store.subscribe(()=>{
      this.setState({
        store: store.getState()
      })
    })
  }

  
  handleDelete=(index)=>{
    console.log(index)
    store.dispatch({type: DELETE, payload: index})
    this.setState({
      recipes:store.getState().recipes
    })
  }
  render() {
    const recipes = this.state.recipes.map((recipe, i) => {
      return (
        <RecipeCard
          
          index={i}
          name={recipe.name}
          category={recipe.category}
          authorFirst={recipe.authorFirst}
          authorLast={recipe.authorLast}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
          handleDelete={this.handleDelete}
        />
      );
    });
    return (
      <div className="Home">
        <Link to="/add/name">
          <button>Create New Recipe</button>
        </Link>
        <div className="card_container">{recipes}</div>
      </div>
    );
  }
}

export default Home;
