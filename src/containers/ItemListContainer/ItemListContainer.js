import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../../actions/items';
import ItemList from '../../components/ItemList/ItemList';

class ItemListContainer extends Component {
  componentDidMount() {
    this.props.fetchData('http://58af0d6b73918a1200362d99.mockapi.io/items');
  }

  render() {
    const { items, error, loading } = this.props;

    return (
      <ItemList
        items={ items }
        error={ error }
        loading={ loading }
      />
    );
  }
}

const mapStateToProps = state => ({
  items: state.items.items,
  error: state.items.error,
  loading: state.items.loading
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(fetchItems(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemListContainer);
