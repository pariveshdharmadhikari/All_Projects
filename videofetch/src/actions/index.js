import YoutubeAPI from '../apis/YouTubeAPI'


export const FetchVideo=(data)=>async (dispatch)=>{
        
        const promisess = await YoutubeAPI.get('/search',{
            params:
            {
                q:data
            }
        });
        dispatch({
            type:'FETCH_VIDEO',
            payload:promisess
        });
};
