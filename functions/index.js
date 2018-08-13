const functions = require('firebase-functions');
const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);
const SENDGRID_API_KEY = functions.config().sendgrid.key;
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY);
const cors = require('cors')({ origin: true });
const admin = require('firebase-admin');
admin.initializeApp();


exports.rotmunEmail = functions.database.ref('/delegations/{}')
.onCreate( (snapshot, context) => {
    const email = snapshot._data.headDelEmail;
    const name = snapshot._data.headDelName;
    console.log('function triggered '+email+' '+name);
    const msg = {
        to: email,
        from: 'registration@rotmun2018.com',
        templateId: 'd-50602fa35b2649ea8301d558ea230d21',
        substitutions: {
            name: name
        }
    };
    return sgMail.send(msg)
    .then(() => {
        console.log('email sent!')
    })
    .catch((err) => {
        console.log(err)
    });
})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// exports.helloWorld = functions.https.onRequest((request, response) => {
//     console.log('function is working');
//     response.send('Hello from firebase');
// })

exports.rotmunEmail2 = functions.firestore
    .document('/delegations/{delegationId}')
    .onCreate(event => {
        console.log('triggered')
        // const delId = event.params.delegationId;

        const db = admin.firestore()

        const msg = {
            to: 'omerfarooqali@gmail.com',
            from: 'hello@angularfirebase.com',
            subject:  'New Follower',
            // text: `Hey ${toName}. You have a new follower!!! `,
            // html: `<strong>Hey ${toName}. You have a new follower!!!</strong>`,

            // custom templates
            templateId: 'd-50602fa35b2649ea8301d558ea230d21',
            substitutionWrappers: ['{{', '}}'],
            substitutions: {
              name: 'omer'
              // and other custom properties here
            }
        };

        return sgMail.send(msg)
        .then(() => console.log('email sent!') )
        .catch(err => console.log(err) )

        // return db.collection('delegations').doc(delId)
        //          .get()
        //          .then(doc => {

        //             // const user = doc.data()

        //             const msg = {
        //                 to: 'omerfarooqali@gmail.com',
        //                 from: 'hello@angularfirebase.com',
        //                 subject:  'New Follower',
        //                 // text: `Hey ${toName}. You have a new follower!!! `,
        //                 // html: `<strong>Hey ${toName}. You have a new follower!!!</strong>`,
            
        //                 // custom templates
        //                 templateId: 'd-50602fa35b2649ea8301d558ea230d21',
        //                 substitutionWrappers: ['{{', '}}'],
        //                 substitutions: {
        //                   name: 'omer'
        //                   // and other custom properties here
        //                 }
        //             };

        //             return sgMail.send(msg)
        //         })
        //         .then(() => console.log('email sent!') )
        //         .catch(err => console.log(err) )
                     

});