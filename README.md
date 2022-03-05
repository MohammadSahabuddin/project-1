I have complete v4 "0:30:01"

Hooks use

1.  =>false is default which I set it (hare I won't want to display the description texts so I set the state -> default false)
    => here setDetails is set the default value, for here it is false
    =>basically setDetails change the value of state
    => here detail word is stored the default value, for here it is false.

2.  For API integration

==>>

1.  ##For Request:::
    https://www.googleapis.com/youtube/v3/playlistItems?playlistId={YOUR_PLAYLIST_ID}&key={YOUR_API_KEY}&part=snippet&maxResults={MAX_RESULTS_TO_SHOW}&pageToken={PAGE_TOKEN}

=>EXMP::
https://www.googleapis.com/youtube/v3/playlistItems?playlistId=UUenJabtn62vOv0ZDMIWYYkQ&key=AIzaSyBJbFjKsXD1p0-L-CbAS_fuu_Sm-GkquEY&part=snippet&maxResults=3&pageToken=EAAaBlBUOkNBTQ

2. ##For get Id:::
   https://www.googleapis.com/youtube/v3/channels?key={YOUR_API_KEY}&forUsername={USER_NAME}&part=id

EXMP::
https://www.googleapis.com/youtube/v3/channels?key=AIzaSyDyc4T-Ak6OVc4broGgVJfqwHGIe6AytlE&forUsername=donalde2121&part=id

3. ##For get PlaylistId=iploades:::
   https://www.googleapis.com/youtube/v3/channels?id={YOUR_ID}&key={YOUR_API_KEY}&part=contentDetails

=>EXMP::
https://www.googleapis.com/youtube/v3/channels?id=UCenJabtn62vOv0ZDMIWYYkQ&key=AIzaSyBJbFjKsXD1p0-L-CbAS_fuu_Sm-GkquEY&part=contentDetails

{=> https://www.googleapis.com/youtube/v3/playlistItems?playlistId=UUenJabtn62vOv0ZDMIWYYkQ&key=AIzaSyBJbFjKsXD1p0-L-CbAS_fuu_Sm-GkquEY&part=snippet&maxResults=3&pageToken=EAAaBlBUOkNBTQ

=> https://www.googleapis.com/youtube/v3/channels?id=UCenJabtn62vOv0ZDMIWYYkQ&key=AIzaSyBJbFjKsXD1p0-L-CbAS_fuu_Sm-GkquEY&part=contentDetails}

## its work in a 2 method

1.  server side rendering={
    first data load then page appear
2.  client side rendering={
    first page appear then data come
    }

##

error always come in err.response
##############################################
=========================>>>>>>>>>>>>>>

## For Client Site (index.js)

//have to import it
import { useEffect } from 'react';

//have to import it from Redux
import { useDispatch } from 'react-redux';

export default function Home() {
//should be call the function
const dispatch = useDispatch();
useEffect(() => {
dispatch(getVideos());
});
return (
//body contents
);
}
=========================>>>>>>>>>>>>>>

## For Server Site (which page you want apply it Exp=> index.js )

export const getServerSideProps = wrapper.getServerSideProps(
(store) => async (context) => {
await store.dispatch(getVideos()//the function);
}
);

==================>>>>>>>>>>>>>>
in redux

## let means =>> state

video :"1:29:0"
