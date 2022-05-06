import * as reducer from "../../store/reducer/member";
import { useActions, useShallowEqualSelectorToJS } from "./components";

const useMember = () => {
    const memberList = useShallowEqualSelectorToJS((state) => state.member.get("list"));
    const memberInfo = useShallowEqualSelectorToJS((state) => state.member.get("info"));
    const actions = useActions(reducer);

    return {
        memberList,
        memberInfo,

        listAllMember: actions.listAllMember,
        getInfo: actions.getInfo,

        signupApi: reducer.signupApi,
        loginApi: reducer.loginApi,
        infoModifyApi: reducer.infoModifyApi,
        changePwApi: reducer.changePwApi,
    }

}

export default useMember;
