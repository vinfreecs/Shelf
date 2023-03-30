import { db } from "./firebaseConfig.js";
import { collection,addDoc } from "firebase/firestore";

var menu =
[
    {
      "Title": "Altered Carbon (Takeshi Kovacs, #1)",
      "Author": "Richard K. Morgan",
      "Review": 5,
      "pages": 544,
      "book_shelf": "read",
      "img": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1531415180i/40792913.jpg",
      "description": ""
    },
    {
      "Title": "And Then There Were None",
      "Author": "Agatha Christie",
      "Review": 0,
      "pages": 264,
      "book_shelf": "to-read",
      "img": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1638425885i/16299.jpg",
      "description": ""
    },
    {
      "Title": "Attack on Titan: No Regrets, Vol. 1 (Attack on Titan: No Regrets, #1)",
      "Author": "Hajime Isayama",
      "Review": 0,
      "pages": 192,
      "book_shelf": "to-read",
      "img": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1398033046i/19138879.jpg",
      "description": ""
    },
    {
      "Title": "Broken Angels (Takeshi Kovacs, #2)",
      "Author": "Richard K. Morgan",
      "Review": 0,
      "pages": 366,
      "book_shelf": "to-read",
      "img": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1522157426i/19063.jpg",
      "description": ""
    },
    {
      "Title": "Fahrenheit 451",
      "Author": "Ray Bradbury",
      "Review": 5,
      "pages": 194,
      "book_shelf": "read",
      "img": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1383718290i/13079982.jpg",
      "description": ""
    },
    {
      "Title": "Kafka on the Shore",
      "Author": "Haruki Murakami",
      "Review": 4,
      "pages": 467,
      "book_shelf": "read",
      "img": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1429638085i/4929.jpg",
      "description": ""
    },
    {
      "Title": "Neuromancer (Sprawl, #1)",
      "Author": "William Gibson",
      "Review": 0,
      "pages": 292,
      "book_shelf": "to-read",
      "img": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1554437249i/6088007.jpg",
      "description": ""
    },
    {
      "Title": "Oathbringer (The Stormlight Archive, #3)",
      "Author": "Brandon Sanderson",
      "Review": 0,
      "pages": 1248,
      "book_shelf": "currently-reading",
      "img": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654573897i/34002132.jpg",
      "description": ""
    },
    {
      "Title": "Ready Player Two (Ready Player One, #2)",
      "Author": "Ernest Cline",
      "Review": 0,
      "pages": 370,
      "book_shelf": "to-read",
      "img": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1594220208i/26082916.jpg",
      "description": ""
    },
    {
      "Title": "Rhythm of War (The Stormlight Archive, #4)",
      "Author": "Brandon Sanderson",
      "Review": 0,
      "pages": 1232,
      "book_shelf": "to-read",
      "img": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1599911216i/49021976.jpg",
      "description": ""
    },
    {
      "Title": "Skyward (Skyward, #1)",
      "Author": "Brandon Sanderson",
      "Review": 0,
      "pages": 513,
      "book_shelf": "to-read",
      "img": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1531845177i/36642458.jpg",
      "description": ""
    },
    {
      "Title": "Snow Crash",
      "Author": "Neal Stephenson",
      "Review": 0,
      "pages": 559,
      "book_shelf": "to-read",
      "img": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1589842551i/40651883.jpg",
      "description": ""
    },
    {
      "Title": "The Book Thief",
      "Author": "Markus Zusak",
      "Review": 0,
      "pages": 552,
      "book_shelf": "to-read",
      "img": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1522157426i/19063.jpg",
      "description": ""
    },
    {
      "Title": "The Da Vinci Code (Robert Langdon, #2)",
      "Author": "Dan Brown",
      "Review": 0,
      "pages": 489,
      "book_shelf": "to-read",
      "img": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1579621267i/968.jpg",
      "description": ""
    },
    {
      "Title": "The Diamond Age: Or, a Young Lady's Illustrated Primer",
      "Author": "Neal Stephenson",
      "Review": 0,
      "pages": 499,
      "book_shelf": "to-read",
      "img": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388180931i/827.jpg",
      "description": ""
    },
    {
      "Title": "The Final Empire (Mistborn, #1)",
      "Author": "Brandon Sanderson",
      "Review": 5,
      "pages": 541,
      "book_shelf": "read",
      "img": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1617768316i/68428.jpg",
      "description": ""
    },
    
    {
      "Title": "The Immortals of Meluha (Shiva Trilogy, #1)",
      "Author": "Amish Tripathi",
      "Review": 5,
      "pages": 436,
      "book_shelf": "read",
      "img": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1334659192i/7913305.jpg",
      "description": ""
    },
    {
      "Title": "The Name of the Wind (The Kingkiller Chronicle, #1)",
      "Author": "Patrick Rothfuss",
      "Review": 0,
      "pages": 662,
      "book_shelf": "to-read",
      "img": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1270352123i/186074.jpg",
      "description": ""
    },
    {
      "Title": "The Oath of the Vayuputras (Shiva Trilogy, #3)",
      "Author": "Amish Tripathi",
      "Review": 4,
      "pages": 575,
      "book_shelf": "read",
      "img": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1357242702i/12820793.jpg",
      "description": ""
    },
    {
      "Title": "The Secret of the Nagas (Shiva Trilogy, #2)",
      "Author": "Amish Tripathi",
      "Review": 4,
      "pages": 398,
      "book_shelf": "read",
      "img": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1532560274i/40948565.jpg",
      "description": ""
    },
    
    {
      "Title": "The Well of Ascension (Mistborn, #2)",
      "Author": "Brandon Sanderson",
      "Review": 4,
      "pages": 592,
      "book_shelf": "read",
      "img": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1619538925i/68429.jpg",
      "description": ""
    },
    {
      "Title": "Woken Furies (Takeshi Kovacs, #3)",
      "Author": "Richard K. Morgan",
      "Review": 0,
      "pages": 450,
      "book_shelf": "to-read",
      "img": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388198991i/29397.jpg",
      "description": ""
    },
    {
      "Title": "Words of Radiance (The Stormlight Archive, #2)",
      "Author": "Brandon Sanderson",
      "Review": 5,
      "pages": 1087,
      "book_shelf": "read",
      "img": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1659905768i/17332218.jpg",
      "description": ""
    }
  ]

//   const handleSubmit = async () => {

//     const collectionRef = collection(db,"books")

//     setBook({
//       Title:"",
//     Author:"",
//     img:"",
//     Review:"",
//     book_shelf:"",
//     pages:"",
//     description:""
//     })
//     setIsOpen(false);
//     await addDoc(collectionRef,book)
// };
// menu.forEach(function(obj) {
//     const collectionRef = collection(db,"books")
//     addDoc(collectionRef,{
//         Title:obj.Title,
//     Author:obj.Author,
//     img:obj.img,
//     Review:obj.Review,
//     book_shelf:obj.book_shelf,
//     pages:obj.pages,
//     description:obj.description
//     }).then(function(docRef) {
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch(function(error) {
//         console.error("Error adding document: ", error);
//     });
// });
menu.forEach(function(obj) {
    db.collection("books").add({
        id: obj.id,
        name: obj.name,
        description: obj.description,
        price: obj.price,
        type: obj.type
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});