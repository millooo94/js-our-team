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

const ArrTeam2 = [
    {
       name: 'Cane Pazzo',
       occupation: 'Founder & CEO',
       img: 'img/wayne-barnett-founder-ceo.jpg',
   },
    {
       name: 'Mr. Flame',
       occupation: 'Chief Editor',
       img: 'img/angela-caroll-chief-editor.jpg',
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

function cardGenerator(arrM) {
    
	for (let i = 0; i < ArrTeam.length; i++) {

		col = document.createElement('div')
		col.classList.add('col-sm-12', 'col-md-6', 'col-lg-4')
		eleRow.append(col)
	
		const card = document.createElement('div')
		card.classList.add('card')
		col.append(card)
	
		const img = document.createElement('img')
		img.src = arrM[i].img
		card.classList.add('card-img-top')
		card.append(img)
	
		const cardBody = document.createElement('div')
		cardBody.classList.add('card-body')
		card.append(cardBody)
	
		const name = document.createElement('div')
		name.innerHTML = arrM[i].name
		name.style.textAlign ='center'
		name.style.fontSize ='1.3rem'
		name.style.fontFamily = 'Playfair Display, serif'
		cardBody.append(name)
	
		const occupation = document.createElement('div')
		occupation.innerHTML = arrM[i].occupation
		occupation.style.textAlign ='center'
		occupation.style.fontSize ='.7rem'
		cardBody.append(occupation)
	}
}

 

cardGenerator(ArrTeam2);





