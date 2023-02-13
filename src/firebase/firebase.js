import firebase from "firebase";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASURMENT_ID,
  }; //all code copied from add firebase to your web app (firebase.google.com)

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export{firebase, googleAuthProvider, database as default};


//subscriber child_removed  - listinening for event which takes place when child is removed
/*database.ref('expenses').on('child_removed', (snapshot)=>{
  console.log(snapshot.key, snapshot.val());
})
//child_change - fires when child changes
database.ref('expenses').on('child_changed', (snapshot)=>{
  console.log(snapshot.key, snapshot.val());
})
//child_added - fires when child is added
database.ref('expenses').on('child_added', (snapshot)=>{
  console.log(snapshot.key, snapshot.val());
})

//reading arrays from DB
/*database.ref('expenses')
  .once('value')
  .then((snapshot)=>{
    const expenses = [];
    snapshot.forEach((childSnapshot)=>{
      expenses.push({
        id:childSnapshot.key,
        ...childSnapshot.val()
      });
    });
    console.log(expenses);
  });*/

/*database.ref('expenses').on('value', (snapshot)=>{
  const expenses =[];
  snapshot.forEach((childSnapshot)=>{
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    })
  })
  console.log(expenses);
} , (error)=>{
  console.log('Error with data fetching', error);
})*/

/*database.ref('expenses').push({
  description: 'Cola',
  note: '',
  amount: '1$',
  createdAt: 1000
});*/
/*database.ref('expenses').push({
  description: 'Bear',
  note: '',
  amount: '2$',
  createdAt: 2000
});*/
/*database.ref('expenses').push({
  description: 'Snacks',
  note: '',
  amount: '3$',
  createdAt: 3000
});*/

/*database.ref('notes').push({
  title: 'Course Topics',
  body: 'C++, Python'
});*/


/*const notes = [{
  id: '12',
  title: 'First note',
  body: 'This is my note'
}, {
  id: '76',
  title: 'Another note',
  body: 'This is my note'
}];
//firebase does not support arrays, they get converted to object structure
//we want to store array like this
const firebaseNotes = {
  notes: {
    id1: {
      title: 'First note',
      body: 'This is my note'
    },
    id2: {
      title: 'Another note',
      body: 'This is my note'
    }
  }
};

database.ref('notes').set(notes);*/

//to fetch data we can use once but we get data a single time
/*database.ref('location/city')
  .once('value')
  .then((snapshot)=>{
    const val = snapshot.val(); //val - to return requested data
    console.log(val);
  }).catch((error)=>{
    console.log('This failed', error)
  })*/
//to fetch data we can use on - in this case we will also get data if it changes in DB
//we subscribe to changes

/*const onValueChange = database.ref().on('value', (snapshot)=>{
  console.log(snapshot.val());
}, (error)=>{
  console.log('Error with data fetching', error)
} );

setTimeout(()=>{
  database.ref('age').set(20);
}, 3000);

setTimeout(()=>{
  //to unsubscribe from changes
  //we have to pass function name to remove one subscription if we have many
  database.ref().off('value', onValueChange);
}, 7000);

setTimeout(()=>{
  database.ref('age').set(30);
}, 10000);*/

/*const onValueChange = database.ref().on('value', (snapshot)=>{
  console.log(`${snapshot.val().name} is a ${snapshot.val().job.title} at ${snapshot.val().job.company}`);
}, (error)=>{
  console.log('Error with data fetching', error)
})
setTimeout(()=>{
  database.ref('name').set('Janek');
},3000)*/


//set returs a promise
/*database.ref().set({
    name: 'Janek Kuchmacz',
    age: 28,
    stressLevel: 6,
    job: {
      title: 'Developer',
      company: 'Google'
    },
    location: {
      city: 'Krakow',
      country: 'Polska'
    }
}).then(()=>{
  console.log('Data is saved!')
}).catch((error)=>{
  console.log('This failed', error);
});
database.ref(). update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': 'Proszowice'
});*/
/*database.ref().update({
  name: 'Janusz',
  age: 30,
  job: "teacher", 
  isSingle: null
})*/
/*database.ref().update({
  job: 'Manager',
  'location/city': 'Warsaw'
})*/

//database.ref('isSingle').set(null);
  
//ref - reference ref() - refrence to root
//set = to set value
//database.ref().set('This is my data');
//database.ref('age').set(29);
//database.ref('location/city').set('Warsaw');

//to add new data
/*database.ref('attributes').set({
  height: 180,
  weight: 80
}).then(()=>{
  console.log('Data saved');
}).catch((error)=>{
  console.log('Error!', error);
})*/
/*database.ref('isSingle')
  .remove()
  .then(()=>{
    console.log('Remove succeeded');
  }).catch((e)=>{
    console.log('Error', e);
  })*/



