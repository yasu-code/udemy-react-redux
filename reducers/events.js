import { READ_EVENTS, DELETE_EVENT, READ_EVENT, UPDATE_EVENT, CREATE_EVENT} from "../actions";
import _ from "lodash";

export default (events = {}, action) => {
    switch (action.type) {
        case CREATE_EVENT:
        case READ_EVENTS:
        case UPDATE_EVENT:
            return _.mapKeys(action.response.data, "id");
        case READ_EVENT:
            const data = action.response.data;
            return { ...events, [data.id]: data };
        case DELETE_EVENT:
            delete events[action.id];
            return { ...events };
        default:
            return events;
    }
};
