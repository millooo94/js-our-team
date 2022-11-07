const eleContainer = document.querySelector('.container')

const ArrTeam = [
     {
        name: 'Wayne Barnett',
        occupation: 'Founder & CEO',
        img: 'img/wayne-barnett-founder-ceo.jpg',
    },
     {
        name: 'Angela Caroll',
        occupation: 'Chief Editor',
        img: 'img/angela-caroll-chief-editor.jpg',
    },
     {
        name: 'Walter Gordon',
        occupation: 'Office Manager',
        img: 'img/walter-gordon-office-manager.jpg',
    },
     {
        name: 'Angela Lopez',
        occupation: 'Social Media Manager',
        img: 'img/angela-lopez-social-media-manager.jpg',
    },
     {
        name: 'Scott Estrada',
        occupation: 'Developer',
        img: 'img/scott-estrada-developer.jpg',
    },
     {
        name: 'Barbara Ramos',
        occupation: 'Graphic Designer',
        img: 'img/barbara-ramos-graphic-designer.jpg',
    },
]


console.table(ArrTeam)

const eleTitle = document.createElement('h1')
eleTitle.classList.add('text-center')
eleTitle.innerHTML = 'OUR TEAM'
eleContainer.append(eleTitle)
const eleParagraph = document.createElement('p')
eleParagraph.classList.add('text-center', 'mt-4', 'mb-5')
eleParagraph.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesent in varius ante. Sed quis luctus eros. Phasellus rutrum laoreet leo in consequat.'
eleContainer.append(eleParagraph)

const eleRow = document.createElement('div')
eleRow.classList.add('row', 'g-5')
eleContainer.append(eleRow)

for (let i = 0; i < ArrTeam.length; i++) {

    eleCol = document.createElement('div')
    eleCol.classList.add('col-sm-12', 'col-md-6', 'col-lg-4')
    eleRow.append(eleCol)

    const eleCard = document.createElement('div')
    eleCard.classList.add('card')
    eleCol.append(eleCard)

    const eleImg = document.createElement('img')
    eleImg.src = ArrTeam[i].img
    eleCard.classList.add('card-img-top')
    eleCard.append(eleImg)

    const eleCardBody = document.createElement('div')
    eleCardBody.classList.add('card-body')
    eleCard.append(eleCardBody)

    const eleCardName = document.createElement('div')
    eleCardName.innerHTML = ArrTeam[i].name
    eleCardName.style.textAlign ='center'
    eleCardName.style.fontSize ='1.3rem'
    eleCardName.style.fontFamily = 'Playfair Display, serif'
    eleCardBody.append(eleCardName)

    const eleCardOccupation = document.createElement('div')
    eleCardOccupation.innerHTML = ArrTeam[i].occupation
    eleCardOccupation.style.textAlign ='center'
    eleCardOccupation.style.fontSize ='.7rem'
    eleCardBody.append(eleCardOccupation)
}