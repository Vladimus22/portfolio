//for select elements
const select_element = (s) => document.querySelector(s);
//open nav bar on clicl
select_element('.open').addEventListener('click', () => {
    select_element('.nav-list').classList.add('active');
}); 
//close nav bar on clicl
select_element('.close').addEventListener('click', () => {
    select_element('.nav-list').classList.remove('active');
}); 


