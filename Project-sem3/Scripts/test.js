


  
const firebaseConfig = {
    apiKey: "AIzaSyChMj35PPO0bnfdosIYQ-Sm9EnO2h2SnaQ",
    authDomain: "newfirebase-479cc.firebaseapp.com",
    databaseURL: "https://newfirebase-479cc.firebaseio.com",
    projectId: "newfirebase-479cc",
    storageBucket: "newfirebase-479cc.appspot.com",
    messagingSenderId: "174461257475",
    appId: "1:174461257475:web:c9ebb197067b1e55398b36",
    measurementId: "G-D7K94DD3TK"
};

var defaultProject = firebase.initializeApp(firebaseConfig);
console.log(defaultProject.name)
var defaultFirestore = defaultProject.firestore();
defaultFirestore = firebase.firestore();

const listcafe = document.querySelector('#cafe-list');
const formcafe = document.querySelector('#add-cafe-form');
function RenderCafe(doc) {
    let li = document.createElement('li')
    let name = document.createElement('span')
    let age = document.createElement('span')
    let update = document.createElement('button')
    update.textContent='edit'
    li.setAttribute('data-id', doc.id)
    name.textContent = doc.data().name
    age.textContent = doc.data().age
    li.appendChild(name);
    li.appendChild(age);
    li.appendChild(update);
    listcafe.appendChild(li);
    update.addEventListener('click', (e => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        defaultFirestore.collection('cafes').doc(id).update({
            name:'dat',
            age:1
        })
           
    })) 
}
formcafe.addEventListener('submit', (e => {
    e.preventDefault(),
    defaultFirestore.collection('cafes').add({
        name: formcafe.name.value,
        age: formcafe.age.value
    })
    name: formcafe.name.value=''
    age: formcafe.age.value = ''
}))


//defaultFirestore.collection('cafes').where('name','==','dat').orderBy('age').get().then((snapshot) => {
//    snapshot.docs.forEach(doc => {
//        RenderCafe(doc)
//    })
//})
defaultFirestore.collection('cafes').orderBy('name').onSnapshot(function (snapshot) {
    let changes = snapshot.docChanges();
    console.log(changes);
    changes.forEach(change => {
        if (change.type == 'added') {
            RenderCafe(change.doc)
        }
        if (change.type === "modified") {
            RenderCafe(doc)
        }
    })
})


