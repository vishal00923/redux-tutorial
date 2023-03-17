import { legacy_createStore as createStore, applyMiddleware } from 'redux';

import axios from 'axios';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// action name constants
const getPosts = 'posts/posts';
const postsLoaded = 'posts/loaded';
const getPostLoading = 'posts/loading';
const getPostRejected = 'posts/rejected';

// store
const store = createStore(
  postsReducer,
  applyMiddleware(thunk.default, logger.default)
);

// reducer
function postsReducer(state = { posts: [] }, action) {
  switch (action.type) {
    case getPosts:
      return { ...state, posts: action.payload };
    case postsLoaded:
      return { ...state, posts: action.payload, loading: false };
    case getPostLoading:
      return { ...state, loading: true };
    case getPostRejected:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
}

// action creators
const _postsLoaded = async (dispatch) => {
  try {
    dispatch(_getPostLoading());
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    dispatch(_getPosts(data));
  } catch (error) {
    dispatch(_getPostRejected(error.message));
  }
};

const _getPostLoading = () => ({ type: getPostLoading });

const _getPosts = (posts) => ({ type: getPosts, payload: posts });

const _getPostRejected = (err) => ({ type: getPostRejected, error: err });

store.dispatch(_postsLoaded);
