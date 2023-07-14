interface user {
    userId:number;
    email:string;
    userRequestToken:string,
    hasCredition:boolean,
}
type TUserState = {
    userId:number,
    email:string;
    userRequestToken:string,
    hasCredition:boolean,
}

type TUserAction = {
    type:string,
    payload?:TUserState,
}
type TUserDispatch = (args: TUserAction) => TUserAction;