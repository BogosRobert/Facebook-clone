import React from 'react'
import "./StoryReel.css"
import Story from "./Story"
function StoryReel() {
    return (
        <div className="storyreel">
            <Story image="https://images-cdn.9gag.com/photo/aK33o46_700b.jpg"
                   profileSrc="https://images.newscientist.com/wp-content/uploads/2019/09/05110709/ed-bridges-landscape.jpg"
                   title="Andrei Palade"
            />
            <Story image="https://blog.uniplaces.com/wp-content/uploads/2016/05/Happy-friends-having-fun-together-with-selfie-at-club-000089822955_XXXLarge-2-1.jpg"
                   profileSrc="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-8.jpg"
                   title="Iulia Popa"
            />
            <Story image="https://i.redd.it/9ru6x72t9uj31.jpg"
                   profileSrc="https://i.insider.com/589dbb873149a101788b4c85?width=1100&format=jpeg&auto=webp"
                   title="Roxana Stanciu"
            />
            <Story image="https://e11d5fc9b7523843798a-e998297ba111ad78e656b52b2680b18b.ssl.cf1.rackcdn.com/2015AndreLeeEllis_Stathas_085.jpg"
                profileSrc="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-4.jpg"
                title="Alex Nastasa"
            />
            <Story image="https://media.gettyimages.com/photos/selfie-of-a-mountain-biker-picture-id1185937809?s=612x612"
                profileSrc="https://petapixel.com/assets/uploads/2017/11/fake3.jpg"
                title="Andrei Racovita"
            />
        </div>
    )
}

export default StoryReel
