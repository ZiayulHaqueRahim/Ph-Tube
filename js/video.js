// const cardDemo = {
//     "category_id": "1003",
//     "video_id": "aaaj",
//     "thumbnail": "https://i.ibb.co/xgWL3vQ/kid-gorgeous.jpg",
//     "title": "Kid Gorgeous",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/xsfkwN2/john.jpg",
//             "profile_name": "John Mulaney",
//             "verified": true
//         }
//     ],
//     "others": {
//         "views": "241K",
//         "posted_date": ""
//     },
//     "description": "John Mulaney's 'Kid Gorgeous' has captured the hearts of many with 241K views. As a verified comedian, John delivers a masterclass in stand-up with clever anecdotes, quick wit, and relatable humor. This performance is a laugh-filled adventure through his unique take on life, politics, and pop culture."
// }

//time conversion:
function getTimeString(time){

    //get hour and rest seconds:
    const hour = parseInt(time / 3600);
    let remainingSeconds = parseInt(time % 3600)
    const minute = parseInt(remainingSeconds / 60)
    const second = parseInt(remainingSeconds % 60)
    return `${hour} hour ${minute} minute ${second} second ago`
}

//1. fetch, load and show categories on html


//create loadCategories 
//create displaycategories

    const loadCategories = () =>{
        fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then((res) => res.json())
        .then((data) => displayCategories(data.categories))
        .catch((error) => console.log(error));

    };





    //  create loadvideos
    //create displayVideos

    const loadVideos = () => {
        fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then((res) => res.json())
        .then((data) => displayVideos(data.videos))
        .catch((error) => console.log(error))
    }

    const displayVideos = (videos) => {
        const videoContainer =document.getElementById('videoContainer')
        videos.forEach(video => {
            //creating a card

            const card = document.createElement('div');
            card.classList = "card card-compact"
            card.innerHTML = `
                <figure class="h-[200px] relative">
                    <img
                    src=${video.thumbnail}
                    class="w-full h-full object-cover"
                    alt="Shoes" />
                        ${video.others.posted_date?.length == 0 ? "" : `<span class="absolute right-1 bottom-1 bg-black p-1 text-sm  text-white rounded">${getTimeString(video.others.posted_date)}</span>`}
                </figure>
                <div class="px-0 py-2 flex gap-2">
                   <div>
                        <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture}>
                   </div>
                   <div>
                        <h2 class="font-bold">
                            ${video.title}
                        </h2>
                        <div class=" flex items-center gap-2">
                            <p class="text-gray-400">${video.authors[0].profile_name}  </p>
                                ${video.authors[0].verified === true ? '<img class=" w-4 h-4" src="https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png"/>' : ""}
                            
                        </div>
                   </div>               
                </div>
                `;

                videoContainer.append(card)
        })
    }


    const displayCategories = (categories) =>{
        const categoryContainer = document.getElementById('categories')

        categories.forEach(item => {
            //create button:
            const button = document.createElement('button');
            button.classList = 'btn';
            button.innerText = item.category;

            //add button to category container:
            categoryContainer.append(button)
       })

    }

    loadCategories();
    loadVideos();