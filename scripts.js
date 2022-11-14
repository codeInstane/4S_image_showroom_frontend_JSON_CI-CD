const app = document.getElementById('root');

const head = document.createElement('div');
head.setAttribute('class','head');

const logo = document.createElement('img');
logo.src = 'img/logo.png';

const container = document.createElement('div');
container.setAttribute('class','container');

app.appendChild(head);
head.appendChild(logo);
app.appendChild(container);


var count = 0;

fetch('response_image.json')
            .then(response => response.json())
            //begin to access JSON data here
            .then(data => {
                console.log(data)


    
        data.attached_image.forEach(photo =>{
            count++;

            const card = document.createElement('div');
            card.setAttribute('class','card');

            const cardHeader = document.createElement('div');
            if(count%2===0){
                console.log('count:'+count);
                cardHeader.setAttribute('class','card_header1');
            }else{
                cardHeader.setAttribute('class','card_header2');
            }
            
            const h2 = document.createElement('h2');
            h2.textContent = photo.Id;

            const director = document.createElement('small');
            director.textContent = `-- ${photo.cre_dt} --`;

            const cardBody =document.createElement('div');
            cardBody.setAttribute('class','card_body');

            const p = document.createElement('p');
            
            p.textContent = `*** ${photo.name_chi_fullname} **`;

            const circle = document.createElement('img');
            
                circle.setAttribute('class','circle1');
            
               // circle.setAttribute('class','circle2');
            circle.src = photo.data_url;
            

           /* const score = document.createElement('img');
            score.src = product.photo;
        */

            container.appendChild(card);
            card.appendChild(cardHeader);
            cardHeader.appendChild(h2);
            cardHeader.appendChild(director);
            card.appendChild(cardBody);
            cardBody.appendChild(p);
            card.appendChild(circle);
           // circle.appendChild(score);
                        
        });
    });