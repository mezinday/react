import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import { Map, List, fromJS } from "immutable";
import { MemberApi } from "../../remote";

export const LISTALL_MEMBER = "member/LISTALL";
export const INFO_MEMBER = "member/INFO";   // 회원정보 가져오기

export const listAllMember = createAction(
    LISTALL_MEMBER,
    MemberApi.listAll
);

export const getInfo = createAction(
    INFO_MEMBER,
    MemberApi.get
)

export const infoModifyApi = MemberApi.put;
export const signupApi = MemberApi.signup;
export const loginApi = MemberApi.login;
export const changePwApi = MemberApi.changePw;

const initialState = Map({ 
    list: Map({
        count: 0,
        results: List([])
    }),
    info: Map({
        name: "",
        email: "",
        studentID: "",
        moblie: "",
        department: "",
        password: "",
        grade: "",
        birthDate: "",
        profileImg: "",
    })
});



export default handleActions({
    ...pender({
        type: LISTALL_MEMBER, 
        onSuccess: (state, action) => { 
            const data = action.payload.data;

            return state.set("list", fromJS(data));
            // return state.setIn(["list", "count"], action.payload.data.count)
            // .setIn(["list", "result"], fromJS(action.payload.data.result));
            // return {
            //     ...state,
            //     count: action.payload.data.count,
            // }
        }
    }),
    ...pender({
        type: INFO_MEMBER,
        onSuccess: (state, action) => {
            const data = action.payload.data;

            return state.set("info", fromJS(data));
        }
    }),

}, initialState)
