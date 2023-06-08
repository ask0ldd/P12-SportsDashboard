function useAPI(user : number, datasType : string){

    const UserURIs = {
        datas : `user/${user}`,
        activities : `user/${user}/activity`,
        avgSessions : `user/${user}/average-sessions`,
        Performance : `user/${user}/performance`,
    }

}

export default useAPI

interface IUserDatas{
    
}