console.log('-index.js-')

const loadCoursesBtn = document.querySelector('#load-courses-btn')
const courseSearchField = document.querySelector('#course-search-field')

let courses = []

loadCoursesBtn.addEventListener('click', e => {
    const xhr = new XMLHttpRequest() // XHR Api
    xhr.open('GET', 'data/courses.json', false) // sync request..
    xhr.send()
    const jsonText = xhr.responseText
    courses = JSON.parse(jsonText)
    renderCourses(courses)
})

courseSearchField.addEventListener('keyup', e => {
    let searchKey = e.target.value
    console.log(searchKey)
    let filteredCourses = courses.filter(course => course.title.includes(searchKey))
    renderCourses(filteredCourses)
})

function renderCourses(courses) {
    let newArr = courses.map(course => {
        let courseEle = `
            <div class="col-12 col-sm-3 col-md-4">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${course.title}</h5>
                        <p class="card-text"> ${course.duration / 8} days </p>
                        <a href="#" class="btn btn-fill btn-primary">view</a>
                    </div>
                </div>
            </div>
        `
        return courseEle
    })
    document.getElementById('course-box').innerHTML = newArr.join(" ")
}