// loadingReducer manage loading state

const initialState = false ;

const isDarkModeReducer = (state = initialState, action) => {
    switch (action.type){
       case "IsDarkMode":

        return state = false;
        case "IsLightMode":

            return state = true;
        default:
            return state;
    }
}


export default isDarkModeReducer;