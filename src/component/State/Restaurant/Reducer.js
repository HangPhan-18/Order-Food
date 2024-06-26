import * as actionType from "./ActionType";

const initialState = {
    restaurants: [],
    usersRestaurant: null,
    loading: null,
    error: null,
    events: [],
    restaurant: null,
    restaurantEvents: [],
    categories: []
};

export const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.CREATE_RESTAURANT_REQUEST:
        case actionType.GET_ALL_RESTAURANTS_REQUEST:
        case actionType.DELETE_RESTAURANT_REQUEST:
        case actionType.UPDATE_RESTAURANT_REQUEST:
        case actionType.GET_RESTAURANT_BY_USER_ID_REQUEST:
        case actionType.CREATE_CATEGORY_REQUEST:
        case actionType.GET_RESTAURANT_CATEGORY_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case actionType.CREATE_RESTAURANT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                usersRestaurant: action.payload
            };
        case actionType.GET_ALL_RESTAURANTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                restaurants: action.payload
            };
        case actionType.GET_RESTAURANT_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                restaurants: action.payload
            };
        case actionType.GET_RESTAURANT_BY_USER_ID_SUCCESS:
        case actionType.UPDATE_RESTAURANT_SUCCESS:
        case actionType.UPDATE_RESTAURANT_STATUS_SUCCESS:
            return {
                ...state,
                loading: false,
                usersRestaurant: action.payload
            };
        case actionType.DELETE_RESTAURANT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                restaurants: state.restaurants.filter((item) => item.id !== action.payload),
                usersRestaurants: state.usersRestaurant.filter((item) => item.id !== action.payload),
            };
        case actionType.CREATE_EVENT_SUCCESS:
            return {
                ...state,
                loading: false,
                events: [...state.events, action.payload],
                restaurantEvents: [...state.restaurantEvents, action.payload]
            };
        case actionType.GET_ALL_EVENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                events: action.payload
            };
        case actionType.GET_RESTAURANT_EVENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                restaurantEvents: action.payload
            };
        case actionType.DELETE_EVENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                events: state.events.filter((item) => item.id !== action.payload),
                restaurantEvents: state.restaurantEvents.filter((item) => item.id !== action.payload)
            };
        case actionType.CREATE_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: [...state.categories, action.payload]
            };
        case actionType.GET_RESTAURANT_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                categories: action.payload
            };
        case actionType.CREATE_RESTAURANT_FAILURE:
        case actionType.GET_ALL_RESTAURANTS_FAILURE:
        case actionType.DELETE_RESTAURANT_FAILURE:
        case actionType.UPDATE_RESTAURANT_FAILURE:
        case actionType.GET_RESTAURANT_BY_USER_ID_FAILURE:
        case actionType.CREATE_CATEGORY_FAILURE:
        case actionType.CREATE_EVENT_FAILURE:
        case actionType.GET_RESTAURANT_CATEGORY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;

    }
};
