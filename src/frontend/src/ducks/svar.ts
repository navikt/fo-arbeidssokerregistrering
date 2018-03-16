export enum ActionTypes {
    AVGI_SVAR = 'AVGI_SVAR',
    AVGI_SVAR_RESET = 'AVGI_SVAR_RESET'
}

export type State = {
    helse?: number | undefined;
    utdanning?: number | undefined;
};

export interface Data {
    alternativId: number;
    sporsmalId: string;
}

interface Action {
    type: ActionTypes;
    data: Data;
}

const initialState = {};

export default function (state: State = initialState, action: Action): State {
    switch (action.type) {
        case ActionTypes.AVGI_SVAR: {
            let stateWithAddedProperty = {...state};
            stateWithAddedProperty[action.data.sporsmalId] = action.data.alternativId;
            return stateWithAddedProperty;
        }
        case ActionTypes.AVGI_SVAR_RESET: {
            return initialState;
        }
        default : {
            return state;
        }
    }
}

export function endreSvarAction(sporsmalId: string, alternativId: number) {
    return {
        type: ActionTypes.AVGI_SVAR,
        data: {
            sporsmalId,
            alternativId
        }
    };
}

export function setInitalState() {
    return {
        type: ActionTypes.AVGI_SVAR_RESET
    };
}