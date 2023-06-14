import {
    blogData
} from './data.js'
import {
    v4 as uuidv4
} from 'https://jspm.dev/uuid'

const blogSection = document.getElementById('blog-section')
const viewMore = document.querySelector('.btn-div')
let counter = 0

viewMore.addEventListener('click', function () {
    const btn = document.getElementById('btn')
    if (counter == 0) {
        blogSection.innerHTML = feedBlog()
        btn.textContent = 'View less'
        counter++
    } else {
        render()
        btn.textContent = 'View more'
        counter--
    }
})

function feedBlog() {
    let feedHtml = ``
    blogData.forEach(function (entry) {
        feedHtml += `
        <div class="blog-entry" id="${entry.uuid}">
            <img class="blog-image" src="${entry.blogPic}" alt="${entry.blogPicText}">
            <h1 class="blog-title"> ${entry.blogTitle}</h1>
            <p class="blog-body">${entry.blogText}
            </p>
            <p class="blog-date">${entry.blogDate}</p>
        </div>
        `

    })
    return feedHtml
}


function getFeedHtml() {
    let feedHtml = ``
    for (let i = 0; i < 3 && i < blogData.length; i++) {
        const entry = blogData[i]

        feedHtml += `
        <div class="blog-entry" id="${entry.uuid}">
            <img class="blog-image" src="${entry.blogPic}" alt="${entry.blogPicText}">
            <h1 class="blog-title"> ${entry.blogTitle}</h1>
            <p class="blog-body">${entry.blogText}
            </p>
            <p class="blog-date">${entry.blogDate}</p>
        </div>
        `
    }
    return feedHtml
}

function render() {
    blogSection.innerHTML = getFeedHtml()
}

render()