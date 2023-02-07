// 1번 채널
const apiKey = 'AIzaSyDBdgLeR52TQwAt46RZJVghW9Nex12rM7k';
const channelId = 'UCFkJ7xO5GhJsk6yjlenrTyg';

const videoChannl = document.querySelector('#video-channel');

const channelEndpoint = `https://www.googleapis.com/youtube/v3/channels?key=${apiKey}&id=${channelId}&part=snippet,contentDetails,statistics`;

fetch(channelEndpoint)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        showChannel(data);

    });

function showChannel(data) {
    const imageLink = data.items[0].snippet.thumbnails.medium.url;
    const title = data.items[0].snippet.title;
    const description = data.items[0].snippet.description;
    const videos = data.items[0].statistics.videoCount;
    const subscribers = data.items[0].statistics.subscriberCount;
    const views = data.items[0].statistics.viewCount;

    let output = `
        <div class="col-md-6 mb-4 text-center">
            <img class="img-fluid" src="${imageLink}">>
            <br>
            <a class="btn btn-danger btn-sm role="button" href="https://www.youtube.com/channel/${channelId}" target="_blank"> go to my channel </a>
        </div>
        <div class="col-md-6 mb-4">
        <ul class="list-group shadow-lg">
            <li class="list-group-item bg-danger text-white"><strong>유튜브채널: ${title}</strong></li> 
            <li class="list-group-item"><strong>채널설명: ${description}</strong></li> 
            <li class="list-group-item"><strong>영상개수: ${numberWithCommas(videos)}</strong></li> 
            <li class="list-group-item"><strong>구독자수: ${numberWithCommas(subscribers)}</strong></li> 
            <li class="list-group-item"><strong>총조회수: ${numberWithCommas(views)}</strong></li> 

    `;
    videoChannl.innerHTML = output;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


// 2번채널
const channelId01 = 'UCE8HlkhCROH0ncCP8v7dKIQ';
const videoChannl01 = document.querySelector('#video-channel01');
const channelEndpoint01 = `https://www.googleapis.com/youtube/v3/channels?key=${apiKey}&id=${channelId01}&part=snippet,contentDetails,statistics`;
fetch(channelEndpoint01)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        showChannel01(data);

    });

function showChannel01(data) {
    const imageLink = data.items[0].snippet.thumbnails.medium.url;
    const title = data.items[0].snippet.title;
    const description = data.items[0].snippet.description;
    const videos = data.items[0].statistics.videoCount;
    const subscribers = data.items[0].statistics.subscriberCount;
    const views = data.items[0].statistics.viewCount;

    let output = `
        <div class="col-md-6 mb-4 text-center">
            <img class="img-fluid" src="${imageLink}">>
            <br>
            <a class="btn btn-danger btn-sm role="button" href="https://www.youtube.com/channel/${channelId01}" target="_blank"> go to my channel </a>
        </div>
        <div class="col-md-6 mb-4">
        <ul class="list-group shadow-lg">
            <li class="list-group-item bg-danger text-white"><strong>유튜브채널: ${title}</strong></li> 
            <li class="list-group-item"><strong>채널설명: ${description}</strong></li> 
            <li class="list-group-item"><strong>영상개수: ${numberWithCommas(videos)}</strong></li> 
            <li class="list-group-item"><strong>구독자수: ${numberWithCommas(subscribers)}</strong></li> 
            <li class="list-group-item"><strong>총조회수: ${numberWithCommas(views)}</strong></li> 

    `;
    videoChannl01.innerHTML = output;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


// 3번채널
const channelId02 = 'UCuO0IC7G6zq8ljHirxvOS4Q';
const videoChannl02 = document.querySelector('#video-channel02');
const channelEndpoint02 = `https://www.googleapis.com/youtube/v3/channels?key=${apiKey}&id=${channelId02}&part=snippet,contentDetails,statistics`;
fetch(channelEndpoint02)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        showChannel02(data);

    });

function showChannel02(data) {
    const imageLink = data.items[0].snippet.thumbnails.medium.url;
    const title = data.items[0].snippet.title;
    const description = data.items[0].snippet.description;
    const videos = data.items[0].statistics.videoCount;
    const subscribers = data.items[0].statistics.subscriberCount;
    const views = data.items[0].statistics.viewCount;

    let output = `
        <div class="col-md-6 mb-4 text-center">
            <img class="img-fluid" src="${imageLink}">>
            <br>
            <a class="btn btn-danger btn-sm role="button" href="https://www.youtube.com/channel/${channelId02}" target="_blank"> go to my channel </a>
        </div>
        <div class="col-md-6 mb-4">
        <ul class="list-group shadow-lg">
            <li class="list-group-item bg-danger text-white"><strong>유튜브채널: ${title}</strong></li> 
            <li class="list-group-item"><strong>채널설명: ${description}</strong></li> 
            <li class="list-group-item"><strong>영상개수: ${numberWithCommas(videos)}</strong></li> 
            <li class="list-group-item"><strong>구독자수: ${numberWithCommas(subscribers)}</strong></li> 
            <li class="list-group-item"><strong>총조회수: ${numberWithCommas(views)}</strong></li> 

    `;
    videoChannl02.innerHTML = output;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

